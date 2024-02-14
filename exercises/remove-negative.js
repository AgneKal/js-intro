const x = '10, 2, -8, 4, 6';
// Susumuoti masyve esančius teigiamus skaičius

const a1 = [10, 2, 8, 4, 6];
const a2 = [-10, 2, 8, 4, 6];
const a3 = [-10, -2, -8, -4, -6];

function removeNegative(list) {
    let result = 0;

    for (const number of list) {
        if (number > 0) {
            result += number
        }
    }
    return result;
}

console.log(removeNegative(a1));
console.log(removeNegative(a2));
console.log(removeNegative(a3));