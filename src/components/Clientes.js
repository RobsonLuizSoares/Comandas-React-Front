import React, { Component } from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import axios from 'axios';
import CreateCliente from './CreateCliente'

class Clientes extends Component {
  
    constructor(props){
      super(props)
      this.state = {
        clientes: []
      }

    this.renderClientes = this.renderClientes.bind(this)  
    }
  componentDidMount () {
    axios
      .get('https://api-comandas.herokuapp.com/clientes/list')
      .then(res => {
        this.setState({
          clientes: res.data
        })
      })
  } 
  renderClientes(clientes){
      return (
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              <h5>{clientes.name}</h5>
            </div>
            <div className='col-md-4'>
              <h5>{clientes.phone}</h5>
            </div>
            <div className='col-md-4'>
              <h5>{clientes.email}</h5>
            </div>
          </div>
        </div>
                
              
      )
    }
   
  render (){   
    return(
      <Router>
        <div className='row mt-5'>
          <div className='col-md-4'>
            <h4> Link para a Loja</h4>

          </div>
          <div className='col-md-8'>
           <h1> Clientes Cadastrados </h1>
           {this.state.clientes.map(this.renderClientes)}
           
            <CreateCliente />
            
          </div>
        </div> 
      </Router>
    )
  }
}

export default Clientes