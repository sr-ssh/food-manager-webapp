import { employeeConstants } from '../constants';
import { employeeService } from '../services';
import { alertActions } from './alertActions';

export const employeeActions = {
    getEmployees
};

function getEmployees() {
    return dispatch => {
        dispatch(request(employeeConstants.GET_EMPLOYEES_REQUEST))
        employeeService.getEmployees()
            .then(
                res => {
                    if(res === undefined)
                        dispatch(alertActions.error('ارتباط با سرور برقرار نیست'));
                    else if(res.success){
                        console.log("employees received")
                        dispatch(success(employeeConstants.GET_EMPLOYEES_SUCCESS, res.data));
                    }
                        
                    setTimeout(() => {
                        dispatch(alertActions.clear());
                    }, 1500);
                },
                error => {
                    dispatch(failure(employeeConstants.GET_EMPLOYEES_FAILURE, error.toString()));
                    console.log("occure error");
                    console.log(error.toString());
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

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