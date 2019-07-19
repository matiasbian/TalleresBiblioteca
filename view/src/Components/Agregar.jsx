import React from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavBar from './NavBar'
import GetTalleres from './Subcomponents/GetTalleres';
export default class Agregar extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            legajo : 0,
            apellido : "",
            nombre : "",
            domicilio : "",
            telefono : 0,
            taller : "",
            edad : 0
        }
        this.actualizarValores = this.actualizarValores.bind(this);
        this.enviar = this.enviar.bind(this);
    }

    render(){
        return (
            <div className = "container">
                <form onSubmit={this.enviar}>
                    <h1>Agregar inscripto</h1>
                    <div className="form-group">
                        <div className="form-group">
                            <label htmlFor="inputLegajo">N° Legajo</label>
                            <input onChange={this.actualizarValores} name = "legajo" type="number" className="form-control" id="inputLegajo" placeholder="Legajo"></input>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputApellido">Apellido</label>
                            <input onChange={this.actualizarValores} name="apellido" type="text" className="form-control" id="inputApellido" placeholder="Apellido"></input>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputNombre">Nombre</label>
                            <input onChange={this.actualizarValores} name="nombre" type="text" className="form-control" id="inputNombre" placeholder="Nombre"></input>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputdomicilio">Domicilio</label>
                        <input onChange={this.actualizarValores} name="domicilio" type="text" className="form-control" id="inputdomicilio" placeholder="Domicilio"></input>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                        <label htmlFor="inputTelefono">Teléfono</label>
                        <input onChange={this.actualizarValores} name="telefono" type="text" className="form-control" id="inputTelefono"></input>
                        </div>
                        <div className="form-group col-md-4">
                        <label htmlFor="inputTaller">Taller</label>
                        <GetTalleres func={this.actualizarValores} valor="0" ></GetTalleres>
                        </div>
                        <div className="form-group col-md-2">
                        <label htmlFor="inputEdad">Edad</label>
                        <input onChange={this.actualizarValores} name="edad" type="number" className="form-control" id="inputEdad"></input>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Agregar</button>
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
        axios.post("http://bibliotecasarmiento.esy.es/agregarAlumno.php",this.state)
        .then( res => {
            console.log(res);
            alert("Agregado Exitosamente");
            window.location.reload();
        })
        .catch(e => console.log(e))
        event.preventDefault();
    }
    
  
}
