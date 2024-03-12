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

const solution2 = (a, b) => a.length < b.length ? `${a}${b}${a}` : `${b}${a}${b}`;
console.log(solution2('mama', 'mio'));

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

console.clear();

function greet(language) {
    const greet = {
        "english": "Welcome",
        "czech": "Vitejte",
        "danish": "Velkomst",
        "dutch": "Welkom",
        "estonian": "Tere tulemast",
        "finnish": "Tervetuloa",
        "flemish": "Welgekomen",
        "french": "Bienvenue",
        "german": "Willkommen",
        "irish": "Failte",
        "italian": "Benvenuto",
        "latvian": "Gaidits",
        "polish": "Witamy",
        "spanish": "Bienvenido",
        "swedish": "Valkommen",
        "welsh": "Croeso",
    }
    return greet[language] || "Welcome"
}

console.log(greet('english'));
console.log(greet('dutch'));
console.log(greet('IP_ADDRESS_INVALID'));

console.clear();

function drawStairs(n) {
    return [...Array(n)].map((_, index) => ' '.repeat(index) + `I`).join(`\n`)
}

console.log(drawStairs(1));
console.log(drawStairs(3));
console.log(drawStairs(5));

function drawStairs1(n) {
    let result = [];

    for (let i = 0; i < n; i++) {
        result[i] = `${' '.repeat(i)}I`;
    }

    return result.join('\n');
}

console.log(drawStairs1(1));
console.log(drawStairs1(3));
console.log(drawStairs1(5));

console.clear();

function aliasGen(a, b) {
    const firstName = {
        A: 'Alpha',
        B: 'Beta',
        C: 'Cache',
        D: 'Data',
        E: 'Energy',
        F: 'Function',
        G: 'Glitch',
        H: 'Half-life',
        I: 'Ice',
        J: 'Java',
        K: 'Keystroke',
        L: 'Logic',
        M: 'Malware',
        N: 'Nagware',
        O: 'OS',
        P: 'Phishing',
        Q: 'Quantum',
        R: 'RAD',
        S: 'Strike',
        T: 'Trojan',
        U: 'Ultraviolet',
        V: 'Vanilla',
        W: 'WiFi',
        X: 'Xerox',
        Y: 'Y',
        Z: 'Zero',
    }
    const surname = {
        A: 'Analogue',
        B: 'Bomb',
        C: 'Catalyst',
        D: 'Discharge',
        E: 'Electron',
        F: 'Faraday',
        G: 'Gig',
        H: 'Hacker',
        I: 'IP',
        J: 'Jabber',
        K: 'Killer',
        L: 'Lazer',
        M: 'Mike',
        N: 'n00b',
        O: 'Overclock',
        P: 'Payload',
        Q: 'Quark',
        R: 'Roy',
        S: 'Spy',
        T: 'T-Rex',
        U: 'Unit',
        V: 'Virus',
        W: 'Worm',
        X: 'X',
        Y: 'Yob',
        Z: 'Zombie',
    }
    a = a[0].toUpperCase() + a.slice(1);
    b = b[0].toUpperCase() + b.slice(1);
    if (/\d/.test(a[0]) || /\d/.test(b[0])) {
        return `Your name must start with a letter from A - Z.`
    } else {
        return firstName[a[0]] + ' ' + surname[b[0]]
    }
}

console.log(aliasGen("Mike", "Millington"));
console.log(aliasGen("Fahima", "Tash"));
console.log(aliasGen("Daisy", "Petrovic"));
console.log(aliasGen("7393424", "Anumbha"));
console.log(aliasGen("Anuddanumbha", "23200"));
console.clear();
/*
Dvi komandos - delfinai koalos. Varžosi tris kartus. Nugalėtojas - surinkęs didžiausią vidurkį.
Užduotys:
1. Apskaičiuoti kiekvienos komandos taškų vidurkį.
2. Palyginti vidurkius, nustatyti nugalėtoją ir išvesti į konsole kas laimėjo, arba išvesti, kad lygiosios.
3. Įtraukti reikalavimą, kad laimi ne tik daugiau surinkęs, bet ir tas, kuris bent vieną kartą turėjo 100 taškų.
4. Minimalus rezultatas taikomas ir lygiosioms. Lygiosios užsiskaito tik tuo atveju, jeigu abi komandos turėjo virš 100 taškų. 
*/
const delfinai = [103, 103, 103];
const koalos = [103, 103, 103];



