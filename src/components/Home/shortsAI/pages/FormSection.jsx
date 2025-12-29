import React, { useEffect, useState, memo, useCallback } from "react";
import SelectInput from "../components/SelectInput";
import Select from "react-select";
import { Country, State, City } from "country-state-city";
import handleGenerateClick from "../utils/eligible";
import { toast } from "react-toastify";
import useOpenAI from "../utils/useOpenAI";

const IP_CACHE_KEY = "cached_user_ip";
const IP_LOGS_KEY = "user_ip_logs";
const LIMIT = 3;
const MS_24H = 24 * 60 * 60 * 1000;

// ✅ AI Tones with Descriptions
// const toneOptions = [
//   { name: "Neutral", desc: "Balanced and fact-based tone." },
//   { name: "Crisp", desc: "Short, clear, and impactful tone." },
//   { name: "Professional", desc: "Polished and credible writing style." },
//   { name: "Engaging", desc: "Hooks the reader instantly." },
//   { name: "Urgent", desc: "Perfect for breaking or developing stories." },
// ];

const toneOptions = [
  {
    name: "Neutral",
    desc: "Balanced, fact-based, and non-opinionated reporting.",
    useFor: "Breaking news, politics, government, business, law",
    default: true,
  },
  {
    name: "Formal",
    desc: "Institutional, official, and policy-focused tone.",
    useFor: "Government statements, court rulings, official releases, budgets",
  },
  {
    name: "Explainer",
    desc: "Simple language with context-first explanation.",
    useFor: "Policies, schemes, technology, economy, education",
  },
  {
    name: "Analytical",
    desc: "Data-driven, cause-and-effect focused writing.",
    useFor: "Economy, markets, elections, long-term trends",
  },
  {
    name: "Conversational",
    desc: "Clear, readable, and human-friendly tone.",
    useFor: "Lifestyle, culture, travel, human-interest stories",
  },
  {
    name: "Editorial",
    desc: "Opinion-based, viewpoint-driven institutional voice.",
    useFor: "Editorials, opinion columns, commentary",
  },
];

