/**
 Your task is to write the management software for a breakfast chef robot – it needs to take orders,
 keep track of available ingredients and output an error if something’s wrong.
 Someone else has already installed the cooking instructions, so your module needs to plug into the system and only take care of
 orders and ingredients. And since this is the future and food is printed with nano-particle beams,
 all ingredients are microelements – protein, carbohydrates, fat and flavours.
 The library of recipes includes the following meals:
 • Apple – made with 1 carb and 2 flavour
 • Coke – made with 10 carb and 20 flavour
 • Burger – made with 5 carb, 7 fat and 3 flavour
 • Omelet – made with 5 protein, 1 fat and 1 flavour
 • Cheverme – made with 10 protein, 10 carb, 10 fat and 10 flavour
 The robot receives instructions either to restock the supply, cook a meal or report statistics.
 The input consists of one of the following commands:
 • restock <microelement> <quantity> – increases the stored quantity of the given microelement
 • prepare <recipe> <quantity> – use the available ingredients to prepare the given meal
 • report – return information about the stored microelements, in the order described below, including zero elements
 The robot is equipped with a quantum field storage, so it can hold an unlimited quantity of ingredients,
 but there is no guarantee there will be enough available to prepare a recipe, in which case an error message should be returned.
 Their availability is checked in the order in which they appear in the recipe,
 so the error should reflect the first requirement which wasn’t met.
 Submit a closure that returns the management function. The management function must take one parameter.
 Input
 Instructions are passed as a string argument to your management function. It will be called several times per session,
 so internal state must be preserved throughout the entire session.
 Output
 The return value of each operation is one of the following strings:
 • Success – when restocking or completing cooking without errors
 • Error: not enough <ingredient> in stock – when the robot couldn’t muster enough microelements
 • protein={qty} carbohydrate={qty} fat={qty} flavour={qty} – when a report is requested, in a single string
*/

let manager = (function () {
    const ingredientObj = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    const recipesObj = {
        'apple': { carbohydrate: 1, flavour: 2 },
        'coke': { carbohydrate: 10, flavour: 20 },
        'burger': { carbohydrate: 5, fat: 7, flavour: 3 },
        'omelete': {protein: 10, fat: 1, flavour: 1},
        'cheverme': {protein: 10, carbohydrate: 10,  fat: 10, flavour: 10}
    };

    const prepareRecipe = (recipe, neededQuantity) => {
        const neededIngredients = Object.entries(recipesObj[recipe]); //масив от масиви

        //validate needed ingredients
        for (const [ing, qty] of neededIngredients) {
            const ingredientStored = ingredientObj[ing] * neededQuantity;
            if (qty > ingredientStored) {
                return `Error: not enough ${ing} in stock`;
            }
        }

        for (const [ing, qty] of neededIngredients) {
            ingredientObj[ing] -= neededQuantity * qty;
        }

        return 'Success~!!!';
    };

   return function (input) {
        const args = input.split(' ');
        const command = args[0];

        switch (command) {
            case 'restock':
                ingredientObj[args[1]] += Number(args[2]);
                return 'success';
            case 'prepare':
                return prepareRecipe(args[1], Number(args[2]));
            case 'report':
                return Object.entries(ingredientObj)
                             .map((kvp) => `${kvp[0]}=${kvp[1]}`)
                             .join(' ');
        }
   }
})();

console.log(manager("prepare coke 4"));
