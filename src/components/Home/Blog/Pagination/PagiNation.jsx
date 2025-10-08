import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"; // Importing icons for navigation buttons

const Pagination = ({ totalItems, itemsPerPage, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    if (onPageChange) onPageChange(page);
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`page-btn p-3 bg-red-700 text-white rounded-lg hover:bg-red-500 focus:outline-none ${i === currentPage ? "bg-red-500" : ""}`}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="pagination flex items-center justify-center gap-4 my-6">
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className="bg-red-600 py-3 px-6 rounded-lg text-white font-medium disabled:opacity-50 hover:bg-red-700 focus:outline-none flex items-center justify-center gap-2"
      >
        <AiOutlineLeft /> Previous
      </button>

      {renderPageNumbers()}

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="bg-red-600 py-3 px-6 rounded-lg text-white font-medium disabled:opacity-50 hover:bg-red-700 focus:outline-none flex items-center justify-center gap-2"
      >
        Next <AiOutlineRight />
      </button>
    </div>
  );
};

export default Pagination;
