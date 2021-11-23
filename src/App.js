import { BrowserRouter, BrowserRouter as Router,Route,Switch} from "react-router-dom";
import React from "react"; // Se cocidera una buena practica importar la libreria de React así no sea necesario desde la versión 17
import Navp from "./components/Navp";
import Inicio from "./components/Inicio";
import Footer from "./components/Footer";
import Iniciosesion from "./components/Iniciosesion";
import Contacto from "./components/Contacto";
import Cartelera from "./components/Cartelera";
import styles from './App.module.css';

const LoginNavar = () => {
  return <Iniciosesion/>   
}
const MainNavar = () => {
  return(<>
    <Navp />
      <Route path='/inicio'>
        <Inicio/>
      </Route>

      <Route path='/contacto'>
        <Contacto/>
      </Route>
      
      <Route path='/cartelera'>
        <Cartelera/>
      </Route>
    </>
  )
}




function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/iniciosesion" component={LoginNavar}/>
        <Route  component={MainNavar}/> 
      </Switch>
    </BrowserRouter>                                                    
  );
} 

export default App;
