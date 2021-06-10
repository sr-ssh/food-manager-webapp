
import axios from 'axios';
import { SERVER_URL } from '../config';

let baseRoute = SERVER_URL;

export const customerService = {
    getCustomers
};


function getCustomers() {
    console.log("into customerService");
    let user = localStorage.getItem('user')
    user = JSON.parse(user)
    let data = {
        headers:{
            'authorization': user.accessToken,
            'idtoken': user.idToken
        }
    }
    return axios
        .get(`${baseRoute}/customer`, data)
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