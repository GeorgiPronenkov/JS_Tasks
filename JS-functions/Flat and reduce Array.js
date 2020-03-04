const matrix = [[1,1], [1,[[[[[[1]]]]]]]];
let total = matrix
            .flat(Infinity)
            .reduce((acc, v) => acc + v, 0);

console.log(total);
