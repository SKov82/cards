import {Dispatch} from 'redux';
import {API} from '../api/api';

export type CardsInitStateType = {}
const cardsInitState: CardsInitStateType = {}
export const cardsReducer = (state: CardsInitStateType = cardsInitState, action: CardsActionType): CardsInitStateType => {
    switch (action.type) {
        case '':
            return {...state}
        default:
            return state
    }
}
export type CardsActionType = ReturnType<typeof cards>

export const cards = () => ({type: ''} as const)

export const getCards = () => {
    return (dispatch: Dispatch) => {
    }
}