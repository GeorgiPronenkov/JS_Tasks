/**
 The input is an array of strings. Each string represents one order with different parts, separated by a single space  ' '.
 • The first part is the coins inserted.
 • The second is the type of drink (coffee or tea).
 • Next, if the drink type is coffee, you will receive 'caffeine' or 'decaf'.
 • Next, you may receive 'milk', if the ordered drink is with milk. It costs 10% of the drink price, rounded to first decimal point
 • And last you receive the quantity of sugar, between 0 and 5. No matter the quantity (except from 0) it costs 0.10.
 Add the sugar at the end!
 Constrains
 • The input will always be valid.
 Output
 For each order there are two possible outputs:
 • If the money inserted is enough, calculate the change of the order:
 'You ordered {drink}. Price: {price}$ Change: {change}$'
 • If the money is not enough:
 'Not enough money for {drink}. Need {moneyNeeded}$ more'

 After proceeding all orders, print the total money earned from the successful orders in the format:
 'Income Report: {totalMoney}$'
 All of the numbers should be formatted to the second decimal point.
*/

function solve(arr) {
    let totalMoney = 0;
    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(', ');

        let price = 0;
        let coinsInserted = +tokens[0];
        let typeOfDrink = tokens[1];

        if (typeOfDrink === 'coffee') {
            if (tokens[2] === 'caffeine') {
                price = 0.8;
            }else if (tokens[2] === 'decaff') {
                price = 0.9;
            }
        }else if (typeOfDrink === 'tea') {
            price = 0.8;
        }

        if (tokens.includes("milk")) {

        }
        let sugar = tokens[tokens.length -1];
    }
}
