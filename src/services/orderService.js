import axios from 'axios';
import { SERVER_URL } from '../config';
import { authHeader } from '../helpers';

let baseRoute = SERVER_URL;

export const orderService = {
    addOrder
};

function addOrder(products, customer) {
    console.log("into orderService");
    const requestOptions = {
        headers: authHeader(),
        body: {products, customer}
    };

    return axios
        .post(`${baseRoute}/order`,requestOptions.body ,{headers: requestOptions.headers} )
        .then(res => {
            console.log("res.user >> "); 
            console.log(res.data);
            return res.data
        })
        .catch(function (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
            }
        });
}