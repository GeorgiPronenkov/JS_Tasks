/**
 Write a function which will be given a single number. Your task is to find the sum of its digits.
*/

function solve(number) {

    let numAsString = number.toString();
    let sum = 0;

    for (let i = 0; i < numAsString.length; i++) {
        let digit = Number(numAsString.charAt(i));
        sum += digit;
    }
    console.log(sum);
 }

 solve(245678);
