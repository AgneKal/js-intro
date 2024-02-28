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

console.clear();

function seatsInTheater(nCols, nRows, col, row) {
    return (nCols - col + 1) * (nRows - row)
}

console.log(seatsInTheater(13, 6, 8, 3));


function integrate(a, b) {
    return `${a / (b + 1)}x^${b + 1}`;
}

console.log(integrate(90, 2));

console.clear();

function quadratic(x1, x2) {
    const arr = Array(3).fill(0);
    arr[0] = 1;
    arr[1] = 0 - x1 - x2;
    arr[2] = x1 * x2;
    return arr;
}

console.log(quadratic(-4, -9));


// kelione per object key ir value
function giveMeFive(object) {
    const arr = [];
    for (let key in object) {
        key.length === 5 ? arr.push(key) : arr;
        object[key].length === 5 ? arr.push(object[key]) : arr;
    }
    return arr;
};

console.log(giveMeFive({ 'vardas': 'Jonas', 'amzius': 'penki', 'svers': 'du' }));
console.clear();

function grabDoll0(dolls) {
    let bag = [];
    for (let i = 0; i < dolls.length; i++) {
        if (dolls[i] !== "Hello Kitty") continue;
        if (dolls[i] !== "Barbie doll") continue;
        if (bag.length < 3) {
            bag.push(dolls[i]);
        } else if (bag.length === 3) {
            break;
        }
    }
    return bag;
};

console.log(grabDoll0(["Mickey Mouse", "Hello Kitty", "Snow white"]));
console.log(grabDoll0(["Mickey Mouse", "Hello Kitty", "Hello Kitty", "Snow white"]));

function grabDoll(dolls) {
    let bag = [];
    for (let i = 0; i < dolls.length; i++) {
        if (dolls[i] === !"Hello Kitty") continue;
        if (dolls[i] === !"Barbie doll") continue;
        if ((dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll") && bag.length < 3) {
            bag.push(dolls[i]);
        } else if (bag.length === 3) {
            break;
        }
    }
    return bag;
};

console.log(grabDoll(["Mickey Mouse", "Hello Kitty", "Snow white"]));
console.log(grabDoll(["Mickey Mouse", "Hello Kitty", "Hello Kitty", "Snow white"]));


// function grabDoll1(dolls) {
//     let bag = [];
//     for (let i = 0; i < dolls.length; i++) {
//         if (!"Hello Kitty")
//             console.log('netinka');;
//         if (!"Barbie doll") continue;
//         if ((dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll") && bag.length < 3) {
//             bag.push(dolls[i]);
//         } else if (bag.length === 3) {
//             break;
//         }
//     }
//     return bag;
// };


// console.log(grabDoll1(["Mickey Mouse", "Hello Kitty", "Snow white"]));
// console.log(grabDoll1(["Mickey Mouse", "Hello Kitty", "Hello Kitty", "Snow white"]));


// In JavaScript, the === operator is the strict equality operator, and !== is its counterpart, the strict inequality operator.When comparing values with these operators, not only is the value compared, but the data type is also considered.
//     Let's break down your two expressions:
//         === !"string":
// The! operator is the logical NOT operator, which negates the truthiness of a value.
// "string" is a string literal.
// !"string" negates the truthiness of the string, resulting in false.
//     Finally, === checks for strict equality, so the whole expression evaluates to false.
// !== "string":
// !== is the strict inequality operator.
// "string" is a string literal.
// !== "string" checks if the value is not strictly equal to the string, and if true, the expression evaluates to true.
// In summary:
// === !"string" evaluates to false.
// !== "string" evaluates to true.
//     It's important to note that !== checks for both inequality in value and type, while === checks for equality in both value and type.

function bingo(a) {
    if (a.includes(2) && a.includes(7) && a.includes(9) && a.includes(14) && a.includes(15)) {
        return `WIN`;
    } else {
        return `LOSE`;
    }
}

console.log(bingo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'LOSE'));
console.log(bingo([21, 13, 2, 7, 5, 14, 7, 15, 9, 10], 'WIN'));

