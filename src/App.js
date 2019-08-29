import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Users from './pages/users';
import UserInfo from './pages/userInfo';



class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Route exact path='/' component={Home} />
        <Switch>
          <Route path='/users/:id' component={UserInfo} />
          <Route path='/users' component={Users} />
        </Switch>
        
       
        </div>
      </Router>
    )
  }
}

export default App;
