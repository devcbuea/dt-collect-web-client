import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './../containers/Home/Home';
import DataProfile from "../containers/Dataprofile/DataProfile";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/create-data-profile" component={DataProfile}/>
        </div>
      </Router>
    );
  }
}

export default App;
