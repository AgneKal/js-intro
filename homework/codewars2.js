function changeMe(moneyIn) {
    if (moneyIn !== '£5' && moneyIn !== '£2' && moneyIn !== '£1' && moneyIn !== '50p' && moneyIn !== '20p') {
        return moneyIn
    }
    if (moneyIn === '£1') { return `20p 20p 20p 20p 20p` }
    if (moneyIn === '£2') { return `20p 20p 20p 20p 20p 20p 20p 20p 20p 20p` }
    if (moneyIn === '£5') { return `20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p` }
    if (moneyIn === '50p') { return `20p 20p 10p` }
    if (moneyIn === '20p') { return `10p 10p` }

}

console.log(changeMe('£20'));
console.log(changeMe('£1'));
console.log(changeMe('£2'));
console.log(changeMe('£5'));
console.log(changeMe('50p'));
console.log(changeMe('20p'));

console.clear();

function bubblesortOnce(a) {
    const arr = [...a];
    for (let i = 0; i < a.length; i++) {
        if (arr[i] > arr[i + 1]) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        }
    }
    return arr
}

console.log(bubblesortOnce([9, 7, 5, 3, 1, 2, 4, 6, 8]), [7, 5, 3, 1, 2, 4, 6, 8, 9]);

console.clear();

// Factory functions

function person(firstName, lastName, age, gender, employed, occupation, married) {
    return {
        firstName: firstName,
        lastName: lastName,
        age: age,
        gender: gender,
        employed: true,
        occupation: 'construction worker',
        married: false,
        sayName: function () {
            return `${this.firstName} ${this.lastName}`;
        },
        introduce: function () {
            return `Hello, my name is ${this.sayName()}.  I am ${this.age} years old.  I am a ${this.gender}.`;
        }
    };
}

function constructionWorker(firstName, lastName, age, gender, married, boss) {
    const worker = person(firstName, lastName, age, gender, married);
    return {
        boss: boss,
        ...worker,

        sayBossName() {
            return `My boss is called ${this.boss} and is a very nice person!`
        }
    }
}

//kitas variantas:
// function constructionWorker(first, last, age, gender, married, boss) {
//     var worker = person(first, last, age, gender, true, "construction worker", married);
//     worker.boss = boss;
//     worker.sayBossName = function () { return "My boss is called " + this.boss + " and is a very nice person!"; }

//     return worker;
// }

console.clear();

// MATH.RANDOM iš ASCII, iš stringo ir iš random skaičių

function rndCode() {
    let code = '';
    const chars = '~!@#$%^&*';
    for (let i = 0; i < 2; i++) {
        code += String.fromCharCode(Math.floor(26 * Math.random() + 65))
    }
    for (let i = 0; i < 4; i++) {
        code += Math.floor(10 * Math.random());
    }
    for (let i = 0; i < 2; i++) {
        code += chars[Math.floor(chars.length * Math.random())];
    }
    return code;
}

console.log(rndCode());


// ARBA
// const rndCode = () => {
//     let code = '';

//     for (let i = 0; i < 2; i++) {
//         code += 'ABCDEFGHIJKLM'[Math.floor(Math.random() * 13)];
//     }

//     for (let i = 0; i < 4; i++) {
//         code += Math.floor(Math.random() * 10);
//     }

//     for (let i = 0; i < 2; i++) {
//         code += '~!@#$%^&*'[Math.floor(Math.random() * 9)];
//     }

//     return code;
// }

console.clear();

function tailAndHead(arr) {
    const arrString = arr.map(String);
    let result = 0;
    const firstNumber = [];
    const lastNumber = [];
    const sum = [];

    for (let i = 0; i < arr.length; i++) {
        lastNumber.push(arrString[i][arrString[i].length - 1]);
    }
    for (let i = 1; i < arr.length; i++) {
        firstNumber.push(arrString[i][0]);
    }
    for (let i = 0; i < firstNumber.length; i++) {
        sum.push(Number(firstNumber[i]) + Number(lastNumber[i]));
    }

    result = sum.reduce((a, b) => a * b);

    return result;
}

// function tailAndHead(arr) {
//     return arr.reduce((a, b, i) => a * (+((arr[i] + "")[0]) + (arr[i - 1] % 10))) / arr[0]; <----KODĖL???
// }

