import React from 'react';
import styles from './Registro.module.css'

export default function Registropasouno() {
  
    return (
        //Paso 1
        <div className={styles["container"]}>
            <div className={styles["wrapper"]}>
                <ul className={styles["steps"]}>
                  <h1>REGISTRO SENARAMA</h1>
                  <li className="is-active">Paso 1</li>
                  <li>Paso 2</li>
                  <li>Paso 3</li>
                </ul>
          <form className="form-wrapper">
            <fieldset className="section is-active">
          <h3>Tipo de Usuario</h3>
              <a className={styles["btn btn-primary"  ]} href="Registro2n" role="button"><h4>Persona Natural</h4></a><br/>
              <a className={styles["btn btn-secundary"]} href="Registro2j" role="button"><h4>Persona Jurídica</h4></a>
        </fieldset>

        <fieldset className={styles["section"]}>
          <h3>Account Created!</h3>
          <p>Your account has now been created.</p>
          <div className={styles["button"]}>Reset Form</div>
        </fieldset> 
      </form>
    </div>
  </div>
  
        //Paso 2




































































    )
}
