import React from 'react';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const getPaginationButtons = () => {
    const buttons = [];

    buttons.push(
      <button key="prev" disabled={currentPage <= 1} onClick={() => handlePageChange(currentPage - 1)}>
        Previous
      </button>
    );

    // Logic for creating pagination buttons
    if (currentPage > 3) {
      buttons.push(
        <button key={1} onClick={() => handlePageChange(1)}>
          1
        </button>
      );

      if (currentPage > 4) {
        buttons.push(<span key="dots1">...</span>);
      }
    }

    const start = Math.max(1, currentPage - 1);
    const end = Math.min(totalPages, currentPage + 1);

    for (let i = start; i <= end; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={currentPage === i ? 'active' : ''}
        >
          {i}
        </button>
      );
    }

    if (currentPage < totalPages - 2) {
      if (currentPage < totalPages - 3) {
        buttons.push(<span key="dots2">...</span>);
      }
      buttons.push(
        <button key={totalPages} onClick={() => handlePageChange(totalPages)}>
          {totalPages}
        </button>
      );
    }

    buttons.push(
      <button key="next" disabled={currentPage >= totalPages} onClick={() => handlePageChange(currentPage + 1)}>
        Next
      </button>
    );

    return buttons;
  };

  return <div>{getPaginationButtons()}</div>;
};

export default Pagination;
