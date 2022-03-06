import { actions, Variations } from "../data/options";

const defaultState = {
    password: '',
    length: 7,
    needUpdate: false,
    choice:
    {
        id: 3,
        item: 'All characters',
        checked: true,
        explanation: 'Any character combinations like !, 7, h, K, and l1'
    },
    variation: [
        { id: 1, item: 'Uppercase', checked: true },
        { id: 2, item: 'Lowercase', checked: true },
        { id: 3, item: 'Numbers', checked: true },
        { id: 4, item: 'Symbols', checked: true }
    ],
}

const variations = [
    [1, 2],
    [1, 2, 3],
    [1, 2, 3, 4]
];

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case actions.setLength:
            let value = action.payload;
            if (value > 30) value = 30;
            return { ...state, length: value };
        case actions.setPassword:
            return { ...state, password: action.payload };
        case actions.updatePassword:
            return { ...state, needUpdate: action.payload };
        case actions.setChoice:
            let option = action.payload;
            let vars = state.variation.map((elem) => {
                if (variations[Number(option.id) - 1].includes(elem.id)) {
                    elem.checked = true;
                }
                else {
                    elem.checked = false;
                }
                return elem;
            });
            return { ...state, choice: option, variation: vars};
        case actions.addVariation:
            return { state };
        case actions.removeVariation:
            return { state };

        default:
            return state;
    }
}