import React from 'react';
import { Carousel } from 'react-bootstrap';

const HomeCarousel = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/TTBfT27/Untitled-design-22.png"
                    alt="First slide"
                />
                <Carousel.Caption className="carousel-caption d-flex flex-column justify-content-center h-100" style={{ top: "0" }}>
                    <h1>“Travel makes one modest. You see what a tiny place you occupy in the world.”</h1>
                    <p>― Gustave Flaubert</p>
                    <div>
                        <button className='btn btn-light mt-3'>Add Your own experience</button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/Yf10gPh/Untitled-design-23.png"
                    alt="Second slide"
                />

                <Carousel.Caption className="carousel-caption d-flex flex-column justify-content-center h-100" style={{ top: "0" }}>
                    <h1>“Travel is the only thing you buy that makes you richer”</h1>
                    <div>
                        <button className='btn btn-light mt-3'>Add Your own experience</button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/C9qDBQs/Untitled-design-24.png"
                    alt="Third slide"
                />

                <Carousel.Caption className="carousel-caption d-flex flex-column justify-content-center h-100" style={{ top: "0" }}>
                    <h1>"It feels good to be lost in the right direction”</h1>
                    <p>-Unknown</p>
                    <div>
                        <button className='btn btn-light mt-3'>Add Your own experience</button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default HomeCarousel;