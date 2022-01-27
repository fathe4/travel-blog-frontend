import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const SingleBlog = () => {
    const { id } = useParams()
    const [blog, setBlog] = useState('')
    const [isLoading, setIsLoading] = useState('')
    console.log(id);
    useEffect(() => {
        setIsLoading(true)
        fetch(`http://localhost:5000/dashboard/blog?id=${id}`)
            .then(res => res.json())
            .then(data => setBlog(data))
            .finally(() => setIsLoading(false))
    }, [id])
    if (!blog) {
        return <h2>Loading...</h2>
    }

    console.log(blog);

    return (
        <>
            {isLoading ? <h2>Loading...</h2> :
                blog?.map(details =>
                    <div className='container d-flex justify-content-center flex-column'>
                        <div className='mx-auto mt-3'>
                            <img src={`data:image/jpeg;base64,${details.url}`} alt="" className='w-100 shadow rounded' />
                        </div>
                        <Table striped bordered hover className='mt-5'>
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Location</th>
                                    <th>Expense</th>
                                    <th>Rating</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{details.date}</td>
                                    <td>{details.time}</td>
                                    <td>{details.location}</td>
                                    <td>{details.expense}</td>
                                    <td>{details.ratings} <i class="fas fa-star"></i></td>
                                </tr>

                            </tbody>
                        </Table>
                        <h1 className='fw-bolder'>{details.title}</h1>
                        <p>{details.description}</p>
                    </div>)
            }
        </>
    );
};

export default SingleBlog;