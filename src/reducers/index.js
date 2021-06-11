import { combineReducers } from 'redux';
import { authentication } from './authenticationReducer';
import { alert } from './alertReducer';
import { getCustomers , setCustomersFilter } from './customerReducer'
import { getProducts } from './productReducer'

export default combineReducers ({
    authentication,
    alert,
    getProducts,
    getCustomers,
    setCustomersFilter
})