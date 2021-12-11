import axios from 'axios';
import { SERVER_URL } from '../config';
import { authHeader } from '../helpers';
import { handleResponse, handleError } from '../helpers'

let baseRoute = SERVER_URL;

export const settingsService = {
    getorderSettings,
    editOrderSettings,
    getPricing
};

function getorderSettings() {
    console.log('into settingsService')

    const requestOptions = {
        headers: authHeader(),
        body: {}
    }

    return axios
        .get(`${baseRoute}/settings/order`, {headers: requestOptions.headers})
        .then(res => {
            console.log("res.user >> ")
            console.log(res.data)
            return handleResponse(res)
        })
        .catch(function (error) {
            if(error.response) {
                console.log(error.response.data)
                handleError(error.response.status)
            }
        })
}

function editOrderSettings(params) {
    console.log('into settingsService')

    const requestOptions = {
        headers: authHeader(), 
        body: params
    }

    return axios
        .put(`${baseRoute}/settings/order`, requestOptions.body, {headers: requestOptions.headers})
        .then(res => {
            console.log('res >>')
            console.log(res.data)
            return handleResponse(res)
        })
        .catch(error => {
            if(error.response) {
                console.log(error.response.data)
                handleError(error.response.status)
            }
        })
}

function getPricing() {

    const requestOptions = {
        headers: authHeader(),
        body: {}
    }

    return axios
        .get(`${baseRoute}/settings/pricing`, {headers: requestOptions.headers})
        .then(res => {
            console.log("res.user >> ")
            console.log(res.data)
            return handleResponse(res)
        })
        .catch(function (error) {
            if(error.response) {
                console.log(error.response.data)
                handleError(error.response.status)
            }
        })
}
