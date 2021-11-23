import { BrowserRouter as Router,Route,Switch} from "react-router-dom";
import React from "react"; // Se cocidera una buena practica importar la libreria de React así no sea necesario desde la versión 17
import Navp from "./components/Navp";
import Inicio from "./components/Inicio";
import Footer from "./components/Footer";
import Iniciosesion from "./components/Iniciosesion";
import Contacto from "./components/Contacto";
import styles from './App.module.css';


function App() {
  return (

        <Router>
          <Navp className={styles["barra"]}/>

          <Route path='/inicio'>
            <Inicio/>
          </Route>
          
          <Route path='/contacto'>
            <Contacto/>
          </Route>
          
          <Route path='/iniciosesion'>
            <Iniciosesion/>
          </Route>
          

        </Router>
      
  );
}

export default App;
