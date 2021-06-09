import React from 'react';
import { history } from '../src/helpers';
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
            <Route exact path="/cutomers" component={Customers} />
            {/* <Redirect from="*" to="/" /> */}
            </Switch>
        </Router>
  );
}

export default App;