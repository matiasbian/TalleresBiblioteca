import React from 'react';
import axios from 'axios';

export default class GetTalleres extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            opciones : []
        }
    }

    componentDidMount(){
        axios.get("http://localhost/TalleresBiblioteca/Model/getTalleres.php?valor=" + this.props.valor)
        .then( res => this.setState({ opciones : res.data}))
        .catch(e => console.log(e))
    }

    render(){
        return ( 
            <select onChange={this.props.func} name="taller" id="inputTaller" className="form-control">
                 <option defaultValue> { (this.props.selec) ? this.props.selec : "Taller"}</option>
                { this.state.opciones.map( (x,i) => <option key={i}> {x.nombreT} </option>)  }    
            </select>
        );
    }



  }
