import React from 'react';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import Login from './Login';
import Home from './Home';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Route
          path={process.env.PUBLIC_URL}
          exact
          component={withRouter(Login)}
        />
        <Route path={'/home'} exact component={withRouter(Home)} />
      </Router>
    );
  }
}
