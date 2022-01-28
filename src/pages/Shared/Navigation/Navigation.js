import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseAuth from '../../../hooks/UseAuth';
import { NavHashLink } from 'react-router-hash-link';


const Navigation = () => {
    const { user, logout } = UseAuth()
    console.log(user);
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
            <Container>
                <Navbar.Brand as={Link} to='/' className='fw-bolder'>Travelogue <i class="fas fa-plane-departure text-white"></i></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto d-flex align-items-center">
                        <Nav.Link as={Link} to='/'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/home#blog'>Blog</Nav.Link>
                        <Nav.Link as={Link} to='/dashboard/addBlog'>Add your own experience</Nav.Link>
                        {
                            user.email ? <div className='d-flex align-items-center'>  <Nav.Link as={Link} to='/dashboard'>Dashboard</Nav.Link><p className='text-white mt-3 mx-3'>{user.displayName}</p> <Nav.Link><Button variant="light" size="sm" onClick={() => logout()}>Logout</Button> </Nav.Link></div> :
                                <Nav.Link as={Link} to='/login'><Button variant="light" size="sm">Login</Button> </Nav.Link>
                        }

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;