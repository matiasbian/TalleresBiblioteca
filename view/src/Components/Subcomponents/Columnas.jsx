import React from 'react';


export default class Columnas extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <tr>
                <th>{this.props.columnas.legajo}</th>
                <th>{this.props.columnas.apellido}</th>
                <th>{this.props.columnas.nombre}</th>
                <th>{this.props.columnas.domicilio}</th>
                <th>{this.props.columnas.telefono}</th>
                <th>{this.props.columnas.taller}</th>
                <th>{this.props.columnas.edad}</th>
            </tr>
            

        );
    }



  }

  