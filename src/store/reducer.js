import { actions } from "../data/options";

const defaultState = {
    password: 'pass',
    length: 4,
    choice: { id: 3, item: 'All characters', checked: true },
    variationId: [1, 2, 3, 4],
}

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case actions.setLength: 
            return {...state, length: action.payload};
        case actions.setPassword:
            return {...state, password: action.payload};

        default:
            return state;
    }
}