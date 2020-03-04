const nums = [1,2,3];
const strs = ['one','two','three'];
const mapped = nums.map((val, index) => [ val, strs[index]]);

console.log(mapped); //[1, "one", 2, "two", 3, "three"] - flatMap
console.log(mapped); //[ [ 1, 'one' ], [ 2, 'two' ], [ 3, 'three' ] ] - flat
