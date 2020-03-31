/**
 Write a function that determines if there exists an element in the array of numbers such
 that the sum of the elements on its left is equal to the sum of the elements on its right.
 If there are NO elements to the left/right, their sum is 0.
 Print the index that satisfies the required condition or "no" if there is no such index.
*/

function solve(array) {
   let indexOfElement = -1;  // когато елемента не същ. в масива

   for (let i = 0; i < array.length; i++) {
      let leftSum =  0;
      let rightSum = 0;

      for (let j = i - 1; j >=0 ; j--) { //от ляво на елемeнта
         leftSum += array[j];
      }

      for (let j = i+1; j < array.length; j++) { //от дясно
         rightSum += array[j];
      }
      
      if (leftSum === rightSum) {
         indexOfElement = i; 
      }
   }
   
   if (indexOfElement !== -1) {
       console.log(indexOfElement);
   }else {
       console.log('no!');
   }
}

solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
