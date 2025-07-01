const numbers = [1, 2, 3, 4, 5, 6, 7];

const evenNumbers = numbers.filter(num => num % 2 === 0);

const sum = evenNumbers.reduce((acc, curr) => acc + curr, 0);

console.log(sum);