import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navp from './components/Navp';
import { BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Footer from './components/Footer';
import './Reset.css';


ReactDOM.render(
  <React.StrictMode>
    <Router>
    <div className="App Site">
                <div className="Site-content">
                    <div className="App-header">
                        <Navp />
                    </div>
                    <div className="main">
                       
                    </div>
                </div>
                
            </div>

    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


