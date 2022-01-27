import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UpdateBlogDetails from './UpdateBlogDetails';

const UpdateBlog = () => {
    const { id } = useParams()
    const [loading, setLoading] = useState(false)
    const [blog, setBlog] = useState()
    // const formData = new FormData()
    // Fetch orders
    useEffect(() => {
        setLoading(true)
        fetch(` https://hidden-wildwood-53007.herokuapp.com/dashboard/blog?id=${id}`)
            .then(res => res.json())
            .then(data => setBlog(data))
            .finally(() => setLoading(false))
    }, [id, setBlog])

    if (!blog) {
        return <div>Loading</div>
    }
    console.log('blog', blog);


    return (
        <div className='container'>
            {
                loading ? <h2>Loading....</h2> : blog.map(details => <UpdateBlogDetails details={details} key={details._id}></UpdateBlogDetails>)
            }
        </div>
    );
};

export default UpdateBlog;