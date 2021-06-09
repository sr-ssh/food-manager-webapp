import { combineReducers } from 'redux';
import { authentication } from './authenticationReducer';
import { alert } from './alertReducer';

export default combineReducers ({
    authentication,
    alert
})