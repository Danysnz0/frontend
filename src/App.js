import { BrowserRouter,Route,Switch} from "react-router-dom";
import React from "react"; // Se cocidera una buena practica importar la libreria de React así no sea necesario desde la versión 17
import Navp from "./components/Navp";
import Inicio from "./components/Inicio";
import Iniciosesion from "./components/Iniciosesion";
import Contacto from "./components/Contacto";
import Cartelera from "./components/Cartelera";

const LoginNavar = () => {
  return  <Iniciosesion exact path="/iniciodesesion"/>    
}
const MainNavar = () => {
  return(<>
    <Navp />
    <BrowserRouter>
    <Switch>

      <Route path='/contacto'>
        <Contacto/>
      </Route>

      <Route path='/cartelera'>
        <Cartelera/>
      </Route>

      <Route path='/'>
        <Inicio/>
      </Route>

      <Route path="*">
        <h1>404 Not found</h1>
      </Route>
    </Switch>
    </BrowserRouter> 
    </>
  )
}






function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/iniciosesion" exact  component={LoginNavar}/>
        <Route  component={MainNavar}/> 
      </Switch>
    </BrowserRouter>                                                    
  );
} 

export default App;
