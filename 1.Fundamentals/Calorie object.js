/**
 Write a JS function that composes an object by given properties.
 Every even index of the array is the string and the name of the food.
 Every odd index is a number that is equal to the calories in 100 grams of product.
 Assign each value to its respective property of an object and print it on the console.
 The input comes as an array of string elements.
*/

function solve(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i+=2) {
        let objKey = arr[i];
        let objValue = arr[i+1];

        obj[objKey] = objValue;
    }
    console.log(obj);
}

solve(['Potato', 93, 'Skyr', 63, 'Cucumber', 18, 'Milk', 42]);
