import React from 'react';
import Columnas from './Columnas'

export default class Filas extends React.Component {
    render(){
        return (
        this.props.filas.map( (x,i) =>  <Columnas key={i} columnas={x}></Columnas>  )
        );
    }
  }