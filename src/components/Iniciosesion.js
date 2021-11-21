import React from 'react';
import { Form, Button,} from 'react-bootstrap';
import './Normalize.css'
import styles from './Iniciosesion.module.css';
import imageniniciosesion from '../assets/img/imageniniciosesion.jpg';

export default function Iniciosesion() {
    return (
        <div className={styles["container-iniciosesion"]}>
            <div className={styles["wabes"]}>
            <img className={styles["imagenca"]} src={imageniniciosesion}/>
            </div>
            <div className={styles["login-end-register"]}>
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
