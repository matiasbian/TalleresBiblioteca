import React from 'react';
import '../App.css';
import Agregar from './Agregar'
import Modificar from './Modificar'
import Talleres from './Talleres'
import Comprobantes from './Comprobantes';
import ModifTalleres from './ModifTalleres';
import cookie from 'react-cookies'
import { Link } from 'react-router-dom';

export default class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id : 0,
            user : "nul",
            cookies : {}
        }
       this.goLogin = this.goLogin.bind(this);
    }

    componentDidMount(){
        this.setState( {  user : cookie.load('username'), cookies: cookie.loadAll()});
    }

    goLogin(){
        cookie.remove('username', { path: '/' }); 
        this.props.history.push('/')
    }

    render(){
        return (
            <div>
            { (this.state.cookies.username === undefined) ? null:
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
               
                <a className="navbar-brand" href="/home">Biblioteca Sarmiento</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <button type="button" id="botNav" className="btn btn-dark" onClick = { () => this.props.setC(<Agregar></Agregar>) }>Agregar</button>
                        </li>
                        <li className="nav-item">
                            <button type="button" id="botNav" className="btn btn-dark" onClick = { () => this.props.setC(<Modificar></Modificar>) }>Modificar</button>
                        </li>
                        <li className="nav-item">
                            <button type="button" id="botNav" className="btn btn-dark" onClick = { () => this.props.setC(<Talleres></Talleres>) }>Talleres</button>
                        </li>
                        <li className="nav-item">
                            <button type="button" id="botNav" className="btn btn-dark" onClick = { () => this.props.setC(<Comprobantes></Comprobantes>) }>Comprobantes</button>
                        </li>
                        <li className="nav-item">
                            <button type="button" id="botNav" className="btn btn-dark" onClick = { () => this.props.setC(<ModifTalleres></ModifTalleres>) }>Modificar talleres</button>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <button type="button" className="btn btn-dark">{this.state.user.toUpperCase()}</button>
                        <button type="button" className="btn btn-outline-light" onClick={ this.goLogin }>X</button>
                        
                    </form>
                    
                </div>
            </nav>}
            </div>
          );
    }
  
}


