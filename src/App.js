import React from 'react';
import { history } from '../src/helpers';
import { Dashboard } from './components/main/dashboard'
import { AddOrder } from './components/base/addOrder'
import PrivateRoute from './components/privateRoute';
import { Redirect, Route, Router, Switch } from 'react-router';

//routes
import { Login } from './components/login'
import { Register } from './components/register';
import { Customers } from './components/customers/customers.js';


function App() {
  return (    
        <Router history={history}>
            <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <PrivateRoute exact path="/customers" component={Customers} ></PrivateRoute>
            <PrivateRoute path="/dashboard" component={Dashboard} ></PrivateRoute>
            <PrivateRoute path="/addOrder" component={AddOrder} ></PrivateRoute>
            <Redirect from="*" to="/" />
            </Switch>
        </Router>
  );
}

export default App;