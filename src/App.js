import React from 'react';
import { HashRouter, Route, withRouter } from 'react-router-dom';
import Login from './Login';
import Home from './Home';

export default class App extends React.Component {
  render() {
    return (
      <HashRouter basename="/">
        <Route
          path={process.env.PUBLIC_URL}
          exact
          component={withRouter(Login)}
        />
        <Route path={'/home'} exact component={withRouter(Home)} />
      </HashRouter>
    );
  }
}
