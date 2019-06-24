import React from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavBar from './NavBar'
import GetTalleres from './Subcomponents/GetTalleres'
export default class Comprobantes extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            legajo : 0,
            apellido : "",
            nombre : "",
            domicilio : "",
            telefono : 0,
            taller : "",
            edad : 0,
            buscar : "",
            valor : 10
        }
        this.actualizarValores = this.actualizarValores.bind(this);
        this.enviar = this.enviar.bind(this);
        this.buscar = this.buscar.bind(this);
    }

    render(){
        return (
            <div className = "container">
                <form onSubmit={this.enviar}>
                    <h1>Modificar inscripto</h1>
                    <div className="form-inline my-2 my-lg-0">
                        <input onChange={this.actualizarValores} name = "buscar" className="form-control mr-sm-2" type="search" placeholder="Introduzca n° de legajo" aria-label="Search"></input>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="reset" onClick={this.buscar}>Buscar</button>
                    </div>
                    <div className="form-group">
                        <div className="form-group">
                            <label htmlFor="inputLegajo">N° Legajo</label>
                            <label name = "legajo" className="form-control" id="inputLegajo" placeholder="Legajo">{this.state.legajo} </label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputApellido">Apellido</label>
                            <label name="apellido" type="text" className="form-control" id="inputApellido" placeholder="Apellido">{this.state.apellido}</label>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputNombre">Nombre</label>
                            <label name="nombre" type="text" className="form-control" id="inputNombre" placeholder="Nombre">{this.state.nombre}</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputTaller">Taller</label>
                            <label name="nombre" type="text" className="form-control" id="inputNombre" placeholder="Nombre">{this.state.taller}</label>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputConcepto">Concepto</label>
                            <select onChange={this.props.actualizarValores} name="taller" id="inputTaller" className="form-control">
                                <option defaultValue>Inscripción</option>
                                <option>Cuota Mensual</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-group">
                            <label htmlFor="inputValor">Valor</label>
                            <label name = "legajo" type="number" className="form-control" id="inputLegajo" placeholder="Legajo">{this.state.valor}</label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Modificar</button>
                </form>
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

    enviar(event){
        axios.post("http://localhost/TalleresBiblioteca/Model/modificarAlumno.php",this.state)
        .then( res => console.log(res))
        .catch(e => console.log(e))
        event.preventDefault();
    }

    buscar(){
        axios.get("http://localhost/TalleresBiblioteca/Model/buscarAlumno.php?id=" + this.state.buscar)
        .then( res => 
            this.setState( {
                legajo : res.data.legajo,
                apellido : res.data.apellido,
                nombre : res.data.nombre,
                domicilio : res.data.domicilio,
                telefono : res.data.telefono,
                taller : res.data.taller,
                edad : res.data.edad,
                valor : res.data.valor
            })
         
        )
        .catch(e => console.log(e))
    }
    
  
}
