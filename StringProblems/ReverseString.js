/**
 * Given an string, reverse it.
 * Example: If string, 'Hello', after reversing it, the string should be,'olleH' .
 */

let stringValue = 'Hello my name is rohan rawal';

let reverseString = (stringValue)=> {
    let reversedString = new String();
    if (stringValue.length === 0 || stringValue.trim().length === 0) {
        return new Error('Given String is Empty :: 😠');
    }
    for (let index = stringValue.length -1; index >= 0; index--) {
        reversedString += stringValue[index];
    }

    return reversedString;
}
let reverseStringvalue = reverseString(stringValue);

console.log(`Original String Value is :: ${stringValue} and Reversed Sting Value is :: ${reverseStringvalue} ❤️ ❤️ ❤️`);