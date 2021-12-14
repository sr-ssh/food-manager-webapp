import { stationConstants } from "../constants";
import { stationService } from "../services";
import { alertActions } from "./alertActions";

export const stationActions = {
  getStations,
  addStation,
};

function getStations() {
  return (dispatch) => {
    dispatch(request(stationConstants.GET_STATIONS_REQUEST));
    stationService.getStations().then(
      (res) => {
        dispatch(success(stationConstants.GET_STATIONS_SUCCESS, res.data));
        dispatch(alertActions.success(res.message));
        setTimeout(() => {
            dispatch(alertActions.clear());
        }, 1500);
      },
      (error) => {
        dispatch(
          failure(stationConstants.GET_STATIONS_FAILURE, error.toString())
        );
        console.log("occure error");
        console.log(error.toString());
        dispatch(alertActions.error(error.toString()));
      }
    );
  };
}

function addStation(params) {
  return (dispatch) => {
    dispatch(request(stationConstants.ADD_STATION_REQUEST));
    stationService.addStation(params).then(
      (res) => {
        dispatch(success(stationConstants.ADD_STATION_SUCCESS, res.data));
        dispatch(alertActions.success(res.message));
        setTimeout(() => {
            dispatch(alertActions.clear());
        }, 1500);
      },
      (error) => {
        dispatch(
          failure(stationConstants.ADD_STATION_FAILURE, error.toString())
        );
        console.log("occure error");
        console.log(error.toString());
        dispatch(alertActions.error(error.toString()));
      }
    );
  };
}

function request(type) {
  return { type: type };
}

function success(type, data) {
  return { type: type, data };
}

function failure(type, error) {
  return { type: type, error };
}
