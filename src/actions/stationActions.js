import { stationConstants } from '../constants';
import { stationService } from '../services';
import { alertActions } from './alertActions';

export const stationActions = {
    getStations
};

function getStations() {
    return dispatch => {
        dispatch(request(stationConstants.GET_STATIONS_REQUEST))
        stationService.getStations()
            .then(
                res => {
                    dispatch(success(stationConstants.GET_STATIONS_SUCCESS, res));
                    dispatch(alertActions.success(res));
                },
                error => {
                    dispatch(failure(stationConstants.GET_STATIONS_FAILURE, error.toString()));
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