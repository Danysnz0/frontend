import React from 'react';
import { Form, Button,} from 'react-bootstrap';
import './Normalize.css'
import './Iniciosesion.css';
import imageniniciosesion from '../assets/img/imageniniciosesion.jpg';

export default function Iniciosesion() {
    return (
        <div className="container-iniciosesion">
            <div className="wabes">
            <img className="imagenca" src={imageniniciosesion}/>
            </div>
            <div className="login-end-register">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Ingrese e-mail" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Contraseña" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>    
            </div>
        </div>
    )
}
