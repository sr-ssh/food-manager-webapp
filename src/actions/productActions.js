import { productConstants } from '../constants';
import { history } from '../helpers';
import { productService } from '../services';
import { alertActions } from './alertActions';

export const productActions = {
    getProducts,
    addProduct,
    editProduct,
    getProductTypes
};

function getProducts() {
    return dispatch => {
        dispatch(request())
        productService.getProducts()
            .then(
                res => {
                    
                    if(res === undefined)
                        dispatch(alertActions.error('ارتباط با سرور برقرار نیست'));
                    else if(res.success){
                        console.log("products received")
                        dispatch(success(res.data));
                    }

                    setTimeout(() => {
                        dispatch(alertActions.clear());
                    }, 1500);
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

function addProduct(product) {
    return dispatch => {
        dispatch(request(productConstants.ADD_PRODUCT_REQUEST))
        productService.addProduct(product)
            .then(
                res => {
                    console.log(res)
                    
                    if(res === undefined)
                        dispatch(alertActions.error('ارتباط با سرور برقرار نیست.مجصول شما ثبت نشد'));
                    else if(res.success){
                        console.log("product added")
                        dispatch(success(productConstants.ADD_PRODUCT_SUCCESS, product));
                        dispatch(alertActions.success(res.message));
                        //history.go(0)
                        
                    } else if (res.success === false){
                        dispatch(success(productConstants.ADD_PRODUCT_SUCCESS, product));
                        dispatch(alertActions.error(res.message));
                    }


                    setTimeout(() => {
                        dispatch(alertActions.clear());
                    }, 800);
                },
                error => {
                    dispatch(failure(error.toString()));
                    console.log("occure error");
                    console.log(error.toString());
                    dispatch(alertActions.error(productConstants.ADD_PRODUCT_FAILURE, error.toString()));
                }
            );
    }

}

function editProduct(product) {
    return dispatch => {
        dispatch(request(productConstants.EDIT_PRODUCT_REQUEST))
        productService.editProduct(product)
            .then(
                res => {
                    
                    console.log(res)

                    if(res === undefined)
                        dispatch(alertActions.error('ارتباط با سرور برقرار نیست.مجصول شما ویرایش نشد'));
                    else if(res.success){
                        console.log("product edited")
                        dispatch(success(productConstants.EDIT_PRODUCT_SUCCESS, product));
                        dispatch(alertActions.success(res.message));
                        //history.go(0)
                    } else if (res.success === false)
                        dispatch(alertActions.error(res.message));

                    setTimeout(() => {
                        dispatch(alertActions.clear());
                    }, 1500);
                },
                error => {
                    dispatch(failure(error.toString()));
                    console.log("occure error");
                    console.log(error.toString());
                    dispatch(alertActions.error(productConstants.EDIT_PRODUCT_FAILURE, error.toString()));
                }
            );
    }

}

function getProductTypes() {
    return dispatch => {
        dispatch(request(productConstants.GET_PRODUCT_TYPES_REQUEST))
        productService.getProductTypes()
            .then(
                res => {
                    
                    console.log(res)

                    if(res === undefined)
                        dispatch(alertActions.error('ارتباط با سرور برقرار نیست.مجصول شما ویرایش نشد'));
                    else if(res.success){
                        console.log("product edited")
                        dispatch(success(productConstants.GET_PRODUCT_TYPES_SUCCESS, res.data));
                    } else if (res.success === false)
                        dispatch(alertActions.error(res.message));

                    setTimeout(() => {
                        dispatch(alertActions.clear());
                    }, 1500);
                },
                error => {
                    dispatch(failure(error.toString()));
                    console.log("occure error");
                    console.log(error.toString());
                    dispatch(alertActions.error(productConstants.GET_PRODUCT_TYPES_FAILURE, error.toString()));
                }
            );
    }

}

function request(type) {
    return { type: type }
}

function success(type, data) {
    return { type: type, data }
}

function failure(type, error) {
    return { type: type, error }
}