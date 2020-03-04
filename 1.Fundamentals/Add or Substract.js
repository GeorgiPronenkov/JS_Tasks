/**
 Write a function, which changes the value of odd and even numbers in an array of numbers.
 • If the number is even - add to its value its index position
 • If the number is odd - subtract to its value its index position
 Output
 On the first line print the newly modified array, on the second line print the sum of numbers from the original array,
 on the third line print the sum of numbers from the modified array.
*/

function solve(originalArr) {

   let modifiedArr = [];
   
    for (let i = 0; i < originalArr.length; i++) {
        let currEl = originalArr[i];

        if (currEl % 2 === 0) {
            modifiedArr.push(currEl + i);  // add to its value its index position
        }else {
            modifiedArr.push(currEl - i);
        }
    }
    console.log(modifiedArr);

    let originalArrSum = 0;
    for (let num of originalArr) {
        originalArrSum += num;
    }
    
    let modifiedArrSum = 0;
    for (let num of modifiedArr) {
        modifiedArrSum += num;
    }

    console.log(originalArrSum);
    console.log(modifiedArrSum);
}

solve([5, 15, 23, 56, 35]);
