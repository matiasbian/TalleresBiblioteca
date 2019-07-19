import React from 'react';
import '../../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar'
import GetTalleres from './GetTalleres'
import PrintProvider, { Print, NoPrint } from 'react-easy-print';
export default class Comprobantes extends React.Component{

    constructor(props){
        super(props)
        this.actualizarValores = this.actualizarValores.bind(this);
        this.enviar = this.enviar.bind(this);
        this.buscar = this.buscar.bind(this);
    }

    render(){
        return (
                <div className = "container">
                <form onSubmit={this.enviar}>
                <h3>Comprobante de pago</h3>
                    <div className="form-group">
                        <div className="form-group">
                            <label htmlFor="inputLegajo">N° Legajo</label>
                            <label name = "legajo" className="form-control" id="inputLegajo" placeholder="Legajo">{this.props.datos.legajo} </label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputApellido">Apellido</label>
                            <label name="apellido" type="text" className="form-control" id="inputApellido" placeholder="Apellido">{this.props.datos.apellido}</label>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputNombre">Nombre</label>
                            <label name="nombre" type="text" className="form-control" id="inputNombre" placeholder="Nombre">{this.props.datos.nombre}</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputTaller">Taller</label>
                            <label name="nombre" type="text" className="form-control" id="inputNombre" placeholder="Nombre">{this.props.datos.taller}</label>
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
                            <label name = "legajo" type="number" className="form-control" id="inputLegajo" placeholder="Legajo">{this.props.datos.valor}</label>
                        </div>
                    </div>                  
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
        .then( res => console.log(res))
        .catch(e => console.log(e))
        event.preventDefault();
    }

    buscar(){
        axios.get("http://bibliotecasarmiento.esy.es/buscarAlumno.php?id=" + this.props.datos.buscar)
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
