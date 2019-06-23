import React from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavBar from './NavBar'
export default class Home extends React.Component{

    constructor(props){
        super(props)
        this.state = {comp : null}
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


