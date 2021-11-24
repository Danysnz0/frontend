import React from 'react';
import style from './Footer.module.css';
import {Container, Col, Image, Row} from 'react-bootstrap';



export default function Footer() {
    return (
        

        <Container style={{flexDirection:"column",justifyContent:"center"}} className={style["footer"]}>
            <Row style={{marginLeft:"500px", padding:"2rem"}}>
                <Col>
                    <div style={{fontSize:"12px", alignItems:"center"}}>
                        <p>Servicio Nacional de Aprendizaje SENA - Centro de Formación en Actividad Física y Cultura Regional Distrito Capital
                        <br/>
                        Dirección: Trans. 78J No, 41 D - 15 Sur Localidad Kennedy Bogotá D.C - Teléfono: 5461500 Ext: 16552
                        <br/>
                        Conmutador Nacional (57 1) 5461500 - Extensiones
                        <br/>
                        Atención telefónica: lunes a viernes 7:00 a.m. a 7:00 p.m. - sábados 8:00 a.m. a 1:00 p.m.
                        <br/>
                        Atención al ciudadano: Bogotá (57 1) 3430111 - Línea gratuita y resto del país 018000 910270
                        <br/>
                        Atención al empresario: Bogotá (57 1) 3430101 - Línea gratuita y resto del país 018000 910682</p>
                    </div>
                    <div>
                        <p>SENARAMA</p>
                    </div>
                </Col>
            </Row>
        </Container>
            

    )
}