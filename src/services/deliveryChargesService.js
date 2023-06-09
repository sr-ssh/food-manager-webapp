import axios from 'axios';
import { SERVER_URL } from '../config';
import { authHeader } from '../helpers';

let baseRoute = SERVER_URL;

function getDeliveryCharges() {
    console.log("into deliveryChargesService");

    const requestOptions = {
        headers: authHeader()
    };

    return axios
        .get(`${baseRoute}/charge`, requestOptions)
        .then(res => {
            console.log("res.charges >> "); console.log(res.data.data);
            return res.data.data
        })
        .catch(function (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
            }
        });
}

function addDeliveryCharges(input) {
    console.log("into deliveryChargesService");

    const requestOptions = {
        headers: authHeader()
    };

    return axios
        .post(`${baseRoute}/charge`, input, requestOptions)
        .then(res => {
            console.log("res.charges >> "); console.log(res.data.data);
            return res.data.data
        })
        .catch(function (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
            }
        });
}


export const deliveryChargesService = {
    getDeliveryCharges,
    addDeliveryCharges
}