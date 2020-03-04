let strArray = "StackOverflow".split("");
// strArray = ["S", "t", "a", "c", "k", "O", "v", "e", "r", "f", "l", "o", "w"]

//Using the spread operator (...), to convert a string into an array.
let strArray = [..."sky is blue"];
// strArray = ["s", "k", "y", " ", "i", "s", " ", "b", "l", "u", "e"]

let deeplyNested = [4,[5,6,[7,8],9]];
const flatten = deeplyNested
 				.toString()
 				.split(',')
 				.map(Number); //=> [4,5,6,7,8,9]


