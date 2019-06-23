import React from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Agregar from './Agregar'
import Modificar from './Modificar'
import Talleres from './Talleres'

export default class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id : 0,
            user : ""
        }
    }

    componentDidMount(){
        //this.setState( { id : this.props.location.state.id, user : this.props.location.state.username});
    }

    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/home">Biblioteca Sarmiento</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick = { () => this.props.setC(<Agregar></Agregar>) }>Agregar </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick = { () => this.props.setC(<Modificar></Modificar>) }>Modificar</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick = { () => this.props.setC(<Talleres></Talleres>) }>Talleres</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Comprobantes</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <a className="navbar-brand" href="#">{this.state.user}</a>
                    </form>
                </div>
            </nav>
          );
    }
  
}


