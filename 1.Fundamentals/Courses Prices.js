/**
 Write a function to calculate the right price for the signed-up courses.
 The available courses are:
 • JS Fundamentals - 170 BGN
 • JS Advanced - 180 BGN
 • JS Applications - 190 BGN
 The offered education forms are onsite and online.
 Fortunately, there are some cases where students receive a discount:
 • If JS Advanced is combined with JS Fundamentals, the student receives a 10% discount on JS Advanced
 • If all three courses are selected (JS Fundamentals, JS Advanced and JS Applications), students receive a module discount
 - 6% on the module's total price
 • Students also get a discount if their education form is online - 6% on all courses
 Constraints
 • If the discounts are more than one, they must be applied in the order they are described above.
 Input
 The function receives 4 arguments.
 • The first 3 arguments will be boolean values (true/false) representing the sign-up status for each of the courses in
 specific order: Fundamentals, Advanced, Applications
 • The last one (4th argument) will be a string representing the education form (online/onsite)
 Output
 • Number that represent the total price for all signed-up courses received from the input
 • That number must be rounded to the closest integer
*/

function solve(Fundamentals, Advanced, Applications, form) {

    //object courses
   const courses = {  //обект
       'JS Fundamentals' : 170,
       'JS Advanced' : 180,
       'JS Application' :190
   };
   let total = 0;

   if (Fundamentals) {
        total += courses['JS Fundamentals'];
   }
   if (Advanced) {
        total += courses['JS Advanced'];
   }
   if (Applications) {
        total += courses['JS Application'];
   }

   if (Fundamentals && Advanced) {
       total -= courses['JS Advanced'] * 0.1;
   }
   if (Fundamentals && Advanced && Applications) {
       total *= 0.94;
   }
   if (form === 'online') {
       total *= 0.94;
   }

   console.log(Math.round(total));
}

solve(true, true, false, "onsite");
