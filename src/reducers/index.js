import { combineReducers } from 'redux';
import { authentication } from './authenticationReducer';
import { alert } from './alertReducer';
import { getCustomers , setCustomersFilter } from './customerReducer'
import { getProducts } from './productReducer'
import { financeSummary, bill } from './financeReducer'
import { addOrder, getOrders, setOrdersFilter } from './orderReducer'
import { getReminders } from './reminderReducer'

export default combineReducers ({
    authentication,
    alert,
    getProducts,
    getCustomers,
    setCustomersFilter,
    financeSummary,
    bill,
    addOrder,
    getOrders,
    setOrdersFilter,
    getReminders
})