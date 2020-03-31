/**
 Write a function that composes an object by given properties. 
 The input comes as an array of strings. Every even index of the array represents the name of the food. 
 Every odd index is a number that is equal to the calories in 100 grams of the given product. 
 Assign each value to its corresponding property and print it on the console.
 The input comes as an array of string elements
*/

function calories(input) {
    let obj = {};
    for (let i = 0; i < input.length; i+=2) {
        obj[input[i]] = +input[i + 1];
    }
    console.log(obj);
}

calories(['Potato', 93, 'Skyr', 63, 'Cucumber', 18, 'Milk', 42]);
