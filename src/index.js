import React from 'react';
import ReactDOM from 'react-dom';
import './Reset.css';
import style from './index.module.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Route,Switch} from "react-router-dom";



ReactDOM.render(
  <React.StrictMode>
    <Router>  
      <div className={style["main"]}>
        <App/>
      </div>                              
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


