import { settingsConstants } from '../constants'
import { history } from '../helpers';
import { orderService, settingsService } from '../services'
import { alertActions } from './alertActions';

export const settingsActions = {
    orderSettings,
    editOrderSettings,
}

function editOrderSettings(params) {
    return dispatch => {
        dispatch(request(params))
        settingsService.editOrderSettings(params)
            .then(
                res => {
                    console.log(res)
                    if(res === undefined) {
                        dispatch(alertActions.error('ارتباط با سرور برقرار نیست'));
                        dispatch(failure('ارتباط با سرور برقرار نیست'))
                    }
                    else if(res.success){
                        console.log("order sms edited")
                        dispatch(success());
                        dispatch(alertActions.success(res.message));
                        setTimeout(() => {
                            dispatch(alertActions.clear());
                        }, 1500);
                        
                    }else if(res.success === false) {
                        dispatch(alertActions.error(ResizeObserver.message));
                        dispatch(failure(ResizeObserver.message))
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
            )
    }
    function request(params) { console.log('into request'); return { type: settingsConstants.EDIT_ORDER_SETTINGS_REQUEST, params } }
    function success() { console.log("into success"); return { type: settingsConstants.EDIT_ORDER_SETTINGS_SUCCESS } }
    function failure(error) {return { type: settingsConstants.EDIT_ORDER_SETTINGS_FAILURE, error }}
}

function orderSettings() {
    return dispatch => {
        dispatch(request())
        settingsService.getorderSettings()
            .then(
                res => {
                    console.log(res)
                    if(res === undefined) {
                        dispatch(alertActions.error('ارتباط با سرور برقرار نیست'));
                        dispatch(failure('ارتباط با سرور برقرار نیست'))
                    }
                    else if(res.success){
                        console.log("order added")
                        dispatch(success(res.data));
                        
                    }else if(res.success === false) {
                        dispatch(alertActions.error(ResizeObserver.message));
                        dispatch(failure(ResizeObserver.message))
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
            )
    }
    function request() { console.log("into request"); return { type: settingsConstants.GET_ORDER_SETTINGS_REQUEST } }
    function success(settings) { console.log("into success"); return { type: settingsConstants.GET_ORDER_SETTINGS_SUCCESS, settings } }
    function failure(error) { return { type: settingsConstants.GET_ORDER_SETTINGS_FAILURE, error } }
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