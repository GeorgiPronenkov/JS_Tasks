function solve() {

    const text = document.getElementById("text")
                         .value; //взема Input-a
    const parts = text.split(' '); //взема думите
    let words = ''; //string
    let numbers = ' ';

    parts.forEach(part => {
        if (isNaN(+part)) { //not a number
           words += [...part]
                    .map(ch => ch.charCodeAt(0))
                    .join(' ');
           words += '\n';
        }else {
            const number = +part;
            numbers += String.fromCharCode(+part);
        }
    });

    console.log(words);
    console.log(numbers);
}
