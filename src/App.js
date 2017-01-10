import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Home from "./containers/Home";
import Search from "./containers/Search";

import './App.css';



class App extends Component {
  render() {
    return ( 
      <Router history={ browserHistory } >
        <Route path='/' component={Home} /> 
        <Route path='/search' component={ Search } />
      </Router>
    );
  }
}

export default App;