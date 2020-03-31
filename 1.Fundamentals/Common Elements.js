/**
 Write a function, which prints common elements in two string arrays.
 Print all matches on separate lines. 
 Compare the first array with the second array.
*/

function solve(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        let currentEl = arr1[i];

        for (let j = 0; j < arr2.length; j++) {
            let nextEl = arr2[j];
            
            if (currentEl === nextEl) {     //сравняваме 2-та елемента
                console.log(currentEl);
            }
        }
    }        
}

solve(['Hey', 'hello', 2, 4, 'Peter', 'e'],
      ['Petar', 10, 'hey', 4, 'hello', '2']);
