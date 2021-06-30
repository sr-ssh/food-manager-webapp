import { combineReducers } from 'redux';
import { authentication, register } from './authenticationReducer';
import { alert } from './alertReducer';
import { getCustomers, getCustomer } from './customerReducer'
import { getProducts, addProduct, editProduct } from './productReducer'
import { financeSummary, bill } from './financeReducer'
import { addOrder, getOrders, setOrdersFilter } from './orderReducer'
import { getReminders } from './reminderReducer'
import { getDiscounts } from './discountReducer';
import { addDiscount } from './discountReducer';
import { getEmployees, editEmployee, addEmployee } from './employeeReducer';
import { getPermissions } from './employeeReducer';

export default combineReducers ({
    authentication,
    register,
    alert,
    getProducts,
    addProduct,
    editProduct,
    getCustomers,
    getCustomer,
    financeSummary,
    bill,
    addOrder,
    getOrders,
    setOrdersFilter,
    getReminders,
    getDiscounts,
    addDiscount,
    getEmployees,
    editEmployee,
    addEmployee,
    getPermissions
})