const sum = (firstNumber, secondNumber) => (
    firstNumber + secondNumber
)

function doArthmetic(first, second, arthmeticFunction) {
    return arthmeticFunction(first, second);
}

const result = doArthmetic(5, 5, sum);



const createPattern = (numberOfrows) => {
    let starts = ''
    for(let i = 0; i < numberOfrows; i++){
        starts = '*' + starts
        console.log(starts);
    }
}

function printPyramid(height) {
    for (let i = 1; i <= height; i++) {
        let row = '';
        // Adding spaces before the stars
        for (let j = 0; j < height - i; j++) {
            row += ' ';
        }
        // Adding stars
        for (let k = 0; k < 2 * i - 1; k++) {
            row += '*';
        }
        console.log(row);
    }
};

printPyramid(5);
createPattern(6);