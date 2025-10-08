import React from "react";

export default function SelectInput({
  label,
  value,
  onChange,
  options = [],
  description,
  required = false,
  placeholder,
  disabled = false,
}) {
  return (
    <div className="w-full bg-[#F1F5F9">
      {/* Label */}
      {label && (
        <label className="block text-[#1E293B] text-[14px] font-sans font-medium mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      {/* Select Input */}
      <select
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`w-full border rounded-md px-3 py-2.5 text-sm bg-[#F1F5F9] font-sans outline-none transition
          ${disabled ? "bg-[#F1F5F9] text-gray-400 cursor-not-allowed" : "focus:ring-2 focus:ring-[#16274E]   focus:border-[#16274E"}
        `}
      >
        <option value="">
          {placeholder ? placeholder : `Select ${label}`}
        </option>

        {options.length > 0 ? (
          options.map((opt, idx) => (
            <option key={idx} value={opt} className="text-green-700">
              {opt}
            </option>
          ))
        ) : (
          <option disabled>No options available</option>
        )}
      </select>

      {/* Description */}
      {description && (
        <p className="text-[#64748B] mt-1 text-[13.5px] font-sans font-light">
          {description}
        </p>
      )}
    </div>
  );
}
