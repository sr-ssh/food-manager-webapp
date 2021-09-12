import React from 'react';
import { history } from './helpers';
import { Dashboard } from './mobile/components/main/dashboard'
import PrivateRoute from './mobile/components/privateRoute';
import { Redirect, Route, Router, Switch } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';

//routes
import { Login } from './mobile/components/login'
import { Register } from './mobile/components/register';
import { Customers } from './mobile/components/customers/customers.js';
import { Finance } from './mobile/components/finance/finance.js';
import { Products } from './mobile/components/products/products';
import { AddProduct } from './mobile/components/products/addProduct';
import { EditProduct } from './mobile/components/products/editProduct';
import { Reminders } from './mobile/components/reminder/reminders';
import { Discounts } from './mobile/components/discounts/discounts';
import { Employees } from './mobile/components/employee/employees';
import { Determine } from './mobile/components/determine'
import { Setting } from './mobile/components/setting/setting';
import Bills from './mobile/components/finance/bills';
import { Applications } from './mobile/components/employee/applications';
import { Account } from './mobile/components/acounts/account';


import './mobile/assets/styles/formStyle.css';
import './mobile/assets/styles/baseStyle.css';
import './mobile/assets/styles/orderStyle.css';
import './mobile/assets/styles/productListStyle.css';
import './mobile/assets/styles/product.css'
import './mobile/assets/styles/dashboardStyle.css';
import './mobile/assets/styles/reminderStyle.css';
import './mobile/assets/styles/discountsStyle.css';
import './mobile/assets/styles/mainStyle.css';
import './mobile/assets/styles/financeStyle.css';
import './mobile/assets/styles/determineStyle.css';
import './mobile/assets/styles/employeeStyle.css';
import './mobile/assets/styles/settingStyle.css';



function AppMobile() {
  return (    
        <Router history={history}>
            <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/register" component={Determine} />
            <PrivateRoute path="/products" component={Products} ></PrivateRoute>
            <PrivateRoute path="/customers" component={Customers} ></PrivateRoute>
            <PrivateRoute path="/reminders" component={Reminders} ></PrivateRoute>
            <PrivateRoute path="/discounts" component={Discounts} ></PrivateRoute>
            <PrivateRoute path="/finance" component={Finance}></PrivateRoute>
            <PrivateRoute path="/bills" component={Bills}></PrivateRoute>
            <PrivateRoute path="/dashboard" component={Dashboard} ></PrivateRoute>
            <PrivateRoute path="/employees" component={Employees} ></PrivateRoute>
            <PrivateRoute path="/setting" component={Setting}></PrivateRoute>
            <PrivateRoute path="/employee/add" component={Applications} ></PrivateRoute>
            <PrivateRoute path="/account" component={Account} ></PrivateRoute>
            <Redirect from="*" to="/" />
            </Switch>
        </Router>
  );
}

export default AppMobile;