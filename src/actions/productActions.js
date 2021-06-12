import { productConstants } from '../constants';
import { productService } from '../services';
import { alertActions } from './alertActions';

export const productActions = {
    getProducts
};

function getProducts() {
    return dispatch => {
        dispatch(request())
        productService.getProducts()
            .then(
                res => {
                    dispatch(success(res.data));
                    console.log("products received")
                    console.log(res.data)
                    dispatch(alertActions.success(res));
                },
                error => {
                    dispatch(failure(error.toString()));
                    console.log("occure error");
                    console.log(error.toString());
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request() { console.log("into request"); return { type: productConstants.GET_PRODUCT_REQUEST } }
    function success(product) { console.log("into success"); return { type: productConstants.GET_PRODUCT_SUCCESS, product } }
    function failure(error) { return { type: productConstants.GET_PRODUCT_FAILURE, error } }
}