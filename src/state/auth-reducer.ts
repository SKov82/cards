import {Dispatch} from 'redux';
import {API} from '../api/api';

export type AuthInitStateType = {}
const authInitState: AuthInitStateType = {}
export const authReducer = (state: AuthInitStateType = authInitState, action: AuthActionType): AuthInitStateType => {
    switch (action.type) {
        case '':
            return {...state}
        default:
            return state
    }
}
export type AuthActionType = ReturnType<typeof auth>

export const auth = () => ({type: ''} as const)

export const authMe = () => {
    return (dispatch: Dispatch) => {
    }
}