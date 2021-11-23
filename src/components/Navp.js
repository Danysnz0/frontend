import React from 'react';
import { Nav, Navbar, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import style from './Navp.module.css';
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
                <Container className={style["container"]}>
                    <Navbar.Brand href="#home"><img className={style["logoscorporativos"]} src={sena}></img></Navbar.Brand>
                    <Navbar.Brand href="#home"><img className={style["logoscorporativos"]} src={logosenarama}></img></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    
                    <Navbar.Collapse >
                        <Nav className={style["menu"]}>
                            <Nav.Link href="/inicio">INICIO</Nav.Link>
                            <Nav.Link href="#pricing">PROYECTOS</Nav.Link>
                            <Nav.Link href="#pricing">SENARAUTAS</Nav.Link>
                            <Nav.Link href="#pricing">CARTELERA</Nav.Link>
                            <Nav.Link href="/contacto">CONTACTO</Nav.Link>
                        </Nav>
                        
                        <Nav className={style["redes"]}>
                            <div>
                                <lu className= {style["logosr"]}>
                                    <li><a href="#home"><img className={style["logosredes"]} src={facebook}></img></a></li>
                                    <li><a href="#home"><img className={style["logosredes"]} src={instagram}></img></a></li>
                                    <li><a href="#home"><img className={style["logosredes"]} src={twitter}></img></a></li>
                                    <li><a href="#home"><img className={style["logosredes"]} src={youtube}></img></a></li>
                                </lu> 
                            </div>
                            <div>
                                <lu>
                                    <li><Nav.Link href="/iniciosesion">INICIO SESION|REGISTRO</Nav.Link></li>
                                </lu>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
