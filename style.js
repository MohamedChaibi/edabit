// 1- Write a JavaScript program to check whether the given argument is a string.
const isString = arg => typeof arg === 'string';
console.log(isString('Hello'));  // true

// 2- 2- Write a JavaScript program to reverse the order of the characters in the string.
const reverseString = str => str.split('').reverse().join('');
console.log(reverseString('Hello'));  // 'olleH'

// 3- Write a JavaScript program to get the last element from a given array.
const lastElement = arr => arr[arr.length - 1];
console.log(lastElement([1, 2, 3, 4]));  // 4

// 4- Write a JavaScript program to check if a given string is upper case or not.
const isUpperCase = str => str === str.toUpperCase();
console.log(isUpperCase('HELLO'));  // true
console.log(isUpperCase('Hello'));  // false

// 5- Write a JavaScript program that will return true if the specified value is undefined, false otherwise.
const isUndefined = value => value === undefined;
console.log(isUndefined(undefined));  // true
console.log(isUndefined(null));       // false
console.log(isUndefined(5));          // false

// 6- Write a JavaScript program that will return true if the given number is even, false otherwise.
const isEven = num => num % 2 === 0;
console.log(isEven(10));  // true
console.log(isEven(11));  // false