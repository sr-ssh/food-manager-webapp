import { getConstants } from '../constants';
import { homeService } from '../services';
import { alertActions } from './alertActions';
import { history } from '../helpers';



function getConfigPrice() {
    return dispatch => {
        dispatch(request(getConstants.GET_CONFIG_PRICE_REQUEST));

        homeService.getConfigPrice()
            .then(
                res => {
                    console.log("user into financeAction");
                    dispatch(success(getConstants.GET_CONFIG_PRICE_SUCCESS, res));
                },
                error => {
                    dispatch(failure(getConstants.GET_CONFIG_PRICE_FAILURE, error.toString()));
                    console.log("occure error");
                    console.log(error.toString());
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };
}

export const homeActions = {
    getConfigPrice
};



function request(type) {
    return { type: type }
}

function success(type, data) {
    return { type: type, data }
}

function failure(type, error) {
    return { type: type, error }
}