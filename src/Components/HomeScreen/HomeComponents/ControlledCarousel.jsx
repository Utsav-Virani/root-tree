import React from 'react';

import Carousel from 'react-bootstrap/Carousel'

import CorouselStyle from './ControlledCarousel.module.scss';

import firestImg from '../../../Assets/images/firstImg.jpg';
import secondImg from '../../../Assets/images/secondImg.jpg';
import thirdImg from '../../../Assets/images/thirdImg.jpg';

export default function ControlledCarousel() {
    const [index, setIndex] = React.useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} interval="2000" nextIcon="" prevIcon="">
            <Carousel.Item>
                <img
                    className={`${CorouselStyle.ccimg} d-block`}
                    src={firestImg}
                    alt="First slide"
                    height="600px"
                    width="100%"
                />
                {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className={`${CorouselStyle.ccimg} d-block`}
                    src={secondImg}
                    alt="Second slide"
                />

                {/* <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className={`${CorouselStyle.ccimg} d-block`}
                    src={thirdImg}
                    alt="Third slide"
                />

                {/* <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption> */}
            </Carousel.Item>
        </Carousel>
    );
}