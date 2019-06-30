import React, { Component } from 'react'
import axios from 'axios'

class CreateCliente extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clientes: [{
        name: '',
        phone: '',
        email: ''
      }]
    } 
  }

  handleChange = event => {
    this.setState({ 
      name: event.target.value,
      phone: event.target.value,
      email: event.target.value
    })
  }
  handleSubmit = event => {
    event.preventDefault()

  const cliente = {
    name: this.state.name,
    phone: this.state.phone,
    email: this.state.email
  }

 axios.post('https://api-comandas.herokuapp.com/clientes/novo', {cliente})
  .then(res => {
    console.log(res)
    console.log(res.data)
  })
}
  render() {
    return(
      <div className='container'> 
        <h3> Criar clientes</h3>
          <form className='form-group' onSubmit={this.handleSubmit}>
            <label>Nome</label>
            <input className='form-control' type='text' name='name' onChange={this.handleChange} />
            <label>Telefone</label>
            <input className='form-control' type='text' name='phone'  onChange={this.handleChange} /> 
            <label>email</label>
            <input className='form-control' type='text' name='email'  onChange={this.handleChange} />
            <button className='btn btn-primary mt-2' type='submit' >Cadastrar</button>
          </form>
      </div>
    )
  }

}
export default CreateCliente