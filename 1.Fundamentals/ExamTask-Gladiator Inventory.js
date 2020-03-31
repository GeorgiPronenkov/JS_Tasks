/**
 You are given Peter’s inventory with all of his equipment -> strings, separated by whitespace.
 You may receive the following commands:
 • Buy {equipment}
 • Trash {equipment}
 • Repair {equipment}
 • Upgrade {equipment}-{upgrade}
 If you receive Buy command, you should add the equipment at last position in the inventory,
 but only if it isn't bought already.
 If you receive Trash command, delete the equipment if it exists.
 If you receive Repair command, you should repair the equipment if it exists and place it on last position.
 If you receive Upgrade command, you should check if the equipment exists and insert after it the upgrade in the
 following format: "{equipment}:{upgrade}";
 Input / Consrtaints
 You will receive an array of strings. Each element of the array is a command.
 • In the first input element, you will receive Peter's inventory – sequence of equipment names, separated by space.
 Output
 As output you must print Peter's inventory.
 Constraints
 • The command will always be valid.
 • The equipment and Upgrade will be strings and will contain any character, except '-'.
*/

function solve(input) {
   let inventory = input.shift().split(' '); // SWORD Shield Spear
   input.forEach((line) => {
       let [ command, equipment ] = line.split(' ');
       // let args = line.split(' ');
       // let comand = args[0];
       // let equipment = args[1];
       let indexOfEquipment = inventory.indexOf(equipment);

       if (command === 'Buy' && indexOfEquipment === -1) {
          inventory.push(equipment);
       }else if (command === 'Trash' && indexOfEquipment !== -1) {
           inventory.splice(indexOfEquipment, 1);
       }else if (command === 'Repair' && indexOfEquipment !== -1) {
           inventory.splice(indexOfEquipment, 1); //изтрива го от позиц.на която се намира
           inventory.push(equipment);
       }else if (command === 'Update') {
           let args = equipment.split('-');
           equipment = args[0];
           let upgrade = args[1];
           
           if (indexOfEquipment !== -1) {
               inventory.splice(indexOfEquipment +1,0, `${equipment}:${upgrade}`);
           }
       }
   });
   
   console.log(inventory.join(' '));
}

solve(
    [
       'SWORD Shield Spear',
       'Trash Bow',
       'Repair Shield',
       'Upgrade Helmet-V'
    ]
);
