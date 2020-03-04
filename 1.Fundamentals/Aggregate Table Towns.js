/**
You will be given a list of towns and incomes for each town, formatted in a table, separated by pipes (|).
 Write a JS function that extracts the names of all towns and produces a sum of the incomes.
 Note that splitting may result in empty string elements and the number of spaces may be different in every table.
The input comes as array of string elements. Each element is one row in a formatted table.
The output is printed on the console on two lines.
 On the first line, print a comma-separated list of all towns and on the second, the sum of all incomes.
*/

function aggregate(inputArr) {

	let sum = 0;
	let listTowns = [];

	inputArr = inputArr.filter(el => el !== '');
	for (let townInfo of inputArr) {
	    let townData = townInfo.split('|');
	    let townName = townData[1].trim();
	    let townIncome = Number(townData[2].trim());
	    listTowns.push(townName);
	    sum += townIncome;
	}
	console.log(listTowns.join(','));
	console.log(`Total income: ${sum}`);
}
aggregate(['| Sofia | 300','| Veliko Tarnovo | 500','| Yambol | 275']);