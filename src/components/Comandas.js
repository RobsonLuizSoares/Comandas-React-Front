import React, { Component } from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import ComandasHome from './ComandasHome'

class Comandas extends Component {

  render (){
    return(
      <Router>
        <div className='row mt-5'>
          <div className='col-md-4'>
            <h4> Link para a Loja</h4>
          </div>
          <div className='col-md-8'>
            <h1> Comandas </h1>
            <Router exact path={this.props.match.url} component={ComandasHome} />
          </div>
        </div>
      </Router>
    )
  }
}

export default Comandas