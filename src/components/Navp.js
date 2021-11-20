import React from 'react';
import { Nav, Navbar, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navp.css';
import sena from '../assets/img/sena.png';
import logosenarama from '../assets/img/logosenarama.png';
import facebook from '../assets/img/facebook.png';
import twitter from '../assets/img/twitter.png';
import instagram from '../assets/img/instagram.png';
import youtube from '../assets/img/youtube.png';

export default function Navp() {
    return (
        <div>
            <Navbar  expand="lg">
                <Container className="container">
                    <Navbar.Brand href="#home"><img className="logoscorporativos" src={sena}></img></Navbar.Brand>
                    <Navbar.Brand href="#home"><img className="logoscorporativos" src={logosenarama}></img></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    
                    <Navbar.Collapse >
                        <Nav className="menu">
                            <Nav.Link href="/inicio">INICIO</Nav.Link>
                            <Nav.Link href="#pricing">PROYECTOS</Nav.Link>
                            <Nav.Link href="#pricing">SENARAUTAS</Nav.Link>
                            <Nav.Link href="#pricing">CARTELERA</Nav.Link>
                            <Nav.Link href="#">CONTACTO</Nav.Link>
                        </Nav>
                        
                        <Nav className="redes">

                            <lu>
                                <li><Nav.Link href="#deets">INICIO SESION|REGISTRO</Nav.Link></li>
                            </lu>

                            
                            <lu className= "logosr">
                                <li><a href="#home"><img className="logosredes" src={facebook}></img></a></li>
                                <li><a href="#home"><img className="logosredes" src={instagram}></img></a></li>
                                <li><a href="#home"><img className="logosredes" src={twitter}></img></a></li>
                                <li><a href="#home"><img className="logosredes" src={youtube}></img></a></li>
                            </lu> 
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
