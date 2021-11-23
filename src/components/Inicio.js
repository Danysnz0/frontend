import React from 'react'
import Slideshow from './Slideshow';



export default function Inicio() {
    return (
        <main>
            <Slideshow/>
        
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

            </main>     
            
            
            
            
            
            
            
            
            
            

            
        
    )
}
