import React from 'react';

const PaginationItem = ({ pagination, prevPage, changePage, nextPage, currentPage, totalPages }) => {
    return (
        <ul className="pagination">
            <li className="page-item disabled">
                <span className="page-link" tabIndex="-1">Pages</span>
            </li>

            {/* Previous Page Button */}
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <button
                    className="page-link text-dark"
                    aria-label="Previous"
                    onClick={(event) => {
                        if (currentPage > 1) {
                            prevPage(event);
                        }
                    }}
                    disabled={currentPage === 1}
                >
                    <span aria-hidden="true">&laquo;</span>
                    <span className="sr-only">Previous</span>
                </button>
            </li>

            {/* Page Number Buttons */}
            {pagination.map((page, index) => {
                if (!page.ellipsis) {
                    return (
                        <li key={index} className={`page-item ${page.current ? 'active' : ''}`}>
                            <button
                                className={`page-link ${page.current ? 'bg-dark border-dark' : 'text-dark'}`}
                                onClick={(event) => changePage(page.id, event)}
                            >
                                {page.id}
                            </button>
                        </li>
                    );
                } else {
                    return (
                        <li key={index} className="page-item disabled">
                            <span className="page-link text-dark">...</span>
                        </li>
                    );
                }
            })}

            {/* Next Page Button */}
            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                <button
                    className="page-link text-dark"
                    aria-label="Next"
                    onClick={(event) => {
                        if (currentPage < totalPages) {
                            nextPage(event);
                        }
                    }}
                    disabled={currentPage === totalPages}
                >
                    <span aria-hidden="true">&raquo;</span>
                    <span className="sr-only">Next</span>
                </button>
            </li>
        </ul>
    );
}

export default PaginationItem;
