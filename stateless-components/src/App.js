import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Home} from "./components/home"
import {Header }from "./components/Header"
import {Dome }from "./components/statelessComponent"


class App extends Component {

  render() {
    var items=["Home","About us","Contact us"];
    return (
      <div className="App">

     <Dome title="Timmy"/>  
       <Header itemList={items} desc="Content of paragraph will change with button click"/>
       <Home title="React App"/>
      </div>
    );
  }
}

export default App;
