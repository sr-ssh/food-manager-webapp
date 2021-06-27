import { userConstants } from '../constants';
import { userService } from '../services';
import { history } from '../helpers';
import { alertActions } from './alertActions';

export const userActions = {
    login,
    register,
    appInfo,
    logout
};


function login(mobileOrEmail, password) {
    return dispatch => {
        dispatch(request({ mobileOrEmail }));
        
        userService.login(mobileOrEmail, password)
            .then(
                user => {
                    console.log("user into userAction");

                    if(user === undefined)
                        dispatch(alertActions.error('ارتباط با سرور برقرار نیست'));
                    else if(user.success){
                        console.log("user entered")
                        dispatch(success(user));
                        dispatch(alertActions.success(user.message));
                        history.push('/dashboard');
                    }else if(user.success === false)
                        dispatch(alertActions.error(user.message));
                        
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

    function request(user) { console.log("into request"); return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { console.log("into success"); return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function appInfo() {
    return dispatch => {
        userService.appInfo()
            .then(
                res => {
                    console.log("user entered")
                    console.log(res)
                    dispatch(alertActions.success(res));
                },
                error => {
                    console.log("occure error");
                    console.log(error.toString());
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

}

function register(user) {
    return dispatch => {
        dispatch(request({ user }));
        
        userService.register(user)
            .then(
                user => {
                    console.log("user into userAction");
                    console.log(user)

                    if(user === undefined)
                        dispatch(alertActions.error('ثبت نام با موفقیت انجام نشد. ارتباط با سرور برقرار نیست'));
                    else if(user.success){
                        console.log("user registered")
                        dispatch(success(user));
                        dispatch(alertActions.success(user.message));
                        history.push('/home');
                    }else if(user.success === false)
                        dispatch(alertActions.error(user.message));

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

    function request(user) { console.log("into request"); return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { console.log("into success"); return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    history.push('/')
}