function FormSection({
  // formData,
  // setFormData,
  setGeneratedShort,

  loading,
  setLoading,
}) {
  const categories = [
    "Politics",
    "Business",
    "National",
    "International",
    "Technology",
    "Education",
    "Health",
    "Law & Courts",
    "Economy",
    "Environment",
  ];
  const { generateContent } = useOpenAI();
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [usageCount, setUsageCount] = useState(0);
  const [nextResetTime, setNextResetTime] = useState(null);
  const [userIP, setUserIP] = useState("local_fallback_ip");
  const [countdown, setCountdown] = useState("");
  const [formData, setFormData] = useState({
    tone: "",
    category: "",
    country: "",
    state: "",
    city: "",
    topic: "",
  });
  const handleGenerate = async () => {

    setLoading(true);
    // setGeneratedShort({
    //   image: "https://picsum.photos/512/266",
    //   title: "Amazing AI Short",
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    // });

    const result =
      await generateContent(`Write a short, verified, and up-to-date news article from ${formData.city},  ${formData.state}, ${formData.country}, in the ${formData.category} category, written in a ${formData.tone} tone and topic ${formData.topic}. 
The article must reflect real developments from today or at most one day old. Consider the following topic, idea, or suggestion while generating the content:.
Return the result strictly in JSON format with the following keys:
{
  "title": "A short, attention-grabbing title of 5–12 words",
  "description": "A concise summary of exactly 59 words capturing the key points",
  "image": "A relevant and verified image URL from a real source"
}
Do not include any extra text, commentary, or markdown — only return valid JSON.`);
    console.log(result);
    setGeneratedShort(result);
    result !== "Error generating content." && toast.success("Short generated!");
    setLoading(false);

    // Mock API delay
    setTimeout(() => {
      setGeneratedShort(result);
      setLoading(false);
    }, 1500);
  };
  // --- Fetch or use cached IP ---
  useEffect(() => {
    async function fetchPublicIP() {
      try {
        const cached = localStorage.getItem(IP_CACHE_KEY);
        if (cached) {
          const obj = JSON.parse(cached);
          if (obj.ip && obj.fetchedAt && Date.now() - obj.fetchedAt < MS_24H) {
            setUserIP(obj.ip);
            return obj.ip;
          }
        }

        const res = await fetch("https://api.ipify.org?format=json");
        const data = await res.json();
        const ip = data.ip || "local_fallback_ip";

        localStorage.setItem(
          IP_CACHE_KEY,
          JSON.stringify({ ip, fetchedAt: Date.now() })
        );

        setUserIP(ip);
        return ip;
      } catch {
        console.warn("IP fetch failed, using fallback");
        setUserIP("local_fallback_ip");
        return "local_fallback_ip";
      }
    }

    fetchPublicIP().then(() => {
      setCountries(Country.getAllCountries());
    });
  }, []);

  // --- Watch for IP change ---
  useEffect(() => {
    if (userIP) checkUsageLimit(userIP);
  }, [userIP]);

  // --- Load States when Country Changes ---
  useEffect(() => {
    if (formData.country) {
      const c = countries.find((x) => x.name === formData.country);
      setStates(c ? State.getStatesOfCountry(c.isoCode) : []);
    } else setStates([]);
  }, [formData.country, countries]);

  // --- Load Cities when State Changes ---
  useEffect(() => {
    if (formData.state && formData.country) {
      const c = countries.find((x) => x.name === formData.country);
      const s = states.find((x) => x.name === formData.state);
      setCities(c && s ? City.getCitiesOfState(c.isoCode, s.isoCode) : []);
    } else setCities([]);
  }, [formData.state, formData.country, states, countries]);

  // --- Check usage limit ---
  const checkUsageLimit = (ip) => {
    const raw = localStorage.getItem(IP_LOGS_KEY);
    const logs = raw ? JSON.parse(raw) : {};
    const timestamps = logs[ip] || [];

    const now = Date.now();
    const validTimestamps = timestamps.filter((t) => now - t < MS_24H);
    const nextReset =
      validTimestamps.length >= LIMIT ? validTimestamps[0] + MS_24H : null;

    setUsageCount(validTimestamps.length);
    setNextResetTime(nextReset);

    logs[ip] = validTimestamps;
  };

  // --- Record usage ---
  const recordUsage = (ip) => {
    const raw = localStorage.getItem(IP_LOGS_KEY);
    const logs = raw ? JSON.parse(raw) : {};
    const now = Date.now();

    if (!logs[ip]) logs[ip] = [];
    logs[ip].push(now);
    checkUsageLimit(ip);
  };

  // --- Countdown Timer ---
  useEffect(() => {
    if (!nextResetTime) return;

    const interval = setInterval(() => {
      const diff = nextResetTime - Date.now();
      if (diff <= 0) {
        clearInterval(interval);
        checkUsageLimit(userIP);
      } else {
        const hours = String(Math.floor(diff / 3600000)).padStart(2, "0");
        const mins = String(Math.floor((diff % 3600000) / 60000)).padStart(
          2,
          "0"
        );
        const secs = String(Math.floor((diff % 60000) / 1000)).padStart(2, "0");
        setCountdown(`${hours}:${mins}:${secs}`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [nextResetTime, userIP]);

  // --- Handle input change ---
  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  // --- Handle location type ---
  const handleLocationTypeChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      locationType: value,
      country: "",
      state: "",
      city: "",
    }));
  };

  // --- Generate Click ---
  const onGenerateClick = () => {
    const { tone, category } = formData;

    if (!tone || !category) {
      toast.error(
        `Please select ${!tone ? "AI Tone" : ""}${
          !tone && !category ? " and " : ""
        }${!category ? "Category" : ""} before generating.`
      );
      return;
    }

    if (usageCount >= LIMIT) {
      toast.error("You’ve reached today’s limit. Try again later.");
      return;
    }

    handleGenerateClick(handleGenerate, setLoading);
    recordUsage(userIP);
  };

  const currentToneDesc =
    toneOptions.find((t) => t.name === formData.tone)?.desc || "";

  return (
    <div className="flex flex-col gap-4 w-full px-4 sm:px-6 md:px-8">
      {/* Optional Topic Input */}
      <div className="w-full">
        <label className="block text-gray-900  text-sm sm:text-base font-medium mb-1">
          Topic (optional)
        </label>
        <input
          type="text"
          name="topic"
          value={formData.topic || ""}
          onChange={(e) => handleChange("topic", e.target.value)}
          placeholder="Enter topic, idea, or suggestions for AI to consider while generating (OPTIONAL)"
          className="md:w-full w-11/12 border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>
      {/* Tone Selector */}
      <SelectInput
        label="AI Tone / Writing Style"
        value={formData.tone}
        onChange={(e) => handleChange("tone", e.target.value)}
        options={toneOptions.map((t) => t.name)}
        required
      />
      {formData.tone && (
        <p className="text-sm text-gray-600 italic pl-1">{currentToneDesc}</p>
      )}

      {/* Category Selector */}
      <SelectInput
        label="Category"
        value={formData.category}
        onChange={(e) => handleChange("category", e.target.value)}
        options={categories}
        required
      />

      {/* Location Section */}
      <div>
        <label className="block font-medium mb-1">Optional Location</label>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 mb-3">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="locationType"
              checked={formData.locationType === "global"}
              onChange={() => handleLocationTypeChange("global")}
              className="accent-[#16274E] w-4 h-4"
            />
            <span className="text-sm text-[#1E293B] font-medium">Global</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="locationType"
              checked={formData.locationType === "country"}
              onChange={() => handleLocationTypeChange("country")}
              className="accent-[#16274E] w-4 h-4"
            />
            <span className="text-sm text-[#1E293B] font-medium">Country</span>
          </label>
        </div>

        {formData.locationType === "country" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            <Select
              options={countries.map((c) => ({ value: c.name, label: c.name }))}
              value={
                formData.country
                  ? { value: formData.country, label: formData.country }
                  : null
              }
              onChange={(sel) => handleChange("country", sel?.value || "")}
              placeholder="Select Country"
              isClearable
            />
            <Select
              options={states.map((s) => ({ value: s.name, label: s.name }))}
              value={
                formData.state
                  ? { value: formData.state, label: formData.state }
                  : null
              }
              onChange={(sel) => handleChange("state", sel?.value || "")}
              placeholder="Select State"
              isDisabled={!formData.country}
              isClearable
            />
            <Select
              options={cities.map((c) => ({ value: c.name, label: c.name }))}
              value={
                formData.city
                  ? { value: formData.city, label: formData.city }
                  : null
              }
              onChange={(sel) => handleChange("city", sel?.value || "")}
              placeholder="Select City"
              isDisabled={!formData.state}
              isClearable
            />
          </div>
        )}
      </div>

      {/* Generate Button */}
      <button
        onClick={onGenerateClick}
        disabled={loading || usageCount >= LIMIT}
        className={`md:w-full w-11/12 mt-3 py-3 text-white font-bold rounded-md transition ${
          loading || usageCount >= LIMIT
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-[#16274E] hover:bg-blue-900"
        }`}
      >
        {loading ? "Generating..." : "Generate Short"}
      </button>

      {/* Limit Info */}
      <div className="text-center mt-2 text-sm text-gray-700 font-medium">
        {usageCount < LIMIT ? (
          <>
            You’ve generated <span className="font-bold">{usageCount}</span> of{" "}
            <span className="font-bold">{LIMIT}</span> shorts today.
          </>
        ) : (
          <>
            <span className="text-red-600 font-semibold">
              Daily limit reached!
            </span>{" "}
            You can generate more after{" "}
            <span className="font-bold text-blue-700">
              {new Date(nextResetTime).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })}
            </span>{" "}
            (in {countdown}).
          </>
        )}
      </div>
    </div>
  );
}

export default memo(FormSection);