function avg(arr) {
    let sum = 0;
    arr.map((n) => sum += n)
    return sum / arr.length
}

console.log(avg(delfinai));
console.log(avg(koalos));



function winner(team1Avg, team2Avg) {
    return team1Avg > team2Avg ? delfinai : team2Avg > team1Avg ? koalos : 'lygiosios'
}

function score100(arr) {
    return (arr.filter((n) => n >= 100)).length >= 1;
}


// const trueWinner = function (team1, team2) {
//     const team1Avg = avg(team1);
//     const team2Avg = avg(team2);
//     const winnerTeam = winner(team1Avg, team2Avg);
//     const hundredIsTrue = score100(winnerTeam);
//     if (winnerTeam !== 'lygiosios' && hundredIsTrue) {
//         return `Laimėjo komanda surinkusi ${winnerTeam}`
//     } else if ((winner === 'lygiosios') && (score100(team1) || score100(team2))) {
//         return `Tikros lygiosios`;
//     } else {
//         return `Neturime nei tikru laimetoju nei tikru lygiuju`
//     }
// }
//console.log(trueWinner(delfinai, koalos));

console.clear();


function duckDuckGoose(players, goose) {
    let number = 0;
    let result = '';
    if (players.length >= goose) {
        number = goose - 1;
        result = players[number];
    } else {
        number = (goose % players.length) - 1;
        result = players[number];
    }
    return result;
}



console.log(duckDuckGoose(["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"], 17));


let steps = 0;
var hotpo = function (n) {
    if (n <= 1) return steps;
    steps++;
    const r = n % 2 === 0 ? n / 2 : 3 * n + 1;
    return hotpo(r)
}

console.log(hotpo(23))

function knightVsKing(knightPosition, kingPosition) {
    const letters = {
        A: 1,
        B: 2,
        C: 3,
        D: 4,
        E: 5,
        F: 6,
        G: 7,
        H: 8,
    };
    const kingTargets = [
        [kingPosition[0] + 1, Object.keys(letters)[letters[kingPosition[1]] + 1 - 1]],
        [kingPosition[0], Object.keys(letters)[letters[kingPosition[1]] + 1 - 1]],
        [kingPosition[0] - 1, Object.keys(letters)[letters[kingPosition[1]] + 1 - 1]],
        [kingPosition[0] - 1, Object.keys(letters)[letters[kingPosition[1]] - 1]],
        [kingPosition[0] - 1, Object.keys(letters)[letters[kingPosition[1]] - 1 - 1]],
        [kingPosition[0], Object.keys(letters)[letters[kingPosition[1]] - 1 - 1]],
        [kingPosition[0] + 1, Object.keys(letters)[letters[kingPosition[1]] - 1 - 1]],
        [kingPosition[0] + 1, Object.keys(letters)[letters[kingPosition[1]] - 1]],
    ];

    const knightTargets = [
        [knightPosition[0] + 2, Object.keys(letters)[letters[knightPosition[1]] + 1 - 1]],
        [knightPosition[0] + 1, Object.keys(letters)[letters[knightPosition[1]] + 2 - 1]],
        [knightPosition[0] - 1, Object.keys(letters)[letters[knightPosition[1]] + 2 - 1]],
        [knightPosition[0] - 2, Object.keys(letters)[letters[knightPosition[1]] + 1 - 1]],
        [knightPosition[0] - 2, Object.keys(letters)[letters[knightPosition[1]] - 1 - 1]],
        [knightPosition[0] - 1, Object.keys(letters)[letters[knightPosition[1]] - 2 - 1]],
        [knightPosition[0] + 1, Object.keys(letters)[letters[knightPosition[1]] - 2 - 1]],
        [knightPosition[0] + 2, Object.keys(letters)[letters[knightPosition[1]] - 1 - 1]],
    ];
    if (knightTargets.some(e => e[0] === kingPosition[0] && e[1] === kingPosition[1])) return `Knight`;
    if (kingTargets.some(e => e[0] === knightPosition[0] && e[1] === knightPosition[1])) return `King`;
    return `None`
}
knightVsKing([4, "C"], [6, "D"])
console.clear();


function isValidChess960(pieces) {
    pieces = pieces.split('');
    const king = pieces.indexOf('K');
    const b1 = pieces.indexOf('B');
    const b2 = pieces.indexOf('B', b1 + 1);
    const r1 = pieces.indexOf('R');
    const r2 = pieces.indexOf('R', r1 + 1);
    if (king < r1 || king > r2) {
        return false
    }
    if (b1 % 2 === b2 % 2) {
        return false
    }
    return true
}

