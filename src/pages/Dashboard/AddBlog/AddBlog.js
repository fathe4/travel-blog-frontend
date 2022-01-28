import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import UseAuth from '../../../hooks/UseAuth';

const AddBlog = () => {
    const [ratings, setRatings] = useState('')
    const [category, setCategory] = useState('')
    const [title, setTitle] = useState('')
    const [expense, setExpense] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [location, setLocation] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [isAdmin, setIsAdmin] = useState('')
    // const formData = new FormData()
    const { user, verifyEmail } = UseAuth()
    let approval = 'pending'
    // const handleOnBlur = (e) => {
    //     const field = e.target.name
    //     value = e.target.value
    //     const newRatings = { ...ratings }
    //     ratings[field] = value
    //     setRatings(newRatings)

    // }
    const emailVerify = () => {
        verifyEmail()
    }


    console.log('ratings', ratings);
    useEffect(() => {
        fetch(` https://hidden-wildwood-53007.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setIsAdmin(data.admin))
    }, [user.email])
    console.log(isAdmin);
    const handleAddProduct = (e) => {
        e.preventDefault()
        if (!image) {
            alert('please upload an image')
            return
        }
        if (isAdmin) {
            approval = 'Approved'
        }
        const dateObj = new Date().toLocaleDateString()

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
        formData.append('postedOn', dateObj)
        formData.append('admin', isAdmin)
        formData.append('name', user.displayName)
        formData.append('email', user.email)
        formData.append('approval', approval)

        console.log(formData, title, image, description);

        fetch(' https://hidden-wildwood-53007.herokuapp.com/dashboard/addBlog', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Blog Uploaded')
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });

    }

    return (
        <div className='container'>

            <Form onSubmit={handleAddProduct} className='shadow p-5 bg-white rounded'>
                <h2>Add Travel Blog Experience</h2>
                <Form.Group className="my-3" controlId="formBasicEmail">
                    <Form.Label>Blog Title</Form.Label>
                    <Form.Control onChange={e => setTitle(e.target.value)} name='title' type="text" placeholder="Blog Title" />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>


                <div class="row g-3">
                    <div class="col">
                        <Form.Label>Expense</Form.Label>
                        <input type="number" onChange={e => setExpense(e.target.value)} className="form-control" placeholder="expense" name='expense' />

                    </div>
                    <div class="col">
                        <Form.Label>Category</Form.Label>
                        <input type="text" onChange={e => setCategory(e.target.value)} className="form-control" placeholder="category" name='expense' />

                    </div>
                    <div class="col">
                        <Form.Label>Rating</Form.Label>
                        <Form.Select onChange={e => setRatings(e.target.value)} name='rating' className="mb-3" aria-label="Default select example">

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
                        <input type="date" onChange={e => setDate(e.target.value)} className="form-control" placeholder="Date" />
                    </div>
                    <div class="col">
                        <Form.Label>Time</Form.Label>
                        <input type="text" onChange={e => setTime(e.target.value)} className="form-control" placeholder="Time" />
                    </div>
                    <div class="col">
                        <Form.Label>Location</Form.Label>
                        <input type="text" onChange={e => setLocation(e.target.value)} className="form-control" placeholder="Location" />
                    </div>
                </div>
                <Form.Group className="my-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Blog Description</Form.Label>
                    <Form.Control onChange={e => setDescription(e.target.value)} name='description' as="textarea" rows={3} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Thumbnail</Form.Label> <br />
                    <input type="url" className="form-control" onChange={(e) => setImage(e.target.value)} name='url' placeholder='Image url' />
                    {/* <Form.Control onBlur={handleOnBlur} name='url' type="url" placeholder="Product Image Url" /> */}
                </Form.Group>

                <Button className='shadow' variant="dark" type="submit">
                    Submit
                </Button>
            </Form>
            {user.emailVerified ? '' : <p className='text-center mt-5'>Please verify your email. Didn't get the verify mail yet? <button className='btn btn-sm' onClick={() => emailVerify()}>Click here</button></p>}
        </div>
    );
};

export default AddBlog;