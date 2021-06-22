
import axios from 'axios';
import { SERVER_URL } from '../config';
import { authHeader } from '../helpers';

let baseRoute = SERVER_URL;

export const customerService = {
    getCustomers
};


function getCustomers(filter) {
    console.log("into customerService");

    filter = {
        "family": "کو",
        "mobile": "0",
        "createdAtFrom": "1900-01-01T05:42:13.845Z",
        "createdAtTo": "1900-01-01T05:42:13.845Z",
        "lastBuyFrom": "1900-01-01T05:42:13.845Z",
        "lastBuyTo": "1900-01-01T05:42:13.845Z",
        "orderFrom": "0",
        "orderTo": "0",
        "totalFrom": "0",
        "totalTo": "0"
    }

    const requestOptions = {
        headers: authHeader()
    };

    return axios
        .get(`${baseRoute}/customer/${encodeURI(filter.family)}/${encodeURI(filter.mobile)}/${encodeURI(filter.createdAtFrom)}/${encodeURI(filter.createdAtTo)}/${encodeURI(filter.lastBuyFrom)}/${encodeURI(filter.lastBuyTo)}/${encodeURI(filter.orderFrom)}/${encodeURI(filter.orderTo)}/${encodeURI(filter.totalFrom)}/${encodeURI(filter.totalTo)}`, requestOptions)
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