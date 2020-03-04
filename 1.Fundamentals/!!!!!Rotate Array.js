/**
 Write a JS function that rotates an array.
 The array should be rotated to the right side, meaning that the last element should become the first, upon rotation.
 The input comes as an array of strings. The last element of the array is the amount of rotation you need to perform.
 The output is the resulted array after the rotations. The elements should be printed on one line, separated by a single space.
 Check if there is a built-in function for inserting elements at the start of the array.
*/

function rotateArray(arr) {

    let rotations = +arr.pop(); //броя ротации

    for (let i = 0; i < rotations % arr.length; i++) { //rotations % arr.length -само колкото ротации са нужни
        let lastElement = arr.pop(); //премахва последния
        arr.unshift(lastElement);   // слага последния най-отпред
    }
    console.log(arr.join(" "));
}

rotateArray(
    ['Banana',
     'Orange',
     'Coconut',
     'Apple',
     '15'
    ]
);
