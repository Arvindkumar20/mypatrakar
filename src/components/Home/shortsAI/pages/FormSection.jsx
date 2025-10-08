import React, { useEffect, useState, memo } from "react";
import SelectInput from "../components/SelectInput";
import Select from "react-select";
import { Country, State, City } from "country-state-city";
import handleGenerateClick from "../utils/eligible";

function FormSection({
  formData,
  setFormData,
  handleGenerate,
  loading,
  setLoading,
}) {
    
  const tones = ["Casual", "Professional", "Funny", "Inspirational"];
  const categories = ["Entertainment", "Business", "Education", "Travel"];
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  // --- Load Countries on Mount ---
  useEffect(() => {
    setCountries(Country.getAllCountries());
  }, []);

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

  // --- Handle Form Changes ---
  const handleChange = (key, value) => {
    setFormData((prev) => {
      let updated = { ...prev, [key]: value };
      if (key === "country") updated = { ...updated, state: "", city: "" };
      if (key === "state") updated = { ...updated, city: "" };
      return updated;
    });
  };

  // --- Handle Location Type ---
  const handleLocationTypeChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      locationType: value,
      country: "",
      state: "",
      city: "",
    }));
  };

  // --- IP Limit Check + Generate ---
  const onGenerateClick = () => {
    // const { tone, category } = formData;
    // if (tone === "" || !tone ||category === "" || !category) {
    //   toast.error(
    //     `Please select ${tone === "" || !tone ? "AI tone" : ""} ${
    //       (tone === "" || !tone) && (category === "" || !category) ? "and" : ""
    //     } ${category === "" || !category ? "category" : ""}  before generating.`
    //   );
    //   return null;
    // }

    handleGenerateClick(handleGenerate, setLoading);
  };
  return (
    <div className="flex flex-col gap-4">
      {/* Tone Selector */}
      <SelectInput
        label="AI Tone / Writing Style"
        value={formData.tone}
        onChange={(e) => handleChange("tone", e.target.value)}
        options={tones}
        required
        description="Choose how you want the AI to write your Short."
      />
      {/* Category Selector */}
      <SelectInput
        label="Category"
        value={formData.category}
        onChange={(e) => handleChange("category", e.target.value)}
        options={categories}
        required
        description="Select the main topic of your Short."
      />
      {/* Location Section */}
      <div>
        <label className="block font-medium mb-1">Optional Location</label>
        <div className="flex items-center gap-6 mb-3">
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
          <div className="grid grid-cols-3 gap-2">
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
        disabled={loading}
        className={`mt-3 py-3 text-white font-bold rounded-md transition ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-[#16274E] hover:bg-blue-900"
        }`}
      >
        {loading ? "Generating..." : "Generate Short"}
      </button>
    </div>
  );
}

export default memo(FormSection);
