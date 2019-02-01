import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './../containers/login/LoginPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
