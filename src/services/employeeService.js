
import axios from 'axios';
import { SERVER_URL } from '../config';
import { authHeader } from '../helpers';
import { handleResponse, handleError } from '../helpers'

let baseRoute = SERVER_URL;

export const employeeService = {
    getEmployees
};


function getEmployees() {
    console.log("into employeeService");

    const requestOptions = {
        headers: authHeader()
    };
    
    return axios
        .get(`${baseRoute}/employee`, requestOptions)
        .then(res => {
            console.log("res.user >> "); console.log(res.data.data);
            handleResponse(res)
            return res.data
        })
        .catch(function (error) {
            if (error.response) {
                console.log(error.response.data);
                handleError(error.response.status)
            }
        });
}
