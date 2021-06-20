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
import { Products } from './components/products/products';
import { AddProduct } from './components/products/addProduct';
import { EditProduct } from './components/products/editProduct';
import { Main } from './components/main/main';
import { Orders } from './components/order/orders';

function App() {
  return (    
        <Router history={history}>
            <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/register" component={Register} />
            <PrivateRoute path="/main" component={Main} ></PrivateRoute>
            <PrivateRoute path="/products" component={Products} ></PrivateRoute>
            <PrivateRoute path="/product/add" component={AddProduct} ></PrivateRoute>
            <PrivateRoute path="/product/edit" component={EditProduct} ></PrivateRoute>
            <PrivateRoute path="/orders" component={Orders} ></PrivateRoute>
            <PrivateRoute path="/customers" component={Customers} ></PrivateRoute>
            <PrivateRoute path="/finance" component={Finance}></PrivateRoute>
            <PrivateRoute path="/dashboard" component={Dashboard} ></PrivateRoute>
            <PrivateRoute path="/order/add" component={AddOrder} ></PrivateRoute>
            <Redirect from="*" to="/" />
            </Switch>
        </Router>
  );
}

export default App;