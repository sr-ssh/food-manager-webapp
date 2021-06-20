import { orderConstants } from '../constants'
import { orderService } from '../services'
import { alertActions } from './alertActions';

export const orderActions = {
    getOrders,
    addOrder
}

function getOrders(filter) {
    return dispatch => {
        dispatch(request(orderConstants.GET_ORDERS_REQUEST))
        orderService.getOrders(filter)
            .then(
                res => {
                    dispatch(success(orderConstants.GET_ORDERS_SUCCESS, res.data));
                    console.log("orders received")
                    console.log(res.data)
                    dispatch(alertActions.success(res));
                },
                error => {
                    dispatch(failure(orderConstants.GET_ORDERS_FAILURE, error.toString()));
                    console.log("occure error");
                    console.log(error.toString());
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

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

function request(type) {
    return { type: type }
}

function success(type, data) {
    return { type: type, data }
}

function failure(type, error) {
    return { type: type, error }
}