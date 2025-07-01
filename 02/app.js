const randomArray = createRandomArray();
console.log(randomArray);

for (let a of randomArray) {
    console.log(a);
}

randomArray.forEach(function (a) {
    console.log(a);
})

const lastNumber = randomArray[randomArray.length - 1];
console.log(lastNumber);


// nie modyfikuj kodu poniżej!

// funkcję może deklarować poniżej wywołania
// ponieważ w JS występuje mechanizm tzw. hoisting-u

function createRandomArray() {
    const arr = [];
    const len = getRandomInteger(1, 10)
    for (let i = 0; i < len; i++) {
        arr.push(getRandomInteger(1, 100));
    }

    return arr;
}

function getRandomInteger(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}