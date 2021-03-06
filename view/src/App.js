import React from 'react';
import './App.css';
import Login from './Components/Login'
import Home from './Components/Home'
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Route exact path="/home" component={Home} />
      <Route exact path="/" component={Login} />
    </Router>
  );
}

export default App;
