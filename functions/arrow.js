const n1 = 7;
const n2 = 5;

// Function declaration 
// (standartine function sintakse)
function sum(a, b) {
    return a + b;
}
console.log(`${n1} + ${n2} = ${sum(n1, n2)}`);

// Kintamajam priskiriame anonimine funkcija
const diff = function (a, b) {
    return a - b;
}
console.log(`${n1} - ${n2} = ${diff(n1, n2)}`);

// arrow function
const multiply = (a, b) => {
    return a * b;
}
console.log(`${n1} * ${n2} = ${multiply(n1, n2)}`);

// arrow function
// jeigu, logikos bloke yra TIK 1 salyga (statement)
// tai galima nerasyti: {, return, }
const div = (a, b) => a / b;
console.log(`${n1} / ${n2} = ${div(n1, n2)}`);

// arrow function
// jeigu, parametru bloke yra TIK 1 parametas
// tai galima nerasyti: (, )
const cube = a => a ** 3;
console.log(`${n1} ** 3 = ${cube(n1)}`);
console.log(`${n2} ** 3 = ${cube(n2)}`);


const formatName = s => s[0].toUpperCase() + s.slice(1).toLowerCase();

console.log(formatName('jonas'), '->', 'Jonas');
console.log(formatName('oNA'), '->', 'Ona');
console.log(formatName('PeTrAs'), '->', 'Petras');
console.log(formatName('Maryte'), '->', 'Maryte');

console.log('------------------');

const abbbbr = fullname => {
    const words = fullname.split(' ');
    let result = '';

    for (const word of words) {
        result += `${word[0]}.`;
    }

    return result;
}

console.log(abbbbr('Chuck Norris'));
console.log(abbbbr('Pamela Anderson'));
console.log(abbbbr('David Haselhofas'));
console.log(abbbbr('Zan Klod Van Dam'));