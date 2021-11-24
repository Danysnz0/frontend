import React from 'react'
import Slideshow from './Slideshow';
import {Container, Col, Image, Row} from 'react-bootstrap';
import style from './Inicio.module.css';
import conocenos from '../assets/img/entry_2.3.jpg';
import trasbambalinas from '../assets/img/tras bambalinas.jpeg'
import foro from '../assets/img/foro.jpg'
import noticias from '../assets/img/Slide5.jpg'
import Footer from './Footer'



export default function Inicio() {
    return (
        
        <div >
                <Row >
                    <Col >
                    <Slideshow/>
                    </Col>
                </Row>

                <Row xs={12} sm={6} style={{marginTop: "700px", marginLeft:"100px"}}>
                    <Col xs={6} md={3}>
                        <Image src={conocenos} rounded style={{ height:"200px", with:"200px"}} />
                    </Col>
                    <Col xs={6} md={3}>
                        <Image src={trasbambalinas} rounded  style={{ height:"200px", with:"200px"}} />
                    </Col>
                    <Col xs={6} md={3}>
                        <Image src={foro} rounded style={{ height:"200px", with:"200px"}} />
                    </Col>
                    <Col xs={6} md={3}>
                        <Image src={noticias} rounded style={{ height:"200px", with:"200px"}}/>
                    </Col>
                </Row>
                <Row style={{marginTop:"8rem"}}>
                    <Footer />

                </Row>


        </div>

        
    )
}
