import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/home';
import Users from './pages/users';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Route exact path='/' component={Home} />
        <Route path='/users' component={Users} />
        </div>
      </Router>
    )
  }
}

export default App;
