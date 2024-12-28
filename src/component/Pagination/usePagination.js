import { useState, useEffect } from 'react';

const usePagination = (initialState) => {
    const { itemsPerPage, data, startFrom } = initialState;
    const [searching, setSearching] = useState(false);
    const [filteredData, setFilteredData] = useState(data);
    const perPage = itemsPerPage ? itemsPerPage : 12;
    const pages = Math.ceil(filteredData.length / perPage);
    const pagination = [];
    const [currentPage, setCurrentPage] = useState(startFrom <= pages ? startFrom : 1);
    const [slicedData, setSlicedData] = useState([]);

    useEffect(() => {
        setSlicedData([...filteredData].slice((currentPage - 1) * perPage, currentPage * perPage));
    }, [currentPage, filteredData, perPage]);

    useEffect(() => {
        if (searching) {
            setCurrentPage(1);
            setSearching(false);
        }
    }, [searching]);

    let ellipsisLeft = false;
    let ellipsisRight = false;

    for (let i = 1; i <= pages; i++) {
        if (i === currentPage) {
            pagination.push({ id: i, current: true, ellipsis: false });
        } else {
            if (i < 2 || i > pages - 1 || i === currentPage - 1 || i === currentPage + 1) {
                pagination.push({ id: i, current: false, ellipsis: false });
            } else if (i > 1 && i < currentPage && !ellipsisLeft) {
                pagination.push({ id: i, current: false, ellipsis: true });
                ellipsisLeft = true;
            } else if (i < pages && i > currentPage && !ellipsisRight) {
                pagination.push({ id: i, current: false, ellipsis: true });
                ellipsisRight = true;
            }
        }
    }

    const changePage = (page, event) => {
        event.preventDefault();
        if (page !== currentPage) {
            setCurrentPage(page);
        }
    };

    const goToPrevPage = (event) => {
        event.preventDefault();
        setCurrentPage((prevVal) => (prevVal === 1 ? prevVal : prevVal - 1));
    };

    const goToNextPage = (event) => {
        event.preventDefault();
        setCurrentPage((prevVal) => (prevVal === pages ? prevVal : prevVal + 1));
    };

    return {
        slicedData,
        pagination,
        prevPage: goToPrevPage,
        nextPage: goToNextPage,
        changePage,
        setFilteredData,
        setSearching,
    };
};

export default usePagination;
