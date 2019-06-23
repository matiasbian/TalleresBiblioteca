import React from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavBar from './NavBar'
import Filas from './Subcomponents/Filas'
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
            <div className="container">
                <div className="form-inline my-2 my-lg-0">
                        <select onChange={this.actualizarValores} value = {this.state.taller} name="taller" id="inputTaller" className="form-control">
                            <option defaultValue>Taller</option>
                            <option >Taller2</option>
                            {/*optionstalleres*/}
                        </select>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={this.buscar}>Buscar</button>
                </div>
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
            </div>
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
