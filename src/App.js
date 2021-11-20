import { BrowserRouter as Router,Route,Switch} from "react-router-dom";
import React from "react"; // Se cocidera una buena practica importar la libreria de React así no sea necesario desde la versión 17
import Navp from "./components/Navp";
import Inicio from "./components/Inicio";
import Footer from "./components/Footer";
import Iniciosesion from "./components/Iniciosesion";


function App() {
  return (

        <Switch>
          <Route path='/inicio'>
            <Inicio/>
          </Route>

          

        </Switch>
      
  );
}

export default App;
