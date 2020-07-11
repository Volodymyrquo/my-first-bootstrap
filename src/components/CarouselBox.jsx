import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import mountains from '../assets/mountains.jpeg';
import lake from '../assets/lake.jpeg';

const CarouselBox = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={mountains}
                    alt="mountains" />
                <Carousel.Caption>
                    <h3>Mountains</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={lake}
                    alt="lake" />
                <Carousel.Caption>
                    <h3>Lake image</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={mountains}
                    alt="mountains" />
                <Carousel.Caption>
                    <h3>Mountains</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </Carousel.Caption>

            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselBox;