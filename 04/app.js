const years = [1980, 1934, 2002, 2019];

function countYears(year) {
    return 2025 - year;
}

const countedYears = years.map(countYears);

console.log(countedYears);