console.log(isValidChess960("QRNNBBRK"));

console.clear();

function betterThanAverage(classPoints, yourPoints) {
    let sum = 0;
    const classAvg = classPoints.map((n) => sum = sum + n);
    return sum / classPoints.length > yourPoints;
}

console.log(betterThanAverage([2, 3], 5))

function sumMix(x) {
    x = x.map((n) => Number(n));
    let sum = 0;
    for (let y of x) {
        sum += y
    }
    return sum
}

console.log(sumMix([9, 3, '7', '3']));

console.clear();

function calculateTip(amount, rating) {
    const tipRating = {
        terrible: 0,
        poor: 5,
        good: 10,
        great: 15,
        excellent: 20,
    };
    rating = rating.toLowerCase();
    if (tipRating.hasOwnProperty(rating)) {
        return Math.ceil(amount * tipRating[rating.toLowerCase()] / 100)
    } else {
        return `Rating not recognised`
    }
}


console.log(calculateTip(20, "Excellent"));
console.log(calculateTip(26.95, "good"));

console.clear()

function findMultiples(integer, limit) {
    let result = [];
    for (let i = integer; i <= limit; i += integer) {
        result.push(i)
    }
    return result
}

console.log(findMultiples(5, 25));
console.log(findMultiples(1, 2));
console.log(findMultiples(5, 7));
console.log(findMultiples(4, 27));
console.log(findMultiples(11, 54));

console.clear();


function find1(seq) {
    const srt = seq.sort((a, b) => a - b);
    const step = (srt[1] - srt[0]) >= (srt[2] - srt[1]) ? srt[2] - srt[1] : srt[1] - srt[0];
    for (let i = 0; i < srt.length; i++) {
        if (srt[i] + step !== srt[i + 1]) {
            return srt[i] + step;
        }
    }
}

console.log(find1([3, 9, 1, 11, 13, 5]));
console.log(find1([5, -1, 0, 3, 4, -3, 2, -2]));

function find(seq) {
    let min = seq[0];
    let sumDiff = 0;
    let max = seq[0];

    for (let i = 0; i < seq.length; i++) {
        min = min <= seq[i] ? min : seq[i];
        max = max >= seq[i] ? max : seq[i];
        sumDiff += seq[i];
    }

    const step = (max - min) / seq.length;
    const newArr = Array(seq.length + 1).fill(0).map((a, i) => min + i * step).reduce((t, c) => t + c);
    return newArr - sumDiff;
}

console.log(find([3, 9, 1, 11, 13, 5]));
console.log(find([5, -1, 0, 3, 4, -3, 2, -2]));

function find2(seq) {
    const len = seq.length
    let min = Infinity;
    let max = -Infinity;
    let sum = 0;
    for (const e of seq) {
        sum += e;
        if (e < min)
            min = e;
        if (e > max)
            max = e;
    }
    return ((len + 1) / 2) * (min + max) - sum;
}

console.log(find2([3, 9, 1, 11, 13, 5]));
console.log(find2([5, -1, 0, 3, 4, -3, 2, -2]));

console.clear();

function toCsvText(array) {
    let str = '';
    for (let i of array) {
        str += i.toString() + '\n'
    }
    return str.slice(0, -1)
}

console.log(toCsvText([
    [0, 1, 2, 3, 45],
    [10, 11, 12, 13, 14],
    [20, 21, 22, 23, 24],
    [30, 31, 32, 33, 34]
]));

console.clear()
function solution(str) {
    str = str.split('');
    const arr = [];
    console.log(str);
    for (let i = 0; i < str.length; i += 2) {
        arr.push(str[i] + (str[i + 1] || '_'));
    }
    return arr
}

console.log(solution("abcdefg"));

console.clear();

function splitAndMerge(string, separator) {
    const arr = string.split(' ');
    const newArr = [];
    for (let a of arr) {
        let aaa = a.split('');
        aaa = aaa.join(separator);
        newArr.push(aaa);
    }
    return newArr.join(' ');
}

console.log(splitAndMerge("My name is John", " "));

console.clear();

