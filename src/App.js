import React, { Component } from 'react'
import {
BrowserRouter as Router,
Route,
Link
} from 'react-router-dom'

import Home from './components/Home'
import Comandas from './components/Comandas'
import Admin from './components/Admin'
import Caixas from './components/Caixas'

class App extends Component {
  render() {
     return (
       <Router>
        <div>
          <div className='container'>
            <nav className="nav mt-5">
              <Link className="nav-link active mr-5" to="/">Net Link</Link>
              <Link className="nav-link mr-5" to="/comandas">Comandas</Link>
              <Link className="nav-link mr-5" to="/caixas">Caixas</Link>
              <Link className="nav-link" to="/admin" tabindex="-1" aria-disabled="true">Administração</Link>
            </nav>
          </div>
          <div className='container my-4'>
            <Route exact path= '/' component={Home} />
            <Route path='/comandas' component={Comandas} />
            <Route exact path='/admin' component={Admin} />
            <Route exact path='/caixas' component={Caixas} />
          </div>
        </div>
      </Router>
    )
  }
}

 

export default App
