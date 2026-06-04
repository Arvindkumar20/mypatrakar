import { useState, useEffect } from "react";
import { AlertCircle, BookOpen, Info, Clock } from "lucide-react";
import { showSuccess } from "../../../../utils/swal";

export default function App() {
  const [category, setCategory] = useState("");
  const [credits, setCredits] = useState(3);
  const [loading, setLoading] = useState(false);
  const [generatedNews, setGeneratedNews] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [showQuotaModal, setShowQuotaModal] = useState(false);
  const [categories, setCategories] = useState([]);
  const [categoriesLoading, setCategoriesLoading] = useState(true);
  const [categoriesError, setCategoriesError] = useState(null);

  // Timer ke liye naye states
  const [nextResetTime, setNextResetTime] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState("");
  const [userIp, setUserIp] = useState("unknown_ip");

  const API_BASE_URL = import.meta.env.VITE_APP_AI_BASE_API_URL;
  const CUSTOM_TOKEN = "22222";

  // Fetch categories on component mount
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    setCategoriesLoading(true);
    setCategoriesError(null);

    try {
      const response = await fetch(`${API_BASE_URL}/ai-categories`, {
        method: "GET",
        headers: {
          "X-Custom-Token": CUSTOM_TOKEN,
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch categories: ${response.status}`);
      }

      const data = await response.json();

      if (data.status_code === 200 && Array.isArray(data.response)) {
        setCategories(data.response);
        // Set first category as default if available
        if (data.response.length > 0) {
          setCategory(data.response[0]);
        }
      } else {
        throw new Error("Invalid response format from categories API");
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
      setCategoriesError(error.message);
      // Fallback categories in case API fails
      setCategories([
        "general",
        "society",
        "science_technology",
        "politics_government",
        "economy_business_finance",
        "arts_culture_entertainment",
        "lifestyle_leisure",
        "human_interest",
        "sport",
        "crime_law_justice",
        "education",
        "environment",
        "labour",
        "health",
        "automotive",
        "real_estate",
      ]);
    } finally {
      setCategoriesLoading(false);
    }
  };

  // Format category for display
  const formatCategoryName = (categoryId) => {
    if (!categoryId) return "";
    return categoryId
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  useEffect(() => {
    const initializeQuota = async () => {
      let currentIp = "unknown_ip";
      try {
        const ipResponse = await fetch("https://api.ipify.org?format=json");
        const ipData = await ipResponse.json();
        currentIp = ipData.ip;
        setUserIp(currentIp);
      } catch (e) {
        console.error("Could not fetch IP", e);
      }

      const storedDataStr = localStorage.getItem("ai_journalist_quota");
      const now = Date.now();
      const oneDay = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

      if (storedDataStr) {
        try {
          const storedData = JSON.parse(storedDataStr);
          const timePassed = now - storedData.resetTime;

          if (timePassed >= oneDay) {
            // 24 ghante ho chuke hain, reset karein
            const newData = { ip: currentIp, credits: 3, resetTime: now };
            localStorage.setItem(
              "ai_journalist_quota",
              JSON.stringify(newData),
            );
            setCredits(3);
            setNextResetTime(now + oneDay);
          } else {
            // Abhi 24 ghante bache hain
            setCredits(storedData.credits);
            setNextResetTime(storedData.resetTime + oneDay);
          }
        } catch (e) {
          const newData = { ip: currentIp, credits: 3, resetTime: now };
          localStorage.setItem("ai_journalist_quota", JSON.stringify(newData));
          setCredits(3);
          setNextResetTime(now + oneDay);
        }
      } else {
        // First visit
        const newData = { ip: currentIp, credits: 3, resetTime: now };
        localStorage.setItem("ai_journalist_quota", JSON.stringify(newData));
        setCredits(3);
        setNextResetTime(now + oneDay);
      }
    };

    initializeQuota();
  }, []);

  useEffect(() => {
    let interval;
    // Timer sirf tab chalega jab credits 0 honge aur reset time set hoga
    if (credits === 0 && nextResetTime) {
      interval = setInterval(() => {
        const now = Date.now();
        const diff = nextResetTime - now;

        if (diff <= 0) {
          // Timer khatam, quota reset karein
          setCredits(3);
          setTimeRemaining("");
          setShowQuotaModal(false);

          const newNow = Date.now();
          const newData = { ip: userIp, credits: 3, resetTime: newNow };
          localStorage.setItem("ai_journalist_quota", JSON.stringify(newData));
          setNextResetTime(newNow + 24 * 60 * 60 * 1000);

          clearInterval(interval);
        } else {
          // Time ko format karein HH:MM:SS me
          const h = Math.floor(diff / (1000 * 60 * 60))
            .toString()
            .padStart(2, "0");
          const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
            .toString()
            .padStart(2, "0");
          const s = Math.floor((diff % (1000 * 60)) / 1000)
            .toString()
            .padStart(2, "0");
          setTimeRemaining(`${h}h ${m}m ${s}s`);
        }
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [credits, nextResetTime, userIp]);

  const deductCredit = () => {
    const newCredits = Math.max(0, credits - 1);
    setCredits(newCredits);

    const storedDataStr = localStorage.getItem("ai_journalist_quota");
    if (storedDataStr) {
      try {
        const storedData = JSON.parse(storedDataStr);
        storedData.credits = newCredits;
        localStorage.setItem("ai_journalist_quota", JSON.stringify(storedData));
      } catch (e) {
        console.error("Error updating local storage", e);
      }
    }
  };

  const handleGenerateNews = async () => {
    if (!category) {
      setErrorMsg("Please select a category first");
      return;
    }

    if (credits <= 0) {
      setShowQuotaModal(true);
      return;
    }

    setLoading(true);
    setErrorMsg(null);
    setGeneratedNews(null);

    try {
      const response = await fetch(`${API_BASE_URL}/generate-news`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Custom-Token": CUSTOM_TOKEN,
          Accept: "application/json",
        },
        body: JSON.stringify({
          category: category,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `API returned status: ${response.status} - ${errorText}`,
        );
      }

      const data = await response.json();

      // Handle different response formats
      if (data.status_code === 200) {
        const newsData = data.response || data;
        setGeneratedNews({
          title: newsData.title || "Latest News Update",
          content:
            newsData.content ||
            newsData.message ||
            "News generated successfully.",
          source: newsData.source || "My Patrakar AI",
          imageUrl:
            newsData.imageUrl ||
            newsData.image ||
            "https://images.unsplash.com/photo-1503694978374-8a2fa686963a?auto=format&fit=crop&q=80&w=1000",
          category: category,
        });
        deductCredit();
      } else {
        throw new Error(data.message || "Failed to generate news");
      }
    } catch (err) {
      console.error("API Fetch failed:", err);
      setErrorMsg(
        `Error generating news: ${err.message}. Please try again later.`,
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f9fafb] flex items-center mt-10 justify-center p-4 sm:p-8 font-sans">
      {/* Main Container */}
      <div className="bg-white rounded-[20px] border border-slate-200 shadow-sm max-w-6xl w-full p-6 sm:p-10 grid grid-cols-1 md:grid-cols-12 gap-10 relative">
        {/* Left Column: Inputs & Controls */}
        <div className="md:col-span-5 flex flex-col min-h-[400px]">
          <div className="flex-grow space-y-6">
            <div>
              <label className="block text-[15px] font-medium text-slate-700 mb-2">
                Select Category
              </label>
              {categoriesLoading ? (
                <div className="w-full bg-white border border-slate-300 text-slate-400 rounded-lg px-4 py-3 text-sm">
                  Loading categories...
                </div>
              ) : (
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-white border border-slate-300 text-slate-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#1e2a47] transition cursor-pointer"
                  disabled={categoriesLoading}
                >
                  <option value="">Select a category</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {formatCategoryName(cat)}
                    </option>
                  ))}
                </select>
              )}
              {categoriesError && (
                <p className="text-rose-500 text-xs mt-2">
                  Using fallback categories. API Error: {categoriesError}
                </p>
              )}
            </div>

            <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 flex items-start gap-3">
              <Info className="w-5 h-5 text-[#1e2a47] shrink-0 mt-0.5" />
              <div className="text-sm text-slate-600 leading-relaxed">
                <strong className="text-slate-800 block mb-1">
                  How it works
                </strong>
                Choose a category from the list above. Click Generate to explore
                AI-generated news stories related to your selected category.
              </div>
            </div>

            {errorMsg && (
              <div className="bg-rose-50 border border-rose-100 text-rose-800 text-xs rounded-lg p-3 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>{errorMsg}</span>
              </div>
            )}
          </div>

          <div className="space-y-6 mt-8">
            {credits === 0 ? (
              <button
                disabled={true}
                className="w-full py-3.5 px-6 rounded-lg font-semibold text-sm tracking-wide text-white bg-slate-500 cursor-not-allowed flex items-center justify-center gap-2"
              >
                <Clock className="w-4 h-4" /> Next limit in: {timeRemaining}
              </button>
            ) : (
              <button
                onClick={handleGenerateNews}
                disabled={loading || !category}
                className={`w-full py-3.5 px-6 rounded-lg font-semibold text-sm tracking-wide text-white transition-all duration-200 ${
                  loading || !category
                    ? "bg-slate-400 cursor-not-allowed"
                    : "bg-[#1e2a47] hover:bg-[#151e32] active:scale-[0.99]"
                }`}
              >
                {loading ? "Generating..." : "Generate News"}
              </button>
            )}

            <div className="bg-[#f8fbff] border border-blue-100 rounded-xl px-5 py-4 flex justify-between items-center">
              <div className="flex items-center gap-2.5">
                <div
                  className={`w-2 h-2 rounded-full ${credits > 0 ? "bg-blue-500 animate-pulse" : "bg-rose-500"}`}
                />
                <span className="text-[13px] font-bold text-[#1e2a47]">
                  Credits Available
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex gap-1.5">
                  {[1, 2, 3].map((num) => (
                    <div
                      key={num}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        num <= credits ? "w-7 bg-blue-500" : "w-7 bg-blue-100"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-[13px] font-extrabold text-blue-600">
                  {credits} Left
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-7 bg-[#f8fafc] rounded-[16px] py-3 px-16 flex flex-col justify-center min-h-[400px]">
          {loading ? (
            <div className="flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-10 h-10 border-3 border-slate-200 border-t-[#1e2a47] rounded-full animate-spin" />
              <p className="text-sm font-semibold text-slate-500">
                Generating your news article...
              </p>
            </div>
          ) : generatedNews ? (
            <div className="bg-white rounded-xl p-3 border border-slate-200 shadow-sm space-y-4 animate-fadeIn h-full flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-full h-48 rounded-lg overflow-hidden border border-slate-100">
                  <img
                    src={generatedNews.imageUrl}
                    alt="News Illustration"
                    className="w-full h-full object-center transition-transform duration-300 hover:scale-105"
                    onError={(e) => {
                      e.target.src =
                        "https://images.unsplash.com/photo-1503694978374-8a2fa686963a?auto=format&fit=crop&q=80&w=1000";
                    }}
                  />
                </div>
                <div className="flex items-center gap-1.5 text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>{generatedNews.source}</span>
                  <span className="mx-1">•</span>
                  <span>{formatCategoryName(generatedNews.category)}</span>
                </div>
                <h3 className="font-serif font-black text-slate-900 text-lg leading-snug">
                  {generatedNews.title}
                </h3>
                <p className="text-slate-600 text-sm font-serif leading-relaxed">
                  {generatedNews.content}
                </p>
              </div>
              <div className="border-t border-slate-100 pt-2 flex justify-between items-center text-xs mt-2">
                <span className="text-slate-400 font-semibold">
                  AI Generated News
                </span>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `${generatedNews.title}\n\n${generatedNews.content}\n\nSource: ${generatedNews.source}`,
                    );
                    showSuccess("Success", "Article text copied to clipboard!");
                  }}
                  className="text-blue-600 font-bold hover:underline"
                >
                  Copy Article
                </button>
              </div>
            </div>
          ) : (
            <div className="flex-grow flex flex-col justify-between h-full">
              <div className="bg-[#f1f5f9] rounded-xl h-56 w-full"></div>
              <div className="space-y-3 my-6 w-full max-w-md">
                <div className="h-3 bg-slate-200 rounded-full w-full" />
                <div className="h-3 bg-slate-200 rounded-full w-5/6" />
                <div className="h-3 bg-slate-200 rounded-full w-2/3" />
              </div>
              <div>
                <h3 className="font-bold text-[#1e2a47] text-xl mb-1">
                  Your News will appear here
                </h3>
                <p className="text-slate-500 text-sm">
                  Choose a category and click Generate to get AI-generated news
                  articles.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {showQuotaModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full shadow-2xl overflow-hidden animate-scaleUp">
            <div className="p-8 flex flex-col items-center text-center">
              <div className="bg-rose-100 p-4 rounded-full text-rose-600 mb-5">
                <Clock className="w-10 h-10" />
              </div>
              <h3 className="font-bold text-slate-900 text-2xl mb-2">
                Quota Exhausted
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                You have reached your limit for today (3/3).
                <br />
                Wait for the next news to be generated:
              </p>

              <div className="w-full bg-slate-100 rounded-xl py-4 px-6 border border-slate-200">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Time Remaining
                </p>
                <div className="text-3xl font-black text-[#1e2a47] font-mono tracking-wide">
                  {timeRemaining}
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => setShowQuotaModal(false)}
                className="w-full bg-[#1e2a47] hover:bg-[#151e32] text-white font-semibold py-3 rounded-xl text-sm transition"
              >
                Okay, I understand
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
