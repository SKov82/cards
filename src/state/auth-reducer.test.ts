import {auth, AuthInitStateType, authReducer} from './auth-reducer';

let startState: AuthInitStateType
beforeEach(() => {
    startState = {}
})

test('auth test', () => {
    const endState = authReducer(startState, auth())

    expect(endState).toBe(startState)
})