class Person {
    constructor(name = 'John', surname = 'Doe', age = 0, gender = 'Male') {
        this.firstName = `${name}`;
        this.lastName = `${surname}`;
        this.age = age;
        this.gender = `${gender}`;
        this.raceName = ''
    }
    sayFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    static greetExtraTerrestrials(raceName) {
        if (raceName) {
            return `Welcome to Planet Earth ${raceName}`;
        }
    }
}

let jane = new Person("Jane", "Doe", 25, "Female");
console.log(jane);

console.log(Person.greetExtraTerrestrials("Martians"));

console.clear();

function flickSwitch(arr) {
    const newArr = [];
    let bool = true;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 'flick') {
            newArr.push(bool);
        }
        if (arr[i] === 'flick') {
            bool = true ? false : true;
            newArr.push(bool);
        }
    }
    return newArr;
}

console.log(flickSwitch(["codewars", "flick", "code", "wars"]));
console.log(flickSwitch(["flick", "flick", "flick", "flick", "flick"]));

console.clear();

function expressionMatter(a, b, c) {
    const highest = [];
    highest.push(a + b + c);
    highest.push(a * b * c);
    highest.push((a + b) * c);
    highest.push(a + b * c);
    highest.push(a * (b + c));
    highest.push(a * b + c);
    return highest.sort((a, b) => b - a)[0];
}

console.log(expressionMatter(5, 1, 3));

console.clear();

function isOpposite(s1, s2) {
    if ((s1 || s2) === '') {
        return false
    }
    if (s1.length !== s2.length) {
        return false
    }
    let result = 0;
    for (let i = 0; i < s1.length; i++) {
        if ((s1[i] === s1[i].toLowerCase() && s2[i] === s2[i].toUpperCase()) || (s1[i] === s1[i].toUpperCase() && s2[i] === s2[i].toLowerCase())) {
            result;
        } else {
            result++
        }
    }
    return result > 0 ? false : true
}

console.log(isOpposite("ab", "AB"), 'TRUE');
console.log(isOpposite("aB", "aB"), 'FALSE');
console.log(isOpposite("AB", "Ab"), 'FALSE');
console.log(isOpposite("", ""), 'FALSE');
console.log(isOpposite("aBcde", "AbCD"), 'FALSE');

console.clear();

function roundIt(n) {
    const sp = (n.toString().split('.'));
    if (sp[0].length < sp[1].length) {
        return Math.ceil(n)
    }
    if (sp[0].length > sp[1].length) {
        return Math.floor(n)
    }
    if (sp[0].length === sp[1].length) {
        return Math.round(n)
    }
}

console.log(roundIt(3.45), 4); // Math.ceil()
console.log(roundIt(34.5), 34); // Math.floor()
console.log(roundIt(34.56), 35); // Math.round()

console.clear();

// function gimmeTheLetters(sp) {
//     const alphabet = 'abcdefghijklmnopqrstuvwxyz';
//     const alphabet2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     const spNew = sp.split('-');
//     const firstLetter = alphabet.indexOf(spNew[0]);
//     const firstLetter2 = alphabet2.indexOf(spNew[0]);


//     const lastLetter = alphabet.indexOf(spNew[1]);
//     const lastLetter2 = alphabet2.indexOf(spNew[1]);

//     let result = '';
//     if ((spNew[0]) == spNew[0].toLowerCase()) {
//         for (let i = firstLetter; i <= lastLetter; i++) {
//             result += alphabet[i];

//         }
//     }
//     if ((spNew[0]) == spNew[0].toUpperCase()) {
//         for (let i = firstLetter2; i <= lastLetter2; i++) {
//             result += alphabet2[i];

//         }
//     }
//     return result;
// }

function gimmeTheLetters(sp) {
    const [first, last] = sp.split('-')
    const firstLetterCode = first.charCodeAt(0);
    const lastLetterCode = last.charCodeAt(0)
    let result = '';
    for (let i = firstLetterCode; i <= lastLetterCode; i++) {
        result += String.fromCharCode(i);
    }
    return result;
}

console.log(gimmeTheLetters('a-b'), 'ab', `'a-b'`)
console.log(gimmeTheLetters('y-z'), 'yz', `'y-z'`)
console.log(gimmeTheLetters('H-I'), 'HI', `'H-I'`)
console.log(gimmeTheLetters('a-z'), 'abcdefghijklmnopqrstuvwxyz', `'a-z'`)
console.log(gimmeTheLetters('A-Z'), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', `'A-Z'`)
