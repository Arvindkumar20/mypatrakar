import React, { useState, useEffect } from "react";
import Select from "react-select";
import PropTypes from "prop-types";

const LanguageModeSelector = ({
  languageMode,
  onLanguageModeChange,
  selectedLanguage,
  onLanguageSelect,
  languageOptions,
  loading,
  error,
  required = false,
}) => {
  const [internalError, setInternalError] = useState("");

  // Format language options for react-select
  const formatLanguageOptions = () => {
    if (!Array.isArray(languageOptions)) return [];

    return languageOptions.map((opt) => ({
      value: opt.name || opt.language || opt.value,
      label: opt.name || opt.language || opt.label || opt,
    }));
  };

  const handleModeChange = (mode) => {
    onLanguageModeChange(mode);
    setInternalError("");
  };

  const handleLanguageChange = (selected) => {
    const value = selected ? selected.value : "";
    onLanguageSelect(value);
    setInternalError("");
  };

  // Validation
  useEffect(() => {
    if (required && languageMode === 1 && !selectedLanguage) {
      setInternalError("Please select a language for single language mode");
    } else {
      setInternalError("");
    }
  }, [languageMode, selectedLanguage, required]);

  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Preferred Language Mode <span className="text-red-500">*</span>
      </label>

      <div className=" flex items-center justify-between gap-5">
        {/* Multilingual Mode Option */}
        <div
          className={`px-4 py-3 border w-full rounded-lg cursor-pointer transition-all duration-200 ${
            languageMode === 0
              ? "border-blue-500 bg-blue-50 ring-2 ring-blue-100"
              : "border-gray-300 hover:border-gray-400 hover:bg-gray-50"
          }`}
          onClick={() => handleModeChange(0)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && handleModeChange(0)}
        >
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  languageMode === 0
                    ? "border-blue-600 bg-blue-600"
                    : "border-gray-400"
                }`}
              >
                {languageMode === 0 && (
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                )}
              </div>
            </div>
            <div className="ml-3 flex-1">
              <div className="flex items-center flex-wrap gap-2">
                <h3 className="font-medium text-gray-900">Multilingual Mode</h3>
                <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                  Recommended for Reach
                </span>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                Auto-translate content to all languages.
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Note: Slightly slower load time.
              </p>
            </div>
          </div>
        </div>

        {/* Single Language Mode Option */}
        <div
          className={`px-4 py-5 border w-full rounded-lg cursor-pointer transition-all duration-200 ${
            languageMode === 1
              ? "border-green-500 bg-green-50 ring-2 ring-green-100"
              : "border-gray-300 hover:border-gray-400 hover:bg-gray-50"
          }`}
          onClick={() => handleModeChange(1)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && handleModeChange(1)}
        >
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  languageMode === 1
                    ? "border-green-600 bg-green-600"
                    : "border-gray-400"
                }`}
              >
                {languageMode === 1 && (
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                )}
              </div>
            </div>
            <div className="ml-3 flex-1">
              <div className="flex items-center flex-wrap gap-2">
                <h3 className="font-medium text-gray-900">
                  Single Language Mode
                </h3>
                <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                  Best Performance
                </span>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                Keep content in one language only.
              </p>

              {/* Language Selector (Only shown when Single Mode is selected) */}
              {languageMode === 1 && (
                <div className="mt-3">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Select Language <span className="text-red-500">*</span>
                  </label>
                  <Select
                    id="language-select"
                    className="w-full"
                    value={
                      formatLanguageOptions().find(
                        (opt) => opt.value === selectedLanguage
                      ) || null
                    }
                    onChange={handleLanguageChange}
                    options={formatLanguageOptions()}
                    isDisabled={loading}
                    isLoading={loading}
                    placeholder={
                      loading ? "Loading languages..." : "Select a language..."
                    }
                    isSearchable
                    classNamePrefix="react-select"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Error Display */}
      {(error || internalError) && (
        <p className="text-red-500 text-sm mt-2">{error || internalError}</p>
      )}
    </div>
  );
};

LanguageModeSelector.propTypes = {
  languageMode: PropTypes.oneOf([0, 1]).isRequired,
  onLanguageModeChange: PropTypes.func.isRequired,
  selectedLanguage: PropTypes.string,
  onLanguageSelect: PropTypes.func.isRequired,
  languageOptions: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.string,
  required: PropTypes.bool,
};

LanguageModeSelector.defaultProps = {
  languageMode: 0,
  selectedLanguage: "",
  languageOptions: [],
  loading: false,
  error: "",
  required: false,
};

export default LanguageModeSelector;
