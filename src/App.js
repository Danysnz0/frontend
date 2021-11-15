import React from "react"; // Se cocidera una buena practica importar la libreria de React así no sea necesario desde la versión 17
import Header from "./components/Header";
import './App.css';
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <section>
      <Header/>
      </section>
      <section>

        <p>
          Editar <code>src/App.js</code> and save to reload.
        </p>
      </section>
      <section>
      <Footer/>
      </section>
      </header>
    </div>
  );
}

export default App;
