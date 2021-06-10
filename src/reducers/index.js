import { combineReducers } from 'redux';
import { authentication } from './authenticationReducer';
import { alert } from './alertReducer';
import { getCustomers , setCustomersFilter } from './customerReducer'

export default combineReducers ({
    authentication,
    alert,
    getCustomers,
    setCustomersFilter
})