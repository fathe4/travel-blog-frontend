import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import './sidebar.css'

const Sidebar = () => {
    const [blogs, setBlogs] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetch(` https://hidden-wildwood-53007.herokuapp.com/blogs`)
            .then(res => res.json())
            .then(data => {
                const approvedBlogs = data.filter((blogs) => parseInt(blogs.ratings)).sort((a, b) => b - a)
                setBlogs(approvedBlogs)
            })
            .finally(() => setIsLoading(false))
    }, [])
    console.log('sidebar', blogs);
    return (

        <div className="row shadow-sm p-2" >
            <h3 className='fs-bold'>Top rated spots</h3>
            {
                blogs.map(blog => <div className="d-flex sidebar-blog mt-5">
                    <div className="col-md-4"><img src={`data:image/jpeg;base64,${blog.url}`} width={80} alt="" /></div>
                    <div className="col-md-8 pe-2">
                        <div className='d-flex justify-content-between'>
                            <h4>{blog.title}</h4>
                            <p>{blog.ratings} <i class="fas fa-star"></i></p>
                        </div>
                        <p>{blog.description.slice(0, 20)}</p>
                        <Button variant="secondary" size="sm" className='mb-2'>
                            Read more
                        </Button>
                    </div>
                </div>)
            }


        </div>

    );
};

export default Sidebar;