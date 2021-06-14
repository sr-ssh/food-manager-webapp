import React from 'react';
import { history } from '../src/helpers';
import { Dashboard } from './components/main/dashboard'
import { AddOrder } from './components/order/addOrder'
import PrivateRoute from './components/privateRoute';
import { Redirect, Route, Router, Switch } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';

//routes
import { Login } from './components/login'
import { Register } from './components/register';
import { Customers } from './components/customers/customers.js';
import { Finance } from './components/finance/finance.js';


function App() {
  return (    
        <Router history={history}>
            <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/register" component={Register} />
            <PrivateRoute path="/customers" component={Customers} ></PrivateRoute>
            <PrivateRoute path="/finance" component={Finance}></PrivateRoute>
            <PrivateRoute path="/dashboard" component={Dashboard} ></PrivateRoute>
            <PrivateRoute path="/addOrder" component={AddOrder} ></PrivateRoute>
            <Redirect from="*" to="/" />
            </Switch>
        </Router>
  );
}

export default App;