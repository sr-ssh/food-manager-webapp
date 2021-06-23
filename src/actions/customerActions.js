import { customerConstants } from '../constants';
import { customerService } from '../services';
import { alertActions } from './alertActions';

export const customerActions = {
    getCustomers,
    setFilter
};

function getCustomers(filter) {
    return dispatch => {
        dispatch(request());
        
        customerService.getCustomers(filter)
            .then(
                customers => {
                    console.log(customers)
                    console.log("user into customerAction");
                    dispatch(success(customers));
                    console.log("got the customers")
                    dispatch(alertActions.success('مشتریان با موفقیت ارسال شدند'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    console.log("occure error");
                    console.log(error.toString());
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request() { console.log("into request"); return { type: customerConstants.GET_CUSTOMERS_REQUEST } }
    function success(customers) { console.log("into success"); return { type: customerConstants.GET_CUSTOMERS_SUCCESS, customers } }
    function failure(error) { return { type: customerConstants.GET_CUSTOMERS_FAILURE, error } }
}

function setFilter(filter) {
    return dispatch => {
        dispatch(success(filter))
        
    };

    function success(filter) { console.log("into success"); return { type: customerConstants.ADD_CUSTOMERS_FILTER, filter } }
}
