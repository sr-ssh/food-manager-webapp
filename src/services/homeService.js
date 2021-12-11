
import axios from 'axios';
import { SERVER_URL } from '../config';
import { authHeader } from '../helpers';


let baseRoute = SERVER_URL;
const requestOptions = {
    headers: authHeader()
};


function getConfigPrice() {
    return axios.get(`${baseRoute}/settings/pricing`, requestOptions).then(res => res.data)
        .catch(error => {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
            }
        });
}

function editConfigPrice(input) {
    return axios.put(`${baseRoute}/settings/pricing`, input, requestOptions).then(res => res.data)
        .catch(error => {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
            }
        });
}





export const homeService = { getConfigPrice, editConfigPrice }