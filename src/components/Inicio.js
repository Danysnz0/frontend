import React from 'react'
import Slideshow from './Slideshow';
import {Container, Col, Image, Row} from 'react-bootstrap';



export default function Inicio() {
    return (
        <div>
            <div>
            <Slideshow/>
            </div>
            
                   <Container>
                        <Row>
                    <Col xs={6} md={4}>
                    <Image src="holder.js/171x180" rounded />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src="holder.js/171x180" roundedCircle />
                    </Col>
                        <Col xs={6} md={4}>
                    <Image src="holder.js/171x180" thumbnail />
                    </Col>
             </Row>
            </Container>

        </div> 
        
    )
}
