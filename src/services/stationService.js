import axios from "axios";
import { SERVER_URL } from "../config";
import { authHeader, handleResponse } from "../helpers";

let baseRoute = SERVER_URL + "/station";

export const stationService = {
  getStations,
  addStation,
  editStation
};

function getStations() {
  const requestOptions = {
    headers: authHeader(),
  };

  return axios
    .get(`${baseRoute}`, requestOptions)
    .then((res) => {
      handleResponse(res);
      return res.data;
    })
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
      }
    });
}

function addStation(params) {
  const requestOptions = {
    headers: authHeader(),
    body: params,
  };

  return axios
    .post(`${baseRoute}`, requestOptions.body, {
      headers: requestOptions.headers,
    })
    .then((res) => {
      handleResponse(res);
      return res.data;
    })
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
      }
    });
}

function editStation(params) {
  const requestOptions = {
    headers: authHeader(),
    body: params,
  };

  return axios
    .put(`${baseRoute}`, requestOptions.body, {
      headers: requestOptions.headers,
    })
    .then((res) => {
      handleResponse(res);
      return res.data;
    })
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
      }
    });
}
