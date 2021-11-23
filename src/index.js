import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Navp from './components/Navp';



ReactDOM.render(
  <React.StrictMode>
        <App/>                          
  </React.StrictMode>,
  document.getElementById('root')
);


