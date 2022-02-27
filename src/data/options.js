
const choices = [
    { id: 1, item: 'Easy to say', checked: false, explanation: 'Avoid numbers and special characters' },
    { id: 2, item: 'Easy to read', checked: false, explanation: 'Avoid ambiguous characters like l, 1, O, and 0'},
    { id: 3, item: 'All characters', checked: true, explanation: 'Any character combinations like !, 7, h, K, and l1'}
];

const variations = [
    { id: 1, item: 'Uppercase', checked: true },
    { id: 2, item: 'Lowercase', checked: true },
    { id: 3, item: 'Numbers', checked: true },
    { id: 4, item: 'Symbols', checked: true }
];

const actions = {
    setLength: 'SET_LENGTH',
    setPassword: 'SET_PASSWORD',
    updatePassword: 'UPDATE_PASSWORD',
    setChoice: 'UPDATE_CHOICE',
}

export {choices as Choices, variations as Variations, actions};