import {cards, CardsInitStateType, cardsReducer} from './cards-reducer';


let startState: CardsInitStateType
beforeEach(() => {
    startState = {}
})

test('cards test', () => {
    const endState = cardsReducer(startState, cards())

    expect(endState).toBe(startState)
})