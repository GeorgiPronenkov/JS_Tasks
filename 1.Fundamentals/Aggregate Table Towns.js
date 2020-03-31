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