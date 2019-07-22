import React from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavBar from './NavBar'
import GetTalleres from './Subcomponents/GetTalleres';
import ContainerComprobantes from './Subcomponents/ContainerComprobantes';
import PrintProvider, { Print, NoPrint } from 'react-easy-print';
import '../Style/Comprobantes.css'
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
            valor : 10,
            duplicado : false
        }
        this.actualizarValores = this.actualizarValores.bind(this);
        this.buscar = this.buscar.bind(this);
        this.duplicar = this.duplicar.bind(this);
    }

    render(){
        return (
            <PrintProvider>
                <div className = "container">
                    <center><h1>Comprobantes</h1></center>
                    <NoPrint>
                        <div id="divcomp" className="form-inline my-2 my-lg-0">
                            <input id="busqueda" onChange={this.actualizarValores} name = "buscar" className="form-control mr-sm-2" type="search" placeholder="Introduzca n° de legajo" aria-label="Search"></input>
                            <button className="btn btn-success" type="reset" onClick={this.buscar}>Buscar</button>
                        </div>
                        <br></br>
                   </NoPrint>
                   <ContainerComprobantes datos={this.state}></ContainerComprobantes>
                   <Print printOnly>
                    <ContainerComprobantes datos={this.state}></ContainerComprobantes>
                   </Print>
                   
                    <NoPrint>
                            <br></br>
                            <br></br>
                            <button id="imprimircomp" type="button" className="btn btn-primary btn-lg btn-block" onClick={ window.print}>Imprimir</button>
                    </NoPrint>
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
        axios.get("http://bibliotecasarmiento.esy.es/buscarAlumno.php?id=" + this.state.buscar)
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

    duplicar(){
        this.setState({ duplicado : !this.state.duplicado})
    }
    
  
}

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 3
        }}
    />
);
