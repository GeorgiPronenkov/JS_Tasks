/**
 Write a function that receives two characters and prints on a single line all the characters in between them
 according to the ASCII code. Keep in mind that the second character code might be before the first one inside the ASCII table.
*/

function solve(char1, char2) {
   let code1 = char1.charCodeAt(0);
   let code2 = char2.charCodeAt(0);

   let begin = Math.min(code1, code2);
   let end = Math.max(code1, code2);

   let chars = [];
   for (let i = begin +1; i < end; i++) {
      let currChar = String.fromCharCode(i);
      
      chars.push(currChar);  //добавя в масива
   }
   console.log(chars.join(' '));
}

solve('C', '#');
