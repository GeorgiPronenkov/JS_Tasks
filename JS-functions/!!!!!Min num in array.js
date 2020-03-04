function min(arr) {
  return arr.reduce((a, b) => a < b ? a:b)
}
console.log(min([4, 2, 1, -13, 9])); //-13
