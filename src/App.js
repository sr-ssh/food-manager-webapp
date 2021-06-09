import React from 'react';
import { history } from '../src/helpers';
import { Login } from './components/login'
import { Dashboard } from './components/main/dashboard'
import { AddOrder } from './components/base/addOrder'
import PrivateRoute from './components/privateRoute';
import { Redirect, Route, Router, Switch } from 'react-router';


function App() {
  return (    
        <Router history={history}>
            <Switch>
            <Route exact path="/" component={Login} />
            <PrivateRoute path="/dashboard" component={Dashboard} ></PrivateRoute>
            <PrivateRoute path="/addOrder" component={AddOrder} ></PrivateRoute>
            <Redirect from="*" to="/" />
            </Switch>
        </Router>
  );
}

export default App;