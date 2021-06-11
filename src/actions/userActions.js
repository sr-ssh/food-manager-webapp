import { userConstants } from '../constants';
import { userService } from '../services';
import { history } from '../helpers';
import { alertActions } from './alertActions';

export const userActions = {
    login,
    register
};


function login(mobileOrEmail, password) {
    return dispatch => {
        dispatch(request({ mobileOrEmail }));
        
        userService.login(mobileOrEmail, password)
            .then(
                user => {
                    //console.log(user)
                    console.log("user into userAction");
                    dispatch(success(user));
                    history.push('/dashboard');
                    console.log("user entered")
                    dispatch(alertActions.success('با موفقیت وارد شدید'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    console.log("occure error");
                    console.log(error.toString());
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { console.log("into request"); return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { console.log("into success"); return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function register(user) {
    return dispatch => {
        dispatch(request({ user }));
        
        userService.register(user)
            .then(
                user => {
                    console.log(user)
                    console.log("user into userAction");
                    dispatch(success(user));
                    history.push('/home');
                    console.log("user registered")
                    dispatch(alertActions.success('با موفقیت ثبت نام کردید'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    console.log("occure error");
                    console.log(error.toString());
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { console.log("into request"); return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { console.log("into success"); return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}