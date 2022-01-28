import React, { useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseAuth from '../../../hooks/UseAuth';



const AllBlogs = () => {
    const [blogs, setBlogs] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const { user, admin } = UseAuth()

    useEffect(() => {
        setIsLoading(true)
        fetch(` https://hidden-wildwood-53007.herokuapp.com/blogs`)
            .then(res => res.json())
            .then(data => setBlogs(data))
            .finally(() => setIsLoading(false))
    }, [])



    console.log(blogs);

    // DELETE ORDER
    const deleteOrder = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setIsLoading(true)
            fetch(` https://hidden-wildwood-53007.herokuapp.com/dashboard/blog/${id}`, {
                method: 'DELETE'
            }).then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        alert('Blog Deleted')
                        const remainingOrders = blogs.filter(blog => blog._id !== id)
                        setBlogs(remainingOrders)
                    }

                })
                .finally(() => setIsLoading(false))
        } else {
            fetch(` https://hidden-wildwood-53007.herokuapp.com/blogs`)
                .then(res => res.json())
                .then(data => setBlogs(data))
        }
    }
    return (
        <div>
            <h2>Manage All Blogs</h2>
            <Table responsive striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Thumbnail</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Location</th>
                        <th>Expense</th>
                        <th>Ratings</th>
                        <th>Approval</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>


                    {isLoading ? <div className='spinner'><Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner> </div> :
                        blogs.map(blog => <> <tr>
                            <td><img src={blog.url} width={50} alt="" /></td>
                            <td>{blog.title}</td>
                            <td>{blog.category}</td>
                            <td>{blog.location}</td>
                            <td>{blog.expense}</td>
                            <td>{blog.ratings}</td>
                            <td>{blog.approval}</td>

                            <td><Link to={`/dashboard/update-blog/${blog._id}`}><button type="button" className="btn btn-primary btn-sm">View</button>
                            </Link>
                                <button type="button" onClick={() => deleteOrder(blog._id)} className="btn btn-danger btn-sm ms-2">Delete</button>
                            </td>

                        </tr></>
                        )
                    }

                    {/* {orders.map((order, idx) => order[0].map(console.log()))} */}

                </tbody>
            </Table>
        </div>
    );
};

export default AllBlogs;
