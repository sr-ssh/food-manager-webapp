
import axios from 'axios';
import { SERVER_URL } from '../config';
import { authHeader } from '../helpers';

let baseRoute = SERVER_URL;

export const customerService = {
    getCustomers
};


function getCustomers() {
    console.log("into customerService");
    let filter = {
        "family": "کو"
    }

    const requestOptions = {
        headers: authHeader(),
        params: filter
    };

    return axios
        .get(`${baseRoute}/customer`, requestOptions)
        .then(res => {
            console.log("res.customers >> "); console.log(res.data.data);
            return res.data.data
        })
        .catch(function (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
            }
        });
}