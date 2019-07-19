import React from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavBar from './NavBar'
import GetTalleres from './Subcomponents/GetTalleres'
export default class Modificar extends React.Component{

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
                            <input onChange={this.actualizarValores}  value = {this.state.legajo} name = "legajo" type="number" className="form-control" id="inputLegajo" placeholder="Legajo"></input>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputApellido">Apellido</label>
                            <input onChange={this.actualizarValores} value = {this.state.apellido} name="apellido" type="text" className="form-control" id="inputApellido" placeholder="Apellido"></input>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputNombre">Nombre</label>
                            <input onChange={this.actualizarValores} value = {this.state.nombre} name="nombre" type="text" className="form-control" id="inputNombre" placeholder="Nombre"></input>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputdomicilio">Domicilio</label>
                        <input onChange={this.actualizarValores} value = {this.state.domicilio} name="domicilio" type="text" className="form-control" id="inputdomicilio" placeholder="Domicilio"></input>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                        <label htmlFor="inputTelefono">Teléfono</label>
                        <input onChange={this.actualizarValores} value = {this.state.telefono} name="telefono" type="text" className="form-control" id="inputTelefono"></input>
                        </div>
                        <div className="form-group col-md-4">
                        <label htmlFor="inputTaller">Taller</label>
                        <GetTalleres func={this.actualizarValores} selec={this.state.taller} valor="0" ></GetTalleres>

                        </div>
                        <div className="form-group col-md-2">
                        <label htmlFor="inputEdad">Edad</label>
                        <input onChange={this.actualizarValores} value = {this.state.edad} name="edad" type="number" className="form-control" id="inputEdad"></input>
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
        axios.post("http://bibliotecasarmiento.esy.es/modificarAlumno.php",this.state)
        .then( res => {
            alert("Modificado Exitosamente");
            window.location.reload();
        })
        .catch(e => console.log(e))
        event.preventDefault();
    }

    buscar(){
        axios.get("http://bibliotecasarmiento.esy.es/buscarAlumno.php?id=" + this.state.buscar)
        .then( res => {
            this.setState( {
                legajo : res.data.legajo,
                apellido : res.data.apellido,
                nombre : res.data.nombre,
                domicilio : res.data.domicilio,
                telefono : res.data.telefono,
                taller : res.data.taller,
                edad : res.data.edad
            })
            console.log(res);
         
        })
        .catch(e => console.log(e))
    }
    
  
}
