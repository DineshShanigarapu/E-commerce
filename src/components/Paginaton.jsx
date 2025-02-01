import React, { useState } from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageClick = (page) => {
    onPageChange(page);
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  return (
    <div className="flex justify-center space-x-2 mt-4">
      <button
        className="w-10 h-10 flex items-center justify-center bg-white text-black border border-black rounded"
        onClick={handlePrevClick}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          className={`w-10 h-10 flex items-center justify-center ${currentPage === index + 1 ? 'bg-black text-white' : 'bg-white text-black border border-black'} rounded`}
          onClick={() => handlePageClick(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button
        className="w-10 h-10 flex items-center justify-center bg-white text-black border border-black rounded"
        onClick={handleNextClick}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
