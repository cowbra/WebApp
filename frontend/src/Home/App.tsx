import React from 'react';
import './App.css';

//import Header from "../Header/Header";
import Login from "../routes/login/Login";


export default class App extends React.Component {
  render(){
    return(
        <div>
            
            <Login/>
        </div>
    )
  }
}
