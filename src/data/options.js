
const choices = [
    { id: 1, item: 'Easy to say', checked: false },
    { id: 2, item: 'Easy to read', checked: false },
    { id: 3, item: 'All characters', checked: true }
];

const variations = [
    { id: 1, item: 'Uppercase', checked: false },
    { id: 2, item: 'Lowercase', checked: true },
    { id: 3, item: 'Numbers', checked: false },
    { id: 4, item: 'Symbols', checked: true }
];

const actions = {
    setLength: 'SET_LENGTH',
    setPassword: 'SET_PASSWORD',
    updatePassword: 'UPDATE_PASSWORD',
}

export {choices as Choices, variations as Variations, actions};