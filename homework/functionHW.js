// 1. Parašykite funkciją, kuri priima vartotojo vardą kaip argumentą ir grąžina pasveikinimo žinutę.

function hello(name) {
    return `Labas! Prie mūsų prisijungė ${name}!`;
}

console.log(hello('Jonas'));

// 2. Sukurkite funkciją, kuri priima du skaičius kaip argumentus ir grąžina jų sumą.

function sum(a, b) {
    return a + b;
}

console.log(sum(7, 5));

// 3. Parašykite funkciją, kuri priima masyvą kaip argumentą ir grąžina visų masyvo elementų sumą.

function arrSum(arr) {
    let sum = 0;
    for (let a of arr) {
        sum += a
    }
    return sum;
}

console.log(arrSum([5, 6, 3, 9]));

// 4.  Sukurkite funkciją, kuri priima masyvą skaičių ir grąžina didžiausią skaičių masyve.

const max = (arr) => Math.max(...arr);

console.log(max([5, 9, 3, 7]));

// 5.Parašykite funkciją, kuri priima tekstą kaip argumentą ir grąžina to teksto ilgį.

const length = (str) => str.length;

console.log(length('Mama Mia'));

// 6. Sukurkite funkciją, kuri priima skaičių ir grąžina jo faktorialą.

function factorial(number) {
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    } return result;
}

console.log(factorial(10));

// 7.Parašykite funkciją, kuri priima masyvą skaičių ir skaičių kaip argumentus, o grąžina naują masyvą, kuriame yra tik tie skaičiai, kurie didesni už pateiktą skaičių.

function moreThan(arr, n) {
    const newArr = [];
    for (let a of arr) {
        a > n ? newArr.push(a) : newArr;
    }
    return newArr
}

console.log(moreThan([5, 9, 3, 7], 5));

// 8. Sukurkite funkciją, kuri priima tekstą kaip argumentą ir grąžina jį atvirkštine tvarka.

const reverse = (str) => str.split('').reverse().join('');

console.log(reverse('sula'));

// 9. Parašykite funkciją, kuri nustato, ar pateiktas tekstas yra palindromas.

function palindrom(str) {
    const palin = str.split('').reverse().join('');
    return str === palin;
}

console.log(palindrom('savas'));

// 10. Sukurkite funkciją, kuri priima skaičių ir grąžina true, jei skaičius yra lyginis, ir false, jei skaičius yra nelyginis.

const even = (number) => number % 2 === 0;

console.log(even(5));

// 11.  Parašykite funkciją, kuri priima tekstą ir dvi eilutes: pakeistiną simbolį ir pakeitimo simbolį.Funkcija grąžina naują tekstą su pakeistais simboliais.

function replace(str, a, b) {
    return str.toLowerCase().replaceAll(a, b)
}

console.log(replace('mama', 'a', 'b'));

// 12. Sukurkite funkciją, kuri priima temperatūrą Celsijaus laipsniais ir konvertuoja ją į Farenheito laipsnius.

function convertToFar(a) {
    return (a * 1.8) + 32;
}

console.log(convertToFar(10));

// 13. Parašykite funkciją, kuri priima masyvą ir grąžina naują masyvą be dublikatų.

function dublicateRemove(arr) {
    const newArr = [];
    for (let n of arr) {
        if (!newArr.includes(n)) {
            newArr.push(n)
        }
    }
    return newArr;
}

console.log(dublicateRemove([5, 9, 3, 7, 3, 9, 15]));

// 14. Sukurkite funkciją, kuri priima skaičių ir grąžina true, jei skaičius yra pirminis, ir false, jei ne.

function isPrime(number) {
    let isPrime = true;
    if (number === 1) {
        isPrime = false;
    } else if (number > 1) {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false;
            }
        }
        return isPrime;
    }
}

console.log(isPrime(2));

// 15. Parašykite funkciją, kuri priima masyvą skaičių ir grąžina jį surikiuotą mažėjančia tvarka.

function toMin(arr) {
    return arr.sort((a, b) => b - a);
}

console.log(toMin([5, 9, 3, 7]));

// 16.  Sukurkite funkciją, kuri priima du skaičius kaip pradžios ir pabaigos intervalo ribas ir grąžina visų skaičių, esančių tame intervale, sumą.

function intervalSum(a, b) {
    let sum = 0;
    for (let i = a; i <= b; i++) {
        sum += i;
    }
    return sum;
}

console.log(intervalSum(5, 9));

// 17.  Parašykite funkciją, kuri priima tekstą ir grąžina jį, pakeisdamas kiekvieną raidę į sekantį raidę abėcėlėje.

function replaceToNext(str) {
    var newStr = '';
    for (var i = 0; i < str.length; i++) {
        newStr += String.fromCharCode(str.charCodeAt(i) + 1);
    }
    return newStr;
}

console.log(replaceToNext('mama'));

// 18.  Sukurkite funkciją, kuri priima gimimo metus ir grąžina asmens amžių.

function age(year) {
    return 2024 - year;
}

console.log(age(1983));

// 19.Parašykite funkciją, kuri priima tekstą ir simbolį, o grąžina, kiek kartų tas simbolis pasikartoja tekste.

function countSymbol(str, s) {
    const arr = str.split('');
    let count = 0;
    for (let a of arr) {
        a === s ? count++ : count;
    }
    return count;
}

console.log(countSymbol('makaliuzas', 'a'));

// Paskutinė užduotis sunkesnė ir jei pasirodė praeitos užduotys per lengvos galite pasipraktikuoti su šita:)
// 20. Parašykite funkciją, kuri priima kelių masyvų sąrašą ir grąžina naują masyvą, kuris sudarytas tik iš tų elementų, kurie pasikartoja visuose pradiniuose masyvuose.
// Reikalavimai:
// Universalumas: funkcija turėtų veikti su bet kokiu masyvu sudarytu iš skaičių.
// Veiksmingumas: stenkitės optimizuoti funkciją taip, kad ji veiktų kuo efektyviau su dideliais masyvais.
// Unikalumas: grąžinamame masyve neturėtų būti pasikartojančių elementų.


function onlyRepeat(arr1, arr2) {
    const newArr = arr1.filter(element => arr2.includes(element));
    return [... new Set(newArr)]
}

console.log(onlyRepeat([1, 3, 5, 5, 8, 10, 9], [12, 5, 66, 3]));

function onlyRepeat1(a, b, c) {
    const duplicates = a.filter(i => b.includes(i) && c.includes(i));
    return duplicates;
}

console.log(onlyRepeat1([1, 3, 5, 5, 8, 10, 9], [12, 5, 66, 3], [34, 5, 55, 28, 3, 98]));