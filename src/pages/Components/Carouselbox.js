import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import tourist1 from '../../assets/tourist1.jpg';
import tourist2 from '../../assets/tourist2.jpg';
import tourist3 from '../../assets/tourist3.jpg';


class Carouselbox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img 
                    className="d-block w-100"
                    src={tourist1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                    className="d-block w-100"
                    src={tourist2}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                    className="d-block w-100"
                    src={tourist3}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default Carouselbox;