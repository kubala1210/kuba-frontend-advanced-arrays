const n = 0;

const allNumbers = [];

for (let a = 0; a < n; a++) {
    allNumbers.push(a);
}

const oddNumbers = getOddNumbers(allNumbers);

console.log(allNumbers);
console.log(oddNumbers);

function getOddNumbers(arr) {
    const oddNumbers = [];
    for (let i = 0; i < n; i++) {
        if (arr[i] % 2 === 1) {
            oddNumbers.push(arr[i]);
        }
    }
    return oddNumbers
}

