import { employeeConstants } from '../constants'

const initialState = {
    loading: false,
    employees: [],
    employee: {},
    editEmployee: {}
}

export function getEmployees(state = initialState, action) {
    switch (action.type) {
        case employeeConstants.GET_EMPLOYEES_REQUEST:
            return {
                ...state, 
                loading: true,
            }
        case employeeConstants.GET_EMPLOYEES_SUCCESS: 
            return {
                ...state,
                loading: false,
                employees: action.data
            }
        case employeeConstants.GET_EMPLOYEES_FAILURE:
            return {
                err: action.err
            }
        default:
            return state;
    }
}

export function addEmployee(state = initialState, action) {
    switch (action.type) {
        case employeeConstants.ADD_EMPLOYEE_REQUEST:
            return {
                ...state, 
                loading: true,
            }
        case employeeConstants.ADD_EMPLOYEE_SUCCESS: 
            return {
                ...state,
                loading: false,
                employee: action.data
            }
        case employeeConstants.ADD_EMPLOYEE_FAILURE:
            return {
                loading: false,
                err: action.error
            }
        default:
            return state;
    }
}

export function editEmployee(state = initialState, action) {
    switch (action.type) {
        case employeeConstants.EDIT_PRODUCT_REQUEST:
            return {
                ...state, 
                loading: true,
            }
        case employeeConstants.EDIT_PRODUCT_SUCCESS: 
            return {
                ...state,
                loading: false,
                editEmployee: action.data
            }
        case employeeConstants.EDIT_PRODUCT_FAILURE:
            return {
                err: action.error
            }
        default:
            return state;
    }
}