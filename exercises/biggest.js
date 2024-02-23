function biggest(list) {
    if (!Array.isArray(list)) {
        return 'ERROR: duok masyva';
    }
    if (list.length === 0) {
        return 'ERROR: tuscias masyvas';
    }

    let biggestNumber = -Infinity;

    for (const number of list) {
        if (typeof number !== 'number' || !isFinite(number)) {
            continue;
        }
        if (number > biggestNumber) {
            biggestNumber = number;
        }
    }

    if (biggestNumber === -Infinity) {
        return 'ERROR: masyve nerasta nei vieno normalaus skaiciaus';
    }

    return biggestNumber;
}

// console.log(biggest('pomidoras'));
// console.log(biggest(2154));
// console.log(biggest(true));
// console.log(biggest(biggest));
// console.log(biggest(null));
// console.log(biggest({}));
// console.log(biggest());
// console.log(biggest(undefined));
// console.log(biggest([]));

console.log(biggest([1]), '-->', 1);
console.log(biggest([1, 2, 3]), '-->', 3);
console.log(biggest([-5, 78, 14, 0, 18]), '-->', 78);
console.log(biggest([69, 69, 69, 69, 66]), '-->', 69);
console.log(biggest([-1, -2, -3, -4, -5, -6, -7, -8]), '-->', -1);

console.log(biggest([-5, 78, 14, 0, 18, Infinity]), '-->', 78);
console.log(biggest([-5, 78, Infinity, 14, 0, 18]), '-->', 78);
console.log(biggest([Infinity, -5, 78, 14, 0, 18]), '-->', 78);

console.log(biggest([-1, -2, -3, -4, true]), '-->', -1);
console.log(biggest([-1, -2, true, -3, -4]), '-->', -1);
console.log(biggest([true, -1, -2, -3, -4]), '-->', -1);

console.log(biggest([-1, -2, -3, -4, false]), '-->', -1);
console.log(biggest([-1, -2, false, -3, -4]), '-->', -1);
console.log(biggest([false, -1, -2, -3, -4]), '-->', -1);

console.log(biggest([-1, -2, -3, -4, '']), '-->', -1);
console.log(biggest([-1, -2, '', -3, -4]), '-->', -1);
console.log(biggest(['', -1, -2, -3, -4]), '-->', -1);

console.log(biggest([-1, -2, -3, -4, 'labas']), '-->', -1);
console.log(biggest([-1, -2, 'labas', -3, -4]), '-->', -1);
console.log(biggest(['labas', -1, -2, -3, -4]), '-->', -1);

console.log(biggest(['labas', true, biggest, {}, null, undefined]));