console.log(tailAndHead([123, 456, 789, 12, 34, 56, 78]), 532350);

console.clear();

function mirrorImage(arr) {
    const result = [];
    arr.some((x, i) => {
        let a = arr[i];
        let b = arr[i + 1] || 0;
        if (a === b || a == b.toString().split('').reverse().join('')) {
            result.push(a, b);
        }
    })
    return result.length > 0 ? [result[0], result[1]] : [-1, -1];
}

// function mirrorImage1(arr) {
//     var a, b;
//     var result = arr.some((x, i) => {
//         a = x, b = arr[i + 1];
//         return x === Number(String(b).split('').reverse().join(''));
//     });

//     return result ? [a, b] : [-1, -1];
// }

console.log(mirrorImage([11, 22, 33, 33, 22, 11]), [33, 33]);
console.log(mirrorImage([454, 86, 57, 75, 16, 88]), [57, 75]);
console.log(mirrorImage([454, 0, 57, 0, 16, 88]), [-1, -1]);

console.clear();

function countGrade(scores) {
    const grades = { S: 0, A: 0, B: 0, C: 0, D: 0, X: 0 };
    scores.filter(x => {
        if (x === 100) {
            grades['S']++;
        }
        if (x >= 90 && x < 100) {
            grades['A']++;
        }
        if (x >= 80 && x < 90) {
            grades['B']++;
        }
        if (x >= 60 && x < 80) {
            grades['C']++;
        }
        if (x >= 0 && x < 60) {
            grades['D']++;
        }
        if (x < 0) {
            grades['X']++;
        }
    })
    return grades
}

console.log(countGrade([50, 60, 70, 80, 90, 100]), { S: 1, A: 1, B: 1, C: 2, D: 1, X: 0 });

const countGrade1 = scores => ({
    S: scores.filter(x => x >= 100).length,
    A: scores.filter(x => x >= 90).filter(x => x < 100).length,
    B: scores.filter(x => x >= 80).filter(x => x < 90).length,
    C: scores.filter(x => x >= 60).filter(x => x < 80).length,
    D: scores.filter(x => x >= 0).filter(x => x < 60).length,
    X: scores.filter(x => x == -1).length
})
console.log(countGrade1([50, 60, 70, 80, 90, 100]), { S: 1, A: 1, B: 1, C: 2, D: 1, X: 0 })

console.clear();

function isolateIt(arr) {
    const result = arr.map(x => {
        const part = Math.floor(x.length / 2);
        if (x.length % 2 === 0) {
            return x.slice(0, part) + '|' + x.slice(part);
        } else {
            return x.slice(0, part) + '|' + x.slice(part + 1);
        }
    });
    return result
}

console.log(isolateIt(["abcd", "efgh"]), ["ab|cd", "ef|gh"]);
console.log(isolateIt(["abcde", "fghij"]), ["ab|de", "fg|ij"]);
console.log(isolateIt(["1234", "56789"]), ["12|34", "56|89"]);

console.clear();

function testit(string) {
    const word = 'word';
    let arr = string.toLowerCase().split('').filter(e => word.includes(e));
    let newArr = [];
    let result = 0;
    while (arr.length > 0) {
        for (let i = 0; i < word.length; i++) {
            if (arr[0] === word[i] && newArr.length === 0 && i === 0) {
                newArr.push(word[i]);
            } else if (arr[0] === word[i] && newArr[newArr.length - 1] === word[i === 0 ? word.length - 1 : i - 1]) {
                newArr.push(word[i]);
            }
        }
        arr = arr.splice(1);
    }
    result = Math.floor(newArr.length / word.length)
    return result
}

function testit1(s) {
    return (s.match(/w.*?o.*?r.*?d/ig) || []).length;
}

console.log(testit1("word"), 1, "");
console.log(testit1("hello world"), 1, "");
console.log(testit1("I love codewars."), 0, "");
console.log(testit1("My cat waiting for a dog."), 1, "");
console.log(testit1("We often read book, a word hidden in the book."), 2, "");
console.log(testit1("When you in order to do something by a wrong way, your heart will missed somewhere."), 2, "");
console.log(testit1("This sentence have one word."), 1, "");
console.log(testit1("This sentence have two word, not one word."), 2, "");
console.log(testit1("One word + one word = three word ;-)"), 3, "");
console.log(testit1("Can you find more word for me?"), 1, "");






