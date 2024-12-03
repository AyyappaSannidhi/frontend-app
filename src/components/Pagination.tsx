import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pages: number[] = [];
  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      (i >= currentPage - 2 && i <= currentPage + 2)
    ) {
      pages.push(i);
    }
  }

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex justify-center items-center ">
      <div className="flex justify-center items-center space-x-2 p-2 bg-white shadow-md rounded-md w-auto max-w-full">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 text-lg font-bold ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'hover:text-blue-600'}`}
        >
          Previous
        </button>

        {pages.map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-4 py-2 text-lg font-bold ${currentPage === page ? 'text-orange-500' : 'text-gray-700 hover:text-blue-600'}`}
          >
            {page}
          </button>
        ))}

        {totalPages > 5 && currentPage < totalPages - 2 && (
          <span className="text-lg text-gray-700 font-bold">...</span>
        )}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 text-lg font-bold ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'hover:text-blue-600'}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;