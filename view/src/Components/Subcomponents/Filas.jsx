import React from 'react';
import App from '../../App.css';
import Columnas from './Columnas'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Filas extends React.Component {
    render(){
        return (
        this.props.filas.map( (x,i) =>  <Columnas key={i} columnas={x}></Columnas>  )
        );
    }
  }