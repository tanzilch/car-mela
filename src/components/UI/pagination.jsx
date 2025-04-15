/* eslint-disable react/prop-types */
const Pagination = ({ currentPage, totalItems, itemsPerPage, onPageChange }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
  
    const handlePageChange = (page) => {
      if (page >= 1 && page <= totalPages) {
        onPageChange(page);
      }
    };
  
    return (
      <div className="flex justify-center items-center mt-6">
        <button
          className={`px-3 py-2 mx-1 text-gray-700 bg-gray-200 rounded ${
            currentPage === 1 && "opacity-50 cursor-not-allowed"
          }`}
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
        >
          First
        </button>
        <button
          className={`px-3 py-2 mx-1 text-gray-700 bg-gray-200 rounded ${
            currentPage === 1 && "opacity-50 cursor-not-allowed"
          }`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`px-3 py-2 mx-1 rounded ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className={`px-3 py-2 mx-1 text-gray-700 bg-gray-200 rounded ${
            currentPage === totalPages && "opacity-50 cursor-not-allowed"
          }`}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
        <button
          className={`px-3 py-2 mx-1 text-gray-700 bg-gray-200 rounded ${
            currentPage === totalPages && "opacity-50 cursor-not-allowed"
          }`}
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
        >
          Last
        </button>
      </div>
    );
  };
  
  export default Pagination;
  