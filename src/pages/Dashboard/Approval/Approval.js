import React, { useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseAuth from '../../../hooks/UseAuth';

const Approval = () => {
    const [blogs, setBlogs] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const { user } = UseAuth()

    useEffect(() => {
        setIsLoading(true)
        fetch(` https://hidden-wildwood-53007.herokuapp.com/blogs`)
            .then(res => res.json())
            .then(data => {
                const approvalBlogs = data.filter(blog => blog.approval === 'pending')
                setBlogs(approvalBlogs)
            })
            .finally(() => setIsLoading(false))
    }, [user.email])

    // APPROVE BLOG
    const approveBlog = (id) => {
        const approval = { approval: 'approved' }
        fetch(` https://hidden-wildwood-53007.herokuapp.com/dashboard/approval/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(approval)
        })
            .then(response => response.json())
            .then(data => {
                if (data.modifiedCount) {
                    const remainingBlogs = blogs.filter(blog => blog._id !== id)
                    setBlogs(remainingBlogs)
                    alert('Approved')
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    // DELETE BLOG
    const deleteBlog = (id) => {
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
            <h2>Approve Blogs</h2>
            {
                blogs ? <Table responsive striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Thumbnail</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Location</th>
                            <th>Expense</th>
                            <th>Ratings</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>


                        {isLoading ? <div className='spinner'><Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner> </div> :
                            blogs.map(blog => <> <tr>
                                <td><img src={`data:image/jpeg;base64,${blog.url}`} width={50} alt="" /></td>
                                <td>{blog.title}</td>
                                <td>{blog.category}</td>
                                <td>{blog.location}</td>
                                <td>{blog.expense}</td>
                                <td>{blog.ratings}</td>
                                {/* <td>{description}</td>
                        <td>email</td> */}
                                <td><Link to={`/dashboard/update-blog/${blog._id}`}><button type="button" className="btn btn-primary btn-sm">View</button>
                                </Link>
                                    <button type="button" onClick={() => approveBlog(blog._id)} className="btn btn-success btn-sm mx-2">Approve</button>
                                    <button type="button" onClick={() => deleteBlog(blog._id)} className="btn btn-danger btn-sm ms-2">Delete</button>
                                </td>

                            </tr></>
                            )
                        }

                    </tbody>
                </Table> : <h4 className='text-center'>No pending blogs</h4>
            }
        </div>
    );
};

export default Approval;