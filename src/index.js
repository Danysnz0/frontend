import React from 'react';
import ReactDOM from 'react-dom';
import './Reset.css';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Route,Switch} from "react-router-dom";



ReactDOM.render(
  <React.StrictMode>
    <Router>  
      <div className="main">
        <App/>
      </div>                              
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


