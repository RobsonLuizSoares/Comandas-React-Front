import React, { Component } from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import ComandasHome from './ComandasHome'
import Avenida from './Avenida'
import axios from 'axios';

class Comandas extends Component {
  
    constructor(props){
      super(props)
      this.state = {
        comandas: []
      }

    this.renderComanda = this.renderComanda.bind(this)  
    }
  componentDidMount () {
    axios
      .get('https://api-comandas.herokuapp.com/admin/users')
      .then(res => {
        this.setState({
          comandas: res.data
        })
      })
  } 
  renderComanda(comanda){
      return (
        <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">user</th>
                <th scope="col">username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"></th>
                <td>{comanda.user}</td>
                <td>{comanda.username}</td>
              </tr>
             
            </tbody>
          </table>
      )
    }
   
  render (){
   const { match } = this.props 
   
    return(
      <Router>
        <div className='row mt-5'>
          <div className='col-md-4'>
            <h4>Lojas</h4>
            <Link to='/comandas/lojas/1'> Loja 1</Link>

          </div>
          <div className='col-md-8'>
           
           {this.state.comandas.map(this.renderComanda)}
           
            <Route exact path={match.url} component={ComandasHome} />
            <Route exact path={match.url+'/lojas/:lojaId'} component={Avenida} />
          </div>
        </div> 
      </Router>
    )
  }
}

export default Comandas