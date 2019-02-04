import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './../containers/login/LoginPage.jsx';
import Header from './../containers/Header/header.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
    
          <Route exact path="/" component={Header} />
          <Route path="/header" component={Header} />
        </div>
      </Router>
    );
  }
}

export default App;
