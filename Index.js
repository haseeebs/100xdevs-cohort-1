const sum = (firstNumber, secondNumber) => (
    firstNumber + secondNumber
)

function doArthmetic(first, second, arthmeticFunction) {
    return arthmeticFunction(first, second);
}

const result = doArthmetic(5, 5, sum);

console.log(result)