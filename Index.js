const printSingleFullRow = (number) => {
    let row = '';
    for (i = 0; i < number; i++) {
        row = row + '*'
    }
    console.log(row);
}

const printGapBetweenStars = (number) => {
    let row = '*'
    for (let i = 0; i < number - 2; i++) {
        row += ' ';
    }
    row += '*'
    console.log(row);
}

const printThem = (number) => {
        printSingleFullRow(number)
        for (j = 0; j < number - 2; j++) {
            printGapBetweenStars(number)
        }
        printSingleFullRow(number)
}

printThem(10)