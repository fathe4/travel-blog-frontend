import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const UpdateBlogDetails = ({ details }) => {
    const { id } = useParams()
    const [ratings, setRatings] = useState('')
    const [category, setCategory] = useState('')
    const [title, setTitle] = useState('')
    const [expense, setExpense] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [location, setLocation] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)
    const [blog, setBlog] = useState()
    console.log('ratings', id);

    const handleAddProduct = (e) => {
        e.preventDefault()

        const formData = new FormData();
        formData.append('title', title);
        formData.append('expense', expense)
        formData.append('date', date)
        formData.append('time', time)
        formData.append('category', category)
        formData.append('ratings', ratings)
        formData.append('location', location)
        formData.append('description', description)
        formData.append('url', image)

        console.log(formData, title, image, description);

        fetch(` https://hidden-wildwood-53007.herokuapp.com/dashboard/blog/${id}`, {
            method: 'PUT',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('Blog Updated')
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });

    }
    return (
        <Form onSubmit={handleAddProduct} className='shadow p-5 bg-white rounded'>
            <h2 className='fw-bold'>Update Blog</h2>
            <Form.Group className="my-3" controlId="formBasicEmail">
                <Form.Label>Blog Title</Form.Label>
                <Form.Control onChange={e => setTitle(e.target.value)} name='title' type="text" placeholder="Blog Title" defaultValue={details.title} />
                {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text> */}
            </Form.Group>


            <div class="row g-3">
                <div class="col">
                    <Form.Label>Expense</Form.Label>
                    <input type="number" onChange={e => setExpense(e.target.value)} className="form-control" placeholder="expense" name='expense' defaultValue={details.expense} />

                </div>
                <div class="col">
                    <Form.Label>Category</Form.Label>
                    <input type="text" onChange={e => setCategory(e.target.value)} className="form-control" placeholder="category" name='category' defaultValue={details.category} />

                </div>
                <div class="col">
                    <Form.Label>Rating</Form.Label>
                    <Form.Select onChange={e => setRatings(e.target.value)} name='ratings' className="mb-3" defaultValue={details.ratings}>
                        <option>Your Rating</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </Form.Select>
                </div>

            </div>
            <div class="row g-3">
                <div class="col">
                    <Form.Label>Date</Form.Label>
                    <input type="date" onChange={e => setDate(e.target.value)} className="form-control" placeholder="Date" defaultValue={details.date} />
                </div>
                <div class="col">
                    <Form.Label>Time</Form.Label>
                    <input type="text" onChange={e => setTime(e.target.value)} className="form-control" placeholder="Time" defaultValue={details.time} />
                </div>
                <div class="col">
                    <Form.Label>Location</Form.Label>
                    <input type="text" onChange={e => setLocation(e.target.value)} className="form-control" placeholder="Location" defaultValue={details.location} />
                </div>
            </div>
            <Form.Group className="my-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Blog Description</Form.Label>
                <Form.Control onChange={e => setDescription(e.target.value)} name='description' as="textarea" rows={3} defaultValue={details.description} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Thumbnail</Form.Label> <br />
                <input accept="image/*" type="file" onChange={(e) => setImage(e.target.files[0])} name='url' />
                {/* <Form.Control onBlur={handleOnBlur} name='url' type="url" placeholder="Product Image Url" /> */}
            </Form.Group>

            <Button className='shadow' variant="dark" type="submit">
                Update
            </Button>
        </Form>
    );
};

export default UpdateBlogDetails;