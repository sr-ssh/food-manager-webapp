import { employeeConstants } from '../constants';
import { employeeService } from '../services';
import { alertActions } from './alertActions';
import { history } from '../helpers';


export const employeeActions = {
    getEmployees,
    addEmployee,
    editEmployee
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

function addEmployee(employee) {
    return dispatch => {
        dispatch(request(employeeConstants.ADD_EMPLOYEE_REQUEST))
        employeeService.addEmployee(employee)
            .then(
                res => {
                    console.log(res)
                    
                    if(res === undefined)
                        dispatch(alertActions.error('ارتباط با سرور برقرار نیست.مجصول شما ثبت نشد'));
                    else if(res.success){
                        console.log("employee added")
                        dispatch(success(employeeConstants.ADD_EMPLOYEE_SUCCESS, employee));
                        dispatch(alertActions.success(res.message));
                        history.go(0)
                    } else if (res.success === false)
                        dispatch(alertActions.error(res.data.message));

                    setTimeout(() => {
                        dispatch(alertActions.clear());
                    }, 1500);
                },
                error => {
                    dispatch(failure(error.toString()));
                    console.log("occure error");
                    console.log(error.toString());
                    dispatch(alertActions.error(employeeConstants.ADD_EMPLOYEE_FAILURE, error.toString()));
                }
            );
    }
}

function editEmployee(employee) {
    return dispatch => {
        dispatch(request(employeeConstants.EDIT_EMPLOYEE_REQUEST))
        employeeService.editEmployee(employee)
            .then(
                res => {
                    console.log(res)
                    
                    if(res === undefined)
                        dispatch(alertActions.error('ارتباط با سرور برقرار نیست.مجصول شما ویرایش نشد'));
                    else if(res.success){
                        console.log("employee edited")
                        dispatch(success(employeeConstants.EDIT_EMPLOYEE_SUCCESS, employee));
                        dispatch(alertActions.success(res.message));
                        history.go(0)
                    } else if (res.success === false)
                        dispatch(alertActions.error(res.data.message));

                    setTimeout(() => {
                        dispatch(alertActions.clear());
                    }, 1500);
                },
                error => {
                    dispatch(failure(error.toString()));
                    console.log("occure error");
                    console.log(error.toString());
                    dispatch(alertActions.error(employeeConstants.EDIT_EMPLOYEE_FAILURE, error.toString()));
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