import React from 'react';
import { Nav, Navbar, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import style from './Navp.module.css';
import sena from '../assets/img/sena.png';
import logosenarama from '../assets/img/diseñosenarama.png';
import facebook from '../assets/img/facebook.png';
import twitter from '../assets/img/twitter.png';
import instagram from '../assets/img/instagram.png';
import youtube from '../assets/img/youtube.png';

export default function Navp() {
    return (
        <div className={style["cuerpo"]}>
            <Navbar expand="lg" sticky fixed="top" >
                <Container fluid>
                    <Navbar.Brand href="#home">
                        <img className={style["logoscorporativos"]} style={{width:"80px"}} src={sena} />
                    </Navbar.Brand>
                    <Navbar.Brand href="#home">
                        <img className={style["logoscorporativos"]} style={{width:"100px"}} src={logosenarama} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className={style["menu"]}>
                            <Nav.Link href="/inicio" style={{fontWeight: "bold", color:  "#fff"}}>INICIO</Nav.Link>
                            <Nav.Link href="#pricing" style={{fontWeight: "bold", color: "#fff" }}>PROYECTOS</Nav.Link>
                            <Nav.Link href="#pricing" style={{fontWeight: "bold", color: "#fff" }}>SENARAUTAS</Nav.Link>
                            <Nav.Link href="#pricing" style={{fontWeight: "bold", color: "#fff" }}>CARTELERA</Nav.Link>
                            <Nav.Link href="/contacto" style={{fontWeight: "bold", color:"#fff" }}>CONTACTO</Nav.Link>
                        </Nav>

                        <Col md={4} className={style["col"]} style={{marginLeft:"730px"}}>
                            <Row style={{marginLeft: "1px"}}>
                                <Col md={1} >
                                    <img width={35} src={facebook} />
                                </Col>
                                <Col md={1} >
                                    <img width={35} src={twitter} />
                                </Col>
                                <Col md={1} >
                                    <img width={35} src={instagram} />
                                </Col>
                                <Col md={1} >
                                    <img width={35} src={youtube} />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Nav.Link href="/iniciosesion" style={{fontSize: "13px", color:"#fff"}}>
                                        INICIO SESION | REGISTRO
                                    </Nav.Link>
                                </Col>
                            </Row>
                        </Col>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}
