import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Blogs.css'

const Blogs = ({ blogs, isLoading }) => {
    console.log(blogs);
    // const [blogs, setBlogs] = useState([])
    // const [isLoading, setIsLoading] = useState(false)
    // const [pageCount, setPageCount] = useState(0)
    // const [page, setPage] = useState()

    // const size = 1;
    // useEffect(() => {
    //     setIsLoading(true)
    //     fetch(` https://hidden-wildwood-53007.herokuapp.com/blogs`)
    //         .then(res => res.json())
    //         .then(data => {
    //             const approvedBlogs = data.filter(blogs => blogs.approval === 'approved')
    //             setBlogs(approvedBlogs)
    //             const count = data.length;
    //             console.log('count', count);
    //             const pageNumber = Math.ceil(count / size);
    //             setPageCount(pageNumber);
    //         })
    //         .finally(() => setIsLoading(false))
    // }, [])

    return (
        <div>

            <div class="blog-container mt-5" >
                <div class="title">
                    <h3>Latest Blog <span class="bg">BLOG</span></h3>
                </div>
                <div class="cards">
                    {
                        isLoading ? <h2>Loading...</h2> :
                            blogs?.map(blog => <div class="card">
                                <img src={blog.url} alt="" />
                                <div class="card-body">
                                    <div className='d-flex justify-content-between' >
                                        <span className="text-date">By {blog.name} / </span> <span className="text-date"> {blog.postedOn} - {blog.ratings}<i className="fas fa-star"></i></span>
                                    </div>
                                    <div className="line"></div>
                                    <p className="text">{blog.title}</p>
                                    <p >{blog.description.slice(0, 60)}... <Link to={`/blog/${blog._id}`}><Button variant="secondary" size="sm" className='my-2'>
                                        Read more
                                    </Button></Link></p>

                                </div>
                            </div>)
                    }


                </div>
            </div>
            {/* <Row xs={1} md={3} className="g-4 justify-content-center">
                {
                    isLoading ? <h2>Loading...</h2> :
                        blogs?.map(blog => <Col className='shadow-sm p-0 mx-2'>
                            <Card>
                                <Card.Img variant="top" height="150px" src={`data:image/jpeg;base64,${blog.url}`} />
                                <Card.Body>
                                    <div className='d-flex justify-content-between'>
                                        <Card.Title>{blog.title}</Card.Title>
                                        <p>{blog.ratings} <i class="fas fa-star"></i></p>
                                    </div>
                                    <Card.Text>
                                        {blog.description?.slice(0, 40)}
                                    </Card.Text>
                                    <Link to={`/blog/${blog._id}`}><Button variant="secondary" size="sm" className='mb-2'>
                                        Read more
                                    </Button></Link>
                                </Card.Body>
                            </Card>
                        </Col>)
                }

            </Row> */}
        </div>
    );
};

export default Blogs;