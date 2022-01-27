import React from 'react';
import { Button, Col, FormControl, InputGroup, Navbar, NavLink, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './footer.css'

const Footer = () => {
    return (
        <div className='footer' style={{ backgroundColor: '#262339', color: '#fff' }}>

            <div className='container'>
                <Row xs={1} md={4} className="g-4">
                    {/* Footer 1 */}
                    <Col>
                        <Navbar.Brand as={Link} to="/home">
                            <h2 className='text-white'>Super <i className='primary-color'>Bicycles</i></h2>


                        </Navbar.Brand>
                        {/* <p className='py-3'>While traveling is an as aspiration for many people, the travel industry itself isn’t always an obvious career path.</p> */}

                    </Col>
                    {/* Footer 2 */}
                    <Col>
                        <h5 className='fw-bold'>Pages</h5>
                        <ul className="footer-nav navbar-nav ps-3 ms-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/bicycles">Bicycles</NavLink>
                            </li>


                        </ul>
                    </Col>
                    {/* Footer 3 */}
                    <Col>
                        <h5 className='fw-bold pb-3'>Newsletter</h5>
                        <p>Subscribe us for daily offers and updates.</p>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Enter your email"
                                type='email'

                            />
                            <Button className='primary-bg-color border-0 py-2 px-3' id="button-addon2">
                                Subscribe
                            </Button>
                        </InputGroup>

                        {/* Footer 4 */}
                    </Col>
                    <Col className='ps-4'>
                        <h5 className='fw-bold pb-3'>Follow in Social Media</h5>
                        <div className='icons'>
                            <i className="fab fa-facebook-square"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-pinterest-p"></i>
                        </div>

                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Footer;