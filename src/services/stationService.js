import axios from 'axios';
import { SERVER_URL } from '../config';
import { authHeader, handleResponse } from '../helpers';

let baseRoute = SERVER_URL;

export const stationService = {
    getStations
}

function getStations() {

    const requestOptions = {
        headers: authHeader()
    };

    return axios
        .get(`${baseRoute}/stations`, requestOptions)
        .then(res => {
            handleResponse(res)
            return res.data.data
        })
        .catch(function (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
            }
        });
}