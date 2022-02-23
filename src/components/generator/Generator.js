import { uppercase, lowercase, numbers, symbols } from "../../data/letters";


export function generatePassword(length) {
    let alfabet = uppercase.concat(lowercase).concat(numbers).concat(symbols);

    let result = '';
    for (let i = 0; i < length; i++) {
        let char = alfabet[Math.floor(Math.random() * (alfabet.length - 1))]
        result += char;
    }
    return result;
}