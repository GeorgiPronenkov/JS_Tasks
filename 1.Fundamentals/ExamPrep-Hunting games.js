/**
 Write a program that calculates the needed provisions for a quest in the woods.
 First you will receive the days of the adventure, the count of the players and the group’s energy.
 Afterwards, you will receive the following provisions per day for one person:
 • Water
 • Food
 The group calculates how many supplies they’d need for the adventure and take that much water and food.
 Every day they chop wood and lose a certain amount of energy.
 For each of the days, you are going to receive the energy loss from chopping wood.
 The program should end If the energy reaches 0 or less.
 Every second day they drink water, which boosts their energy with 5% of their current energy and at the same time drops their
 water supplies by 30% of their current water.
 Every third day they eat, which reduces their food supplies by the following amount:
 {currentFood} / {countOfPeople} and at the same time raises their group’s energy by 10%.
 The chopping of wood, the drinking of water, and the eating happen in the order above.
 If they have enough energy to finish the quest, print the following message:
 "You are ready for the quest. You will be left with - {energyLevel} energy!"
 If they run out of energy print the following message and the food and water they were left with before they ran out of energy:
 "You will run out of energy. You will be left with {food} food and {water} water."
 Input / Constraints
 • On the 1st line, you are going to receive a number N - the days of the adventure – an integer in the range [1…100]
 • On the 2nd line – the count of players – an integer in the range [0 – 1000]
 • On the 3rd line - the group’s energy – a real number in the range [1 - 50000]
 • On the 4th line – water per day for one person – a real number [0.00 – 1000.00]
 • On the 5th line – food per day for one person – a real number [0.00 – 1000.00]
 • On the next N lines – one for each of the days – the amount of energy loss– a real number in the range [0.00 - 1000]
 • You will always have enough food and water.
 Output
 • "You are ready for the quest. You will be left with - {energyLevel} energy!" –
 if they have enough energy
 "You will run out of energy. You will be left with {food} food and {water} water."
 • All of the real numbers should be formatted to the second digit after the decimal separator
*/

function solve(input) {
    //inputs
    let days = Number(input.shift());
    let playersCount = Number(input.shift());
    let groupEnergy = Number(input.shift());
    let waterPerPerson = Number(input.shift());
    let foodPerPerson = Number(input.shift());

    let totalWaterNeeded = days * playersCount * waterPerPerson;
    let totalFoodNeeded = days * playersCount * foodPerPerson;

    let consumedEnergy = input.map(Number);

    for (let day = 1; day <= days; day++) {
        let enrg = consumedEnergy.shift(); //взема тек.енергия
        groupEnergy -= enrg;

        if (groupEnergy <= 0) {
           break;
        }

        if (day % 2 === 0) {
            groupEnergy *= 1.05;
            totalWaterNeeded *= 0.7;
        }

        if (day % 3 === 0) {
            groupEnergy *= 1.1;
            totalFoodNeeded -= (totalFoodNeeded / playersCount);
        }

        if (groupEnergy <= 0) {
            console.log(`You will run out of energy. You will be left with 
                        ${totalFoodNeeded.toFixed(2)} food and ${totalWaterNeeded.toFixed(2)} water.`);
        }else {
            console.log(`You are ready for the quest. You will be left with - ${groupEnergy.toFixed(2)} energy!`);
        }
    }
}

solve(
    [
    '10',
    '7',
    '5035.5',
    '11.3',
    '7.2',
    '942.3',
    '500.57',
    '520.68',
    '540.87',
    '505.99',
   ' 630.3',
   ' 784.20',
    '321.21',
    '456.8',
    '330',
     ''
    ]
);
