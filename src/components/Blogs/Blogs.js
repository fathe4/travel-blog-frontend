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
            <h2 className='text-center mb-5' id='blog'>Blogs</h2>
            <Row xs={1} md={3} className="g-4">
                {
                    isLoading ? <h2>Loading...</h2> :
                        blogs?.map(blog => <Col className='shadow-sm p-0 mx-3'>
                            <Card>
                                <Card.Img variant="top" src={`data:image/jpeg;base64,${blog.url}`} />
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

            </Row>
        </div>
    );
};

export default Blogs;