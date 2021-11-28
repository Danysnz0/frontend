import React from 'react'

export default function Registropasodos() {
    return (
        <div>
        <div className="container">
<div className="wrapper">
 <ul className="steps">
   <h1>REGISTRO SENARAMA</h1>
   <li>Paso 1</li>
   <li className="is-active">Paso 2</li>
   <li>Paso 3</li>
 </ul>
 <form className="form-wrapper">
   <fieldset class="section is-active ">
     <h3>Por favor complete los datos que se indican a continuación</h3>
     Foto de perfil<br/><a title="Foto"><img
       src="https://toppng.com/uploads/preview/user-font-awesome-nuevo-usuario-icono-11563566658mjtfvilgcs.png"
       height="100"
       width="100"
       fluid
       alt="foto de perfil"
     ></img></a><br/><br/>
     *Nombre Persona / Colectivo<input type="text" name="name" id="name" placeholder="Nombre" />
     *RUT<br/><input type="number" name="rut" id="rut" placeholder="Número de RUT" /><br/><br/>
     *Cédula<br/><input type="number" name="cc" id="cc" placeholder="Número de cédula" /><br/><br/>
     *Correo electrónico<br/><input type="email" name="email" id="email" placeholder="Email" /><br/><br/>
     *Contraseña<input type="password" name="password" id="password" placeholder="Contraseña" /><br/>
     Intereses
     <div className="row cf">
       <div className="four col">
         <input type="checkbox" name="r1" id="r1" />
         <label for="r1">
           <p>Audiovisuales</p>
         </label>
       </div>
       <div className="four col">
         <input type="checkbox" name="r1" id="r2"><label for="r2" />
           <p>Musicales</p>
         </label>
       </div>
       <div className="four col">
         <input type="checkbox" name="r1" id="r3"><label for="r3" />
           <p>Danza</p>
         </label>
       </div>
     </div>
     <a className="btn btn-primary" href="Registro3" role="button"><h4>Siguiente</h4></a><br/>
   </fieldset>

<fieldset className="section">
     <h3>Account Type</h3>
     <div className="row cf">
       <div className="four col">
         <input type="radio" name="r1" id="r1" checked />
         <label for="r1">
           <h4>Designer</h4>
         </label>
       </div>
       <div className="four col">
         <input type="radio" name="r1" id="r2"><label for="r2" />
           <h4>Developer</h4>
         </label>
       </div>
       <div className="four col">
         <input type="radio" name="r1" id="r3"><label for="r3" />
           <h4>Project Manager</h4>
         </label>
       </div>
     </div>
     <div className="button">Next</div>
   </fieldset>
   </div>
    )
}
