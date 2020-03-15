/**
 Write a function that orders a given array of strings, by length in ascending order as primary criteria,
 and by alphabetical value in ascending order as second criteria. The comparison should be case-insensitive.
 The input comes as an array of strings.
 The output is the ordered array of strings.
*/

function sortBy2Criteria(arr) {

    arr.sort((a, b) => {
        return a.length - b.length ||
               a.localeCompare(b); //първо по дължина, после азбучно
    }).forEach(x => console.log(x));
}

sortBy2Criteria(
    ['Isacc',
     'Theodor',
     'Jack',
     'john',
     'Harrison',
     'George',
     'Smith'
    ]
);
