function differenceInAges(ages) {
    ages = ages.sort((a, b) => b - a);
    const ats = [];
    ats.push(ages[ages.length - 1], ages[0], ages[0] - ages[ages.length - 1])
    return ats
}
console.log(differenceInAges([82, 15, 6, 38, 35]), 'ats:[6, 82, 76]');

function textLength(text) {
    return text.length
}

console.log(textLength('Agne'));

console.clear();

// function getDrinkByProfession(param) {
//     const params = param.split(' ');
//     const niceParams = params.map(n => { return n.toLowerCase() });

//     return niceParams
// }
// console.log(getDrinkByProfession('scHOOl counsElor'))



function getDrinkByProfession(param) {
    param = param.toLowerCase();
    const drinks = {
        "jabroni": "Patron Tequila",
        "school counselor": "Anything with Alcohol",
        "programmer": "Hipster Craft Beer",
        "bike gang member": "Moonshine",
        "politician": "Your tax dollars",
        "rapper": "Cristal",
    }

    return drinks[param] || `Beer`

}
console.log(getDrinkByProfession('sdf'))

console.clear();
function century(year) {
    return Math.ceil(year / 100);
}

console.log(century(100));
console.clear();

function magNumber(info) {
    const gunName = info[0];
    const streetQuantity = info[1];
    const guns = {
        'PT92': 17,
        'M4A1': 30,
        'M16A2': 30,
        'PSG1': 5,
    }
    console.log(guns[gunName], streetQuantity);
    return Math.ceil((streetQuantity * 3) / guns[gunName]);
}

console.log(magNumber(['M16A2', 5]), '->', 2);

console.clear();

function reverseWords(str) {
    let arr = str.split(' ');
    console.log(arr);
    const arr2 = [];
    for (let w of arr) {
        arr2.shift(w)
    }
    return arr2;
}
const stringas = 'labai grazus oras';
const arr = stringas.split(' ');
const arr3 = [];
for (let w of arr) {
    arr3.unshift(w)
}
console.log(arr3);

console.clear();

// function addLength(str) {
//     const arr = str.split(' ');
//     const arr2 = [];
//     for (let a of arr) {
//         const aa = `${a} ${a.length}`;
//         arr2.push(aa);
//     }s
//     return arr2
// }

// console.log(addLength('apple ban'));

function addLength(str) {
    return str.split(' ').map(word => `${word} ${word.length}`);
}

console.log(addLength('apple ban'));
console.clear();

function bmi(weight, height) {
    const bmi = weight / (height ** 2);
    let result = '';
    switch (true) {
        case bmi <= 18.5:
            result = "Underweight";
            break
        case bmi <= 25.0:
            result = "Normal";
            break
        case bmi <= 25.0:
            result = "Overweight";
            break
        case bmi > 30:
            result = "Obese";
            break;
    }
    return result
}
console.log(bmi(200, 1.80), "Normal");
console.log(bmi(101, 1.83), "Normal");



function zeros(n) {
    let result = 0;
    for (let i = 1; 5 ** i <= n; i++) {
        result += Math.floor(n / 5 ** i)
    }
    return result;
}

function zeros1(n) {
    let zs = 0;
    while (n > 0) {
        n = Math.floor(n / 5);
        zs += n
    }
    return zs;
}
console.log(zeros1(20));

function xor(a, b) {
    return !!(a ^ b);
}
console.log(xor(true, false));

const str = 'malonybe'
console.log(str.replace(/./g, "bar"));

console.clear();

function position(letter) {
    const abc = ['0', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    return `Position of alphabet: ${abc.indexOf(letter)}`
}
console.log(position('z'));

function solution1(a, b) {
    const arr = [a, b];
    const sorted = arr.sort((a, b) => a - b);
    const result = [sorted[0], sorted[1], sorted[0]]
    return result.join('')
}
console.log(solution1(21, 3));

const solution = (a, b) => a.length < b.length ? `${a}${b}${a}` : `${b}${a}${b}`;
console.log(solution('mama', 'mio'));

console.clear;

function validateHello(greetings) {
    const arr = greetings.toLowerCase().split(' ');
    const greets = ['hello', 'ciao', 'salut', 'hallo', 'hola', 'ahoj', 'czesc'];
    const result = greets.filter(value => arr.includes(value));
    return result.length > 0;
}

console.log(validateHello(`laBa diEna helLo`));

