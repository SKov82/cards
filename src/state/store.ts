import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {authReducer} from './auth-reducer';
import {cardsReducer} from './cards-reducer';

const rootReducer = combineReducers({
    auth: authReducer,
    cards: cardsReducer,
})
export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

// @ts-ignore
window.state = store.getState()