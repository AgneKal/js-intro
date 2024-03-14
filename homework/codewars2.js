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

