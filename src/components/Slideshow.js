import React from 'react';
import slide1 from '../assets/img/Slide1p.jpg';
import slide2 from '../assets/img/Slide2p.jpg';
import slide4 from '../assets/img/Slide4p.jpg';
import {Carousel} from 'react-bootstrap';
import style from './Slideshow.module.css';


export default function Slideshow() {
    return (
        <div className={style["container"]}>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide1}
                        alt="First slide" 
                        style={{height:"850px"}}
                        />
                        <Carousel.Caption>
                        <h3>Ecosistema Creativo </h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide2}
                        alt="Second slide" 
                        style={{height:"850px"}}
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide4}
                        alt="Third slide"
                        style={{height:"850px"}}
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
