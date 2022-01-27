import React, { useEffect, useState } from 'react';
import Blogs from '../Blogs/Blogs';
import ReactPaginate from 'react-paginate';


const PaginatedItems = ({ itemsPerPage }) => {
    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    const [blogs, setBlogs] = useState([])
    const [isLoading, setIsLoading] = useState(false)


    const size = 1;
    useEffect(() => {
        setIsLoading(true)
        fetch(`http://localhost:5000/blogs`)
            .then(res => res.json())
            .then(data => {
                const approvedBlogs = data.filter(blogs => blogs.approval === 'approved')
                setBlogs(approvedBlogs)

            })
            .finally(() => setIsLoading(false))
    }, [])

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(blogs.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(blogs.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, blogs]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % blogs.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <>
            <Blogs blogs={currentItems} isLoading={isLoading}></Blogs>

            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
            />
        </>
    );
}

export default PaginatedItems;