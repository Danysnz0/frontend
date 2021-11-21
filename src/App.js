import { BrowserRouter as Router,Route,Switch} from "react-router-dom";
import React from "react"; // Se cocidera una buena practica importar la libreria de React así no sea necesario desde la versión 17
import Navp from "./components/Navp";
import Inicio from "./components/Inicio";
import Footer from "./components/Footer";
import Iniciosesion from "./components/Iniciosesion";
import Contacto from "./components/Contacto";
import './App.module.css';


function App() {
  return (

        <Router className={"containerapp"}>
          <Navp className="Navp"/>
          <Route path='/inicio' exact component={Inicio}/>
          
          <Route path='/contacto'>
            <Contacto/>
          </Route>
          
          <Route path='/iniciosecion'>
            <Iniciosesion/>
          </Route>
          

        </Router>
      
  );
}

export default App;
