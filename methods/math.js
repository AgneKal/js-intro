const marks = [10, 2, 8, 4, 6];

const min = Math.min(10, 2, 8, 4, 6);
console.log(min);

const max = Math.max(10, 2, 8, 4, 6);
console.log(max);

const min2 = Math.min(...marks);
console.log(min2);

const max2 = Math.max(...marks);
console.log(max2);

function findMax(list) {
    let maxNumber = list[0];

    for (const number of list) {
        if (number > maxNumber) {
            maxNumber = number;
        }
    }

    return maxNumber;
}

console.log(findMax(marks));
console.log(findMax([1, 2, 3]));
console.log(findMax([1, 2, 33333, 5485, 5]));
console.log(findMax([1, 2, -3]));
console.log(findMax([-1, -2, -3]));

console.clear();

console.log(Math.E);
console.log(Math.PI);
console.log(Math.SQRT2);

console.log(Math.abs(-7777));
console.log(Math.abs(7777));

const x = -7;
const xAbs = x >= 0 ? x : -x;
console.log(xAbs);

console.log(Math.cbrt(8));
console.log(Math.cbrt(27));

console.log(Math.sqrt(4));
console.log(Math.sqrt(81));

console.log(Math.exp(9), Math.E ** 9);

console.log(Math.pow(2, 3), 2 ** 3);
console.log(Math.pow(5, 3), 5 ** 3);

console.log(Math.sign(-7125485));
console.log(Math.sign(74562));
console.log(Math.sign(0));

const y = -215456;
console.log(y > 0 ? 1 : y === 0 ? 0 : -1);

console.clear();

const a = -3.99999;
console.log(Math.ceil(a));  // up
console.log(Math.floor(a)); // down
console.log(Math.round(a)); // 0.5 up; 0.499999 down
console.log(Math.trunc(a)); // nupjauna??? 👀👀👀

console.clear();

// [0, 1)
const r1 = Math.random();
console.log(r1);

function random_0_1() {
    //                0.999999 => 1.999999
    return Math.trunc(Math.random() * 2);
}

// const count = [0, 0];
// for (let i = 0; i < 1_000_000; i++) {
//     const r = random_0_1();
//     count[r]++;
// }
// console.log(count);


function random_0_5() {
    return Math.floor(Math.random() * 6);
}

// min=0; max=5
// min=1; max=6
// min=2; max=7
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const nuo = 0;
const iki = 4;
const count5 = Array(iki - nuo + 1).fill(0);

for (let i = 0; i < 1000; i++) {
    const r = random(nuo, iki);
    count5[r - nuo]++;
}

console.log(count5);