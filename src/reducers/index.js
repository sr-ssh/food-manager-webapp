import { combineReducers } from 'redux';
import { authentication, register, verificationCode } from './authenticationReducer';
import { alert } from './alertReducer';
import { getCustomers, getCustomer } from './customerReducer'
import { getProducts, addProduct, editProduct, getProductTypes } from './productReducer'
import { financeSummary, bill } from './financeReducer'
import { addOrder, getOrders, setOrdersFilter, editOrderStatus, getOrderSms, deliverySms } from './orderReducer'
import { getReminders } from './reminderReducer'
import { getDiscounts } from './discountReducer';
import { addDiscount } from './discountReducer';
import { getEmployees, editEmployee, addEmployee, deleteEmployee, getApplications, addApplication, getEmployeeTypes, blockUnblockEmployee } from './employeeReducer';
import { getPermissions } from './employeeReducer';
import { getUserInfo, editUserInfo } from './userReducer';
import { getOrderSettings, editOrderSettings } from './settingsReducer';

export default combineReducers ({
    authentication,
    register,
    alert,
    getProducts,
    addProduct,
    editProduct, getProductTypes,
    getCustomers,
    getCustomer,
    financeSummary,
    editOrderStatus,
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
    deleteEmployee,
    getPermissions, 
    verificationCode,
    getUserInfo,
    getOrderSms,
    getApplications,
    addApplication, getEmployeeTypes, blockUnblockEmployee,
    editUserInfo,
    deliverySms,
    getOrderSettings, editOrderSettings
})