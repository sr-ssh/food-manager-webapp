import { discountConstants } from '../constants';
import { history } from '../helpers';
import { discountService } from '../services';
import { alertActions } from './alertActions';

export const discountActions = {
    getDiscounts,
    addDiscount,
};

function getDiscounts() {
    return dispatch => {
        dispatch(request(discountConstants.GET_DISCOUNTS_REQUEST))
        discountService.getDiscounts()
            .then(
                res => {
                    dispatch(success(discountConstants.GET_DISCOUNTS_SUCCESS, res.data));
                    console.log("discounts received")
                    console.log(res.data)
                    dispatch(alertActions.success(res));
                },
                error => {
                    dispatch(failure(discountConstants.GET_DISCOUNTS_FAILURE, error.toString()));
                    console.log("occure error");
                    console.log(error.toString());
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

}

function addDiscount(discount) {
    return dispatch => {
        dispatch(request(discountConstants.ADD_DISCOUNT_REQUEST))
        discountService.addDiscount(discount)
            .then(
                res => {
                    dispatch(success(discountConstants.ADD_DISCOUNT_SUCCESS, discount));
                    console.log("discont added")
                    console.log(res)
                    dispatch(alertActions.success(res));
                    history.push('/discounts')
                },
                error => {
                    dispatch(failure(error.toString()));
                    console.log("occure error");
                    console.log(error.toString());
                    dispatch(alertActions.error(discountConstants.ADD_DISCOUNT_FAILURE, error.toString()));
                }
            );
    }

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