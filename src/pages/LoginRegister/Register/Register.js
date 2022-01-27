import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseAuth from '../../../hooks/UseAuth';

const Register = () => {
    const [newUser, setNewUser] = useState({})
    const { RegisterUser, error, user } = UseAuth()
    // const history = useHistory()
    // console.log(newUser);

    const handleValues = (e) => {
        const field = e.target.name;
        const value = e.target.value
        const user = { ...newUser }

        user[field] = value
        setNewUser(user)

    }

    const handleRegister = (e) => {
        e.preventDefault()
        RegisterUser(newUser.email, newUser.password, newUser.name)
        // console.log('user name', newUser.name, newUser.email, newUser.password);

    }

    return (
        <div  >
            <Container className='w-25 mx-auto shadow p-4 rounded mt-5'>
                <Form onSubmit={handleRegister}>
                    <h2 className='text-center fw-bold'>Register</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onChange={handleValues} type="text" name="name" placeholder="Your Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={handleValues} type="email" name="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={handleValues} type="password" name="password" placeholder="Password" />
                    </Form.Group>
                    <Link to='/login'>Already Registered?</Link><br />
                    {error ? <p>{error}</p> : ''}<br />
                    <Button className="mt-2 w-100" variant="dark" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default Register;