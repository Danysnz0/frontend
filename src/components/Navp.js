import React, {useState} from 'react';
import { Nav, Navbar, Container, Row, Col } from 'react-bootstrap';
import estilo from './Navp.module.css';
import './Navptrans.css';
import sena from '../assets/img/sena.png';
import logosenarama from '../assets/img/diseñosenarama.png';
import facebook from '../assets/img/facebook.png';
import twitter from '../assets/img/twitter.png';
import instagram from '../assets/img/instagram.png';
import youtube from '../assets/img/youtube.png';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

export default function Navp() {
    const [navbar, setNavbar] = useState(false);

    const changeBackground= () => {
        if(window.scrollY >= 5){
            setNavbar(true)
        }else{
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        
            <Navbar  className= {navbar ? 'nav active' : 'nav'} expand="lg" sticky fixed="top"  style={{padding: 0}}>
                <Container fluid>
                    <Navbar.Brand href="#home">
                        <img className={estilo["logoscorporativos"]} style={{width:"50px"}} src={sena} />
                    </Navbar.Brand>
                    <Navbar.Brand href="#home">
                        <img className={estilo["logoscorporativos"]} style={{width:"60px"}} src={logosenarama} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className={estilo["menu"]}>
                            <Nav.Link href="/inicio" style={{fontWeight: "bold", color: "#fff", fontFamily: "verdana" }} active>INICIO</Nav.Link>
                            <Nav.Link href="#pricing" style={{fontWeight: "bold", color: "#fff", fontFamily: "verdana"}}>PROYECTOS</Nav.Link>
                            <Nav.Link href="#pricing" style={{fontWeight: "bold", color: "#fff", fontFamily: "verdana" }}>SENARAUTAS</Nav.Link>
                            <Nav.Link href="#pricing" style={{fontWeight: "bold", color: "#fff", fontFamily: "verdana" }}>CARTELERA</Nav.Link>
                            <Nav.Link href="/contacto" style={{fontWeight: "bold", color:"#fff", fontFamily: "verdana" }}>CONTACTO</Nav.Link>
                        </Nav>

                        <Col md={4} className={estilo["col"]} style={{marginLeft:"730px"}}>
                            <Row style={{marginLeft: "1px"}}>
                                <Col md={1} >
                                    <img width={30} src={facebook} />
                                </Col>
                                <Col md={1} >
                                    <img width={30} src={twitter} />
                                </Col>
                                <Col md={1} >
                                    <img width={30} src={instagram} />
                                </Col>
                                <Col md={1} >
                                    <img width={30} src={youtube} />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Nav.Link href="/iniciosesion" style={{fontSize: "11px", color:"#fff", fontFamily: "verdana" }}>
                                        INICIO SESION | REGISTRO
                                    </Nav.Link>
                                </Col>
                            </Row>
                        </Col>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

    )
}
