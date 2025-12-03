import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  // Generate page numbers with ellipsis (...)
  const generatePages = () => {
    let pages = [];

    if (totalPages <= 6) {
      // Show all pages if pages <= 6
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      // Large pagination logic
      if (currentPage <= 3) {
        pages = [1, 2, 3, 4, "...", totalPages];
      } else if (currentPage >= totalPages - 2) {
        pages = [1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
      } else {
        pages = [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
      }
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-center gap-3 my-8">

      {/* Previous Button */}
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg 
                   disabled:opacity-50 hover:bg-red-700 transition-all"
      >
        <AiOutlineLeft /> Prev
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-2">
        {generatePages().map((pg, index) =>
          pg === "..." ? (
            <span key={index} className="px-3 py-2 text-gray-500">...</span>
          ) : (
            <button
              key={pg}
              onClick={() => onPageChange(pg)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all 
                ${
                  currentPage === pg
                    ? "bg-red-600 text-white"
                    : "bg-red-200 text-red-700 hover:bg-red-300"
                }`}
            >
              {pg}
            </button>
          )
        )}
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg 
                   disabled:opacity-50 hover:bg-red-700 transition-all"
      >
        Next <AiOutlineRight />
      </button>
    </div>
  );
};

export default Pagination;
