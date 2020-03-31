/**
 Write a program that receives a number and a list of five operations. 
 Perform the operations sequentially by starting with the input number and using the result of every operation 
 as starting point for the next one. Print the result of every operation in order. The operations can be one of the following:
 • chop - divide the number by two
 • dice - square root of number
 • spice - add 1 to number
 • bake - multiply number by 3
 • fillet - subtract 20% from number
 The input comes as an array of 6 string elements. The first element is the starting point and must be parsed to a number. 
 The remaining 5 elements are the names of the operations to be performed.
*/

function cook(input) {
    let number = +input[0]; //идва като стринг и го преобразв. число
    for (let i = 1; i < input.length; i++) { //0-инд е взет , и започваме от 1
        let command = input[i];
        
        switch (command) {
            case 'dice':
                number = Math.sqrt(number);
                break;
            case 'spice':
                number += 1; //++number
                break;
            case "chop":
                number /= 2;
                break;
            case 'bake':
                number *= 3;
                break;
            case 'fillet':
                number *= 0.8;
                break;
            default:
                break;
        }
        console.log(number);
    }
}

cook(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);
