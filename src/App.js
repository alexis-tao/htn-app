import React from 'react';
import { HashRouter as Router, Route, withRouter } from 'react-router-dom';
import Login from './Login';
import Home from './Home';

export default class App extends React.Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Route path="/" exact component={withRouter(Login)} />
        <Route path="/home" exact component={withRouter(Home)} />
      </Router>
    );
  }
}
