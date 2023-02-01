import React from 'react';
import { Link } from 'react-router-dom';

import './App.css';

//import Header from "../Header/Header";
//import Login from "./routes/login/Login";
//import Register from "./routes/register/Register";

export default class App extends React.Component {
  render(){
    return(
        <div className="home-container">
          <h1>Bienvenue </h1>
          <Link to="./routes/login/Login">
          <button className="redirect-button">Se connecter</button>
          </Link>
          <Link to="./routes/register/Register">
          <button className="redirect-button">S'inscrire</button>
          </Link>
        </div>
    )
  }
}
