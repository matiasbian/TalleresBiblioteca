import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Components/Login'
import Home from './Components/Home'
import Agregar from './Components/Agregar'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function App() {
  return (
    <Router>
      <Route exact path="/home" component={Home} />
      <Route exact path="/agregar" component={Agregar} />
      <Route exact path="/" component={Login} />
    </Router>
  );
}

export default App;
