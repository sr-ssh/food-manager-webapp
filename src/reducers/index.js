import { combineReducers } from 'redux';
import { authentication } from './authenticationReducer';
import { alert } from './alertReducer';
import { getCustomers , setCustomersFilter } from './customerReducer'
import { financeSummary, bill } from './financeReducer'

export default combineReducers ({
    authentication,
    alert,
    getCustomers,
    setCustomersFilter,
    financeSummary,
    bill
})