import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Blogs from '../../components/Blogs/Blogs';
import HomeCarousel from '../../components/Carousel/Carousel';
import PaginatedItems from '../../components/PaginatedItems/PaginatedItems';
import Sidebar from '../../components/Sidebar/Sidebar';
import UseAuth from '../../hooks/UseAuth';

const Home = () => {
    const { user } = UseAuth()
    console.log('user verified', user.emailVerified);

    return (
        <div>
            <HomeCarousel></HomeCarousel>

            <Container>

                <Row className='mt-sm-5' >
                    <Col xs={12} md={9} className='react-pagination' id='blog'>
                        {/* <Blogs></Blogs> */}

                        <PaginatedItems itemsPerPage={10}></PaginatedItems>

                    </Col>
                    <Col xs={12} md={3}>
                        <Sidebar></Sidebar>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Home;