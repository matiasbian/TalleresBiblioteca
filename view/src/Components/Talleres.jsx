import React from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavBar from './NavBar'
import Filas from './Subcomponents/Filas'
import GetTalleres from './Subcomponents/GetTalleres';
import PrintProvider, { NoPrint, Print } from 'react-easy-print';
export default class Talleres extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            taller:  "Taller2",
            filas : []
        }
        this.actualizarValores = this.actualizarValores.bind(this);
        this.buscar = this.buscar.bind(this);
    }

   

    render(){
        return (
            <PrintProvider>
                <div className="container">
                    <NoPrint>
                        <div className="form-inline my-2 my-lg-0">
                            <GetTalleres func={this.actualizarValores} valor="0"></GetTalleres>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={this.buscar}>Buscar</button>
                        </div>
                    </NoPrint>
                    <Print printOnly>
                        <h2>{ "Taller de " + this.state.taller }</h2>
                   </Print>
                    <Print>
                        <table className="table">
                            <thead>
                                <tr>
                                <th scope="col">#Legajo</th>
                                <th scope="col">Apellido</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Domicilio</th>
                                <th scope="col">Teléfono</th>
                                <th scope="col">Taller</th>
                                <th scope="col">Edad</th>
                                </tr>
                            </thead>
                            <tbody>
                                <Filas filas={this.state.filas}></Filas>
                            </tbody>
                        </table>
                    </Print>
                    <Print printOnly>
                        <p>{new Date().toLocaleString()}</p>
                   </Print>
                </div>
            </PrintProvider>
          );
    }

    actualizarValores(event){
        const target = event.target;
        const value =  target.value;
        const name = target.name;

        this.setState({
        [name]: value
        });
    }


    buscar(){
        axios.get("http://localhost/TalleresBiblioteca/Model/buscarTaller.php?taller=" + this.state.taller)
        .then( res => this.setState({ filas : res.data}))
        .catch(e => console.log(e))
    }

}
