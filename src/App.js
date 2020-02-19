import React from 'react';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import Login from './Login';
import Home from './Home';

function App() {
  return (
    <Router>
      {/* <Route path="/" exact component={Landing} /> */}
      <Route path="/" exact component={withRouter(Login)} />
      <Route path="/home" exact component={withRouter(Home)} />
    </Router>
  );
}

export default App;
