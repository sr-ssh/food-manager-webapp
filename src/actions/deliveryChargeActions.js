import { deliveryChargesConstants } from '../constants';
import { deliveryChargesService } from '../services';
import { alertActions } from './alertActions';

export const deliveryChargesActions = {
    getDeliveryCharges,
    addDeliveryCharges
};

function getDeliveryCharges() {
    return dispatch => {
        dispatch(request(deliveryChargesConstants.GET_DELIVERY_CHARGES_REQUEST))
        deliveryChargesService.getDeliveryCharges()
            .then(
                res => {
                    dispatch(success(deliveryChargesConstants.GET_DELIVERY_CHARGES_SUCCESS, res));
                    console.log("*********reminders received**********")
                    console.log(res)
                    dispatch(alertActions.success(res));
                },
                error => {
                    dispatch(failure(deliveryChargesConstants.GET_DELIVERY_CHARGES_FAILURE, error.toString()));
                    console.log("occure error");
                    console.log(error.toString());
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

}

function addDeliveryCharges(input) {
    return dispatch => {
        dispatch(request(deliveryChargesConstants.ADD_DELIVERY_CHARGES_REQUEST))
        deliveryChargesService.addDeliveryCharges(input)
            .then(
                res => {
                    dispatch(success(deliveryChargesConstants.ADD_DELIVERY_CHARGES_SUCCESS, res));
                    console.log("*********reminders received**********")
                    console.log(res)
                    dispatch(alertActions.success(res));
                },
                error => {
                    dispatch(failure(deliveryChargesConstants.ADD_DELIVERY_CHARGES_FAILURE, error.toString()));
                    console.log("occure error");
                    console.log(error.toString());
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

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