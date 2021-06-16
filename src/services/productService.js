
import axios from 'axios';
import { SERVER_URL } from '../config';
import { authHeader } from '../helpers';
import { handleResponse, handleError } from '../helpers'

let baseRoute = SERVER_URL;

export const productService = {
    getProducts,
    addProduct
};


function getProducts() {
    console.log("into productService");

    const requestOptions = {
        headers: authHeader()
    };
    
    return axios
        .get(`${baseRoute}/product`, requestOptions)
        .then(res => {
            console.log("res.user >> "); console.log(res.data.data);
            return handleResponse(res)
        })
        .catch(function (error) {
            if (error.response) {
                console.log(error.response.data);
                handleError(error.response.status)
            }
        });
}


function addProduct(product) {
    console.log("into productService");
    const requestOptions = {
        headers: authHeader()
    };
    return axios
        .post(`${baseRoute}/product`, product,{headers: requestOptions.headers} )
        .then(res => {
            console.log("res.user >> "); 
            console.log(res.data);
            return handleResponse(res)
        })
        .catch(function (error) {
            if (error.response) {
                console.log(error.response.data);
                handleError(error.response.status)
            }
        });
}
