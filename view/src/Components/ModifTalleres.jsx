import React from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavBar from './NavBar'
import GetTalleres from './Subcomponents/GetTalleres';
export default class ModifTalleres extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            taller : "",
            valor : 0,
            ntaller : "",
            nvalor : 0
        }
        this.actualizarValores = this.actualizarValores.bind(this);
        this.agregar = this.agregar.bind(this);
        this.modificar = this.modificar.bind(this);
        this.borrar = this.borrar.bind(this);
    }

    render(){
        return (
            <div className = "container">
                <form>
                    <h2>Modificar taller</h2>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputTaller">Taller</label>
                            <GetTalleres func={this.actualizarValores} valor="0" ></GetTalleres>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputValor">Valor</label>
                            <input onChange={this.actualizarValores} name="valor" type="number" className="form-control" id="inputValor" placeholder="Valor"></input>
                        </div>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={this.modificar}>Modificar</button>
                </form>

                <form onSubmit={this.agregar}>
                    <h2>Agregar taller</h2>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputTaller2">Taller</label>
                            <input onChange={this.actualizarValores} name="ntaller" type="text" className="form-control" id="inputTaller2" placeholder="Nombre del taller"></input>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputValor2">Valor</label>
                            <input onChange={this.actualizarValores} name="nvalor" type="number" className="form-control" id="inputValor2" placeholder="Valor"></input>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Agregar</button>
                </form>

                <form onSubmit={this.borrar}>
                    <h2>Borrar taller</h2>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputTaller">Taller</label>
                            <GetTalleres func={this.actualizarValores} valor="0" ></GetTalleres>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Borrar</button>
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

    agregar(event){
        axios.post("http://localhost/TalleresBiblioteca/Model/agregartaller.php",this.state)
        .then( res => {
            console.log(res);
            alert("Taller agregado correctamente");
            window.location.reload();
        })
        .catch(e => console.log(e))
        event.preventDefault();
    }

    modificar(event){
        axios.post("http://localhost/TalleresBiblioteca/Model/modificartaller.php",this.state)
        .then( res => {
            console.log(res);
            alert("Taller modificado correctamente");
            window.location.reload();
        })
        .catch(e => console.log(e))
        event.preventDefault();
    }

    borrar(event){
        axios.post("http://localhost/TalleresBiblioteca/Model/borrartaller.php",this.state)
        .then( res => {
            console.log(res);
            alert("Taller eliminado correctamente");
            window.location.reload();
        })
        .catch(e => console.log(e))
        event.preventDefault();
    }
    
  
}