console.clear();

const countSheep = function (num) {
    let str = '';
    if (num === 0) {
        return str;
    }
    for (let i = 1; i <= num; i++) {
        str = str + `${i} sheep...`;
    }
    return str
}

console.log(countSheep(0), '');
console.log(countSheep(1), '1 sheep...');
console.log(countSheep(2), '1 sheep...2 sheep...');
console.log(countSheep(3), '1 sheep...2 sheep...3 sheep...');

console.clear();

function howManySmaller(arr, n) {
    const arr2 = [];
    for (let a of arr) {
        arr2.push(a.toFixed(2))
    }
    let counter = 0;
    arr2.map((a) => a < n ? counter = counter + 1 : counter);
    return counter;
}

console.log(howManySmaller([1.234, 1.235, 1.228], 1.24), 2);
console.log(howManySmaller([1.1888, 1.1868, 1.1838], 1.19), 1);
console.log(howManySmaller([3.1288, 3.1212, 3.1205], 3.1212), 2);
console.clear();

function howManySmaller2(arr, n) {
    let counter = 0;
    arr.map((a) => a.toFixed(2) < n ? counter++ : counter)
    return counter;
}

console.log(howManySmaller2([1.234, 1.235, 1.228], 1.24), 2);
console.log(howManySmaller2([1.1888, 1.1868, 1.1838], 1.19), 1);
console.log(howManySmaller2([3.1288, 3.1212, 3.1205], 3.1212), 2);

console.clear();

const howManySmaller3 = (arr, n) => arr.filter((a) => a.toFixed(2) < n).length;

console.log(howManySmaller3([1.234, 1.235, 1.228], 1.24), 2);
console.log(howManySmaller3([1.1888, 1.1868, 1.1838], 1.19), 1);
console.log(howManySmaller3([3.1288, 3.1212, 3.1205], 3.1212), 2);

console.clear();

function cutIt(arr) {
    const shortesString = arr.map((a) => a.length).sort((a, b) => a - b)[0];
    const arr2 = arr.map((a) => a.slice(0, shortesString))
    return arr2;
}
console.log(cutIt(["ab", "cde", "fgh"]), ["ab", "cd", "fg"]);
console.log(cutIt(["abc", "defgh", "ijklmn"]), ["abc", "def", "ijk"]);
console.log(cutIt(["codewars", "javascript", "java"]), ["code", "java", "java"]);

console.clear();

function firstToLast(str, c) {
    return str.indexOf(c) >= 0 ? str.lastIndexOf(c) - str.indexOf(c) : -1;
}

console.log(firstToLast("ababc", "a"), 2);
console.log(firstToLast("ababc", "c"), 0);
console.log(firstToLast("ababc", "d"), -1);

console.clear();

function fiveLine(s) {
    s = s.trim();
    return `${s}\n${s}${s}\n${s}${s}${s}\n${s}${s}${s}${s}\n${s}${s}${s}${s}${s}`
}

console.log(fiveLine("  a"));
console.log(fiveLine("\txy \n"));
console.log(fiveLine("           Ok               "));

console.log(fiveLine("  a"), "a\naa\naaa\naaaa\naaaaa");
console.log(fiveLine("\txy \n"), "xy\nxyxy\nxyxyxy\nxyxyxyxy\nxyxyxyxyxy");
console.log(fiveLine("           Ok               "), "Ok\nOkOk\nOkOkOk\nOkOkOkOk\nOkOkOkOkOk");

console.clear();

function blackAndWhite(arr) {
    if (!Array.isArray(arr)) {
        return `It's a fake array`;
    }
    return arr.indexOf(5) >= 0 && arr.indexOf(13) >= 0 ? `It's a black array` : `It's a white array`;
};
console.log(blackAndWhite(5, 13), "It's a fake array");
console.log(blackAndWhite([5, 13]), "It's a black array");
console.log(blackAndWhite([5, 12]), "It's a white array");

