import { employeeConstants } from '../constants'

const initialState = {
    loading: false,
    employees: []
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