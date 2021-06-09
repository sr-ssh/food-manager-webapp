import React from 'react';
import { history } from '../src/helpers';
import { Login } from './components/login'
import { Redirect, Route, Router, Switch } from 'react-router';


function App() {
  return (    
        <Router history={history}>
            <Switch>
            <Route exact path="/" component={Login} />
            <Redirect from="*" to="/" />
            </Switch>
        </Router>
  );
}

export default App;