import { employeeConstants } from '../constants'

const initialState = {
    loading: false,
    employees: [],
    employee: {}
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

export function addEmployee(state = {}, action) {
    switch (action.type) {
        case employeeConstants.ADD_PRODUCT_REQUEST:
            return {
                ...state, 
                loading: true,
            }
        case employeeConstants.ADD_PRODUCT_SUCCESS: 
            return {
                ...state,
                loading: false,
                employee: action.data
            }
        case employeeConstants.ADD_PRODUCT_FAILURE:
            return {
                err: action.error
            }
        default:
            return state;
    }
}