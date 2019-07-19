import React from 'react';
import '../App.css';
import NavBar from './NavBar'
import Agregar from './Agregar';
export default class Home extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            comp : <Agregar></Agregar>
        }
        this.setComponent = this.setComponent.bind(this);
    }

    render(){
        return (
            <div>
                <NavBar {...this.props} setC = {this.setComponent}></NavBar>
                {this.state.comp}
            </div>
          );
    }


    setComponent(compo){
        this.setState({comp : compo })
    }
  
}


