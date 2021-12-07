import axios from 'axios';
import { SERVER_URL } from '../config';
import { authHeader } from '../helpers';

let baseRoute = SERVER_URL;

export const deliveryChargesService = {
    getDeliveryCharges
}

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