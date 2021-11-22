import React from 'react';
import style from './Contacto.module.css';
import { Form} from 'react-bootstrap';

export default function Contacto() {
    return (
        <div>
            <form className={style["contact-form"]}>
            
                <legend>CONTACTANOS</legend>
                <div className={style["custom-select"]} >
                    <Form.Select aria-label="Default select example">
                        <option>Seleccione Asunto select menu</option>
                        <option value="1">Petición</option>
                        <option value="2">Queja</option>
                        <option value="3">Reclamo</option>
                        <option value="4">Sugerencia</option>
                        <option value="5">Soporte Técnico</option>
                    </Form.Select>
                </div>
                <input type="text" name="name" placeholder="Nombre" title="Nombre sólo acepta letras y espacios en blanco" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$" required />
                <input type="email" name="email" placeholder="Correo electronico" title="Correo incorrecto" pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$" required />
                <input type="text" name="sudject" placeholder="Asunto" title="El asunto es requerido" required />
                <textarea name="comments" cols="50" rows="5" placeholder="Mensaje" data-pattern="^.{1,255}$" required></textarea>
                <input type="submit" value="ENVIAR" />
            
            </form>
        </div>
    )
}
