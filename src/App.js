import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './App.css';
import Header from './Component/Header';
import India from './Component/India';
import World from './Component/World';
import Statedata from './Component/Statedata';
import {
  BrowserRouter as Router ,
  Link ,
  Route ,
  Switch
} from 'react-router-dom';
class App extends Component{
  constructor(){
      super();
  }
  render(){
    return(
      <div className="container-fluid">
      <Router>
      <Header/>
      <Switch>
        <Route exact path="/">
          <India/>
          <Statedata/>
          </Route>

          <Route path="/india">
          <India/>
          <Statedata/>
          </Route>

          <Route path="/world">
          <World/>
          </Route>



      </Switch>
      </Router>

      </div>
    )
  }
}
export default App;
