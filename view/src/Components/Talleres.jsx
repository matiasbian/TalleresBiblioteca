import React from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavBar from './NavBar'
export default class Talleres extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            taller:  ""
        }
        this.actualizarValores = this.actualizarValores.bind(this);
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
                        <button className="btn btn-outline-success my-2 my-sm-0" type="reset" onClick={this.buscar}>Buscar</button>
                </div>
                <table class="table">
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
                        <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
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

}
