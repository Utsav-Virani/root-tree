import React from 'react';

import Carousel from 'react-bootstrap/Carousel'

import CorouselStyle from './ControlledCarousel.module.scss';

import firestImg from '../../../Assets/images/firstImg.jpg';
import secondImg from '../../../Assets/images/secondImg.jpg';
import thirdImg from '../../../Assets/images/thirdImg.jpg';
import { First } from 'react-bootstrap/esm/PageItem';

export default function ControlledCarousel() {
    const [index, setIndex] = React.useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} interval="3000" nextIcon="" prevIcon="">
            <Carousel.Item>
                <div
                    className={`${CorouselStyle.ccimg} d-block`}
                    style={
                        {
                            background: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(${firestImg})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                        }
                    }
                ></div>
                <div className={`${CorouselStyle.ccImgCaption}`}>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>

                    </Carousel.Caption>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div
                    className={`${CorouselStyle.ccimg} d-block`}
                    style={
                        {
                            background: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(${secondImg})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                        }
                    }
                ></div>
                <div className={`${CorouselStyle.ccImgCaption}`}>
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div
                    className={`${CorouselStyle.ccimg} d-block`}
                    style={
                        {
                            background: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(${thirdImg})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                        }
                    }
                ></div>
                <div className={`${CorouselStyle.ccImgCaption}`}>
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </div>
            </Carousel.Item>
        </Carousel>
    );
}