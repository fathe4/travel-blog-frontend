import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Blogs from '../../components/Blogs/Blogs';
import HomeCarousel from '../../components/Carousel/Carousel';
import PaginatedItems from '../../components/PaginatedItems/PaginatedItems';
import Sidebar from '../../components/Sidebar/Sidebar';

const Home = () => {
    return (
        <div>
            <HomeCarousel></HomeCarousel>

            <Container>

                <Row className='mt-5' >
                    <Col xs={12} md={9} className='react-pagination'>
                        {/* <Blogs></Blogs> */}

                        <PaginatedItems itemsPerPage={10}></PaginatedItems>

                    </Col>
                    <Col xs={6} md={3}>
                        <Sidebar></Sidebar>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Home;