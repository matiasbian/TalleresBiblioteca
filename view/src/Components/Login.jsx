import React from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import cookie from 'react-cookies'

export default class Login extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            valorUsuario : '',
            valorPassword : ''
        }

        this.cambioValorPass = this.cambioValorPass.bind(this);
        this.cambioValorUser = this.cambioValorUser.bind(this);
        this.enviar = this.enviar.bind(this);
    }

    cambioValorUser(event){
        this.setState({valorUsuario: event.target.value});
    }

    cambioValorPass(event){
        this.setState({valorPassword: event.target.value});
    }

    enviar (event){
 
  
        event.preventDefault();
        axios.post('http://bibliotecasarmiento.esy.es/login.php',{ usuario : this.state.valorUsuario, password : this.state.valorPassword })
        .then(resp => {
            cookie.save('username', this.state.valorUsuario, { path: '/' })
            this.props.history.push('/home');
        })
        .catch( e => {
            alert ("Usuario y/o contraseña incorrecta/s");
        })
    }

    render(){
        
        return (
            <div className="container">
                <h1 id="titulo">Biblioteca Sarmiento</h1>
                <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card card-signin my-5">
                    <div className="card-body">
                        <h5 className="card-title text-center">Ingresar</h5>
                        <form className="form-signin" onSubmit={this.enviar}>
                        <div className="form-label-group">
                            <input type="text" id="inputEmail" className="form-control" placeholder="Usuario" required autoFocus value={this.state.valorUsuario} onChange={this.cambioValorUser}></input>
                            <label htmlFor="inputEmail">Usuario</label>
                        </div>

                        <div className="form-label-group">
                            <input type="password" id="inputPassword" className="form-control" placeholder="Contraseña" required value={this.state.valorPassword} onChange={this.cambioValorPass}></input>
                            <label htmlFor="inputPassword">Contraseña</label>
                        </div>
           
                        <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" value ="Submit">Sign in</button>
                        <hr className="my-4"></hr>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </div>
          );
    }
  
}


