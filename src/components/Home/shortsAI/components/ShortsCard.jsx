import React, { useState } from "react";

export default function ShortCard({ generatedShort }) {
  const [expanded, setExpanded] = useState(false);
  const truncatedLength = 200;
  // console.log(generatedShort)
const {image,title,description}=JSON.parse(generatedShort)
  const toggleRead = () => setExpanded(prev => !prev);

  return (
    <div className="bg-white rounded-xl shadow p-4 max-w-md">
      {/* Image */}
      <div className="h-[266px] w-full rounded-xl overflow-hidden mb-4">
        <img
          src={generatedShort?.image|| "https://picsum.photos/200/300"}
          alt={title}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      {/* Heading */}
      <h2 className="text-[#334155] text-[18px] font-bold font-sans mb-2">
        {title}
      </h2>

      {/* Description */}
      <p className="text-[#64748B] text-[16px] font-sans">
        {expanded
          ? description
          : description?.length > truncatedLength
          ? description?.slice(0, truncatedLength) + "..."
          : description}
      </p>

      {/* Read More / Read Less */}
      {description?.length > truncatedLength && (
        <button
          onClick={toggleRead}
          className="mt-2 text-[#1354eb] font-semibold text-sm font-sans hover:underline"
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
      )}
    </div>
  );
}
