import React from 'react';
import { Link, Switch, Route, useRouteMatch} from 'react-router-dom';
import {useForm} from "react-hook-form";
import { useState } from 'react';
import Registropasouno from './Registropasouno';
import { } from 'react-bootstrap';
import styles from './Iniciosesion.module.css';
import imageniniciosesion from '../assets/img/imageniniciosesion1.jpg';
import logosenarama from '../assets/img/diseñosenarama.png';

export default function Iniciosesion() {
  let {path, url}= useRouteMatch();

    const [user, setUser] = useState(null)

    const { register, handleSubmit, formState: { errors } } = useForm();
  
    const onSubmit = evento => {
      console.log(evento);
  
      setTimeout(() => {
        if (evento.password === "123456") {
          setUser(evento)
        } else {
          setUser(null)
        }
      }, 4000);
    }
  



    return (
        <div className={styles["container-iniciosesion"]}>
            <div className={styles["wabes"]}>
            <img className={styles["imagenca"]} src={imageniniciosesion}/>
            </div>
            <div className={styles["login-end-register"]}>
            <div>
            <img src={logosenarama} style={{height:"50px", with:"50px"}}></img>
            <form onSubmit={handleSubmit(onSubmit)}>

              <div className={`${styles.inputBonito} ${errors.email && styles.error}`}>
                <input type="text" autoComplete="off" id="email" placeholder="ejemplo@gmail.com"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Necesitas este campo"
                    },
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Este campo es requerido"
                    }
                  })}
                />
                {errors.email && <span className={errors.email && styles.mensajeError}>{errors.email.message}</span>}
              </div>
              <div className={`${styles.inputBonito}  ${errors.password && styles.error}`}>
                <input type="password" id="password" placeholder="Contraseña"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Este campo es requerido"
                    },
                    minLength: {
                      value: 8,
                      message: "La contraseña debe tener al menos 8 caracteres"
                    }
                  })}

                />
                {errors.password && <span className={errors.password && styles.mensajeError}>{errors.password.message}</span>}
              </div>

              <button type="submit" value="submit" className={`${styles.btn}`} > Iniciar Sesión</button>

              {!user && <div>Usuario o contraseña incorrectos</div>}

            </form>



                <p>¿Aún no eres Senarauta?</p>
                <Link to={`${url}/registropasouno`}>!Registrate!</Link>
                <Link href="#">Terminos y condiciones </Link>
                <Switch>
                  <Route path={`${path}:/registropasouno`}  component={Registropasouno}>
                    <Registropasouno/>
                  </Route>
                </Switch>
            </div>
            </div>
        </div>
    )
}
