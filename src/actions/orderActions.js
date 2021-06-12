import { orderConstants } from '../constants'
import { orderService } from '../services'
import { alertActions } from './alertActions';

export const orderActions = {
    addOrder
}

function addOrder(products, customer) {
    return dispatch => {
        dispatch(request())
        orderService.addOrder(products, customer)
            .then(
                res => {
                    dispatch(success(products, customer));
                    console.log("order added")
                    console.log(res)
                    dispatch(alertActions.success(res));
                },
                error => {
                    dispatch(failure(error.toString()));
                    console.log("occure error");
                    console.log(error.toString());
                    dispatch(alertActions.error(error.toString()));
                }
            );
    }

    function request() { console.log("into request"); return { type: orderConstants.ADD_ORDER_REQUEST } }
    function success(order) { console.log("into success"); return { type: orderConstants.ADD_ORDER_SUCCESS, order } }
    function failure(error) { return { type: orderConstants.ADD_ORDER_FAILURE, error } }
}