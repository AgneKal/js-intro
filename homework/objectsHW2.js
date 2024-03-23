// 1. Masyvo Elementų Filtravimas: Sukurkite funkciją, kuri naudojant for ciklą iš masyvo išrenka ir grąžina naują masyvą su elementais, kurie tenkina tam tikrą sąlygą.
console.log(`\n---- 1 užduotis----\n`);
const mas1 = [3, 15, 71, 2, 8, 9, 23, 78, 3, 35];

function findDivFromFive(arr) {
    const newArr = [];
    for (let i = 0; i < mas1.length; i++) {
        if (mas1[i] % 5 === 0) {
            newArr.push(mas1[i]);
        }
    }
    return newArr;
}

console.log(findDivFromFive(mas1));

// 2. Unikalių Reikšmių Radimas: Turite masyvą su pasikartojančiomis reikšmėmis.Naudodami for ciklą, sukurkite naują masyvą, kuriame būtų tik unikalios reikšmės.
console.log(`\n---- 2 užduotis----\n`);
const mas2 = [3, 15, 35, 71, 2, 8, 9, 23, 2, 78, 9, 35];
const newMas2 = [];

for (let i = 0; i < mas2.length; i++) {
    let isUnique = true;
    const arrNumber = mas2[i];
    for (let j = 0; j < newMas2.length; j++) {
        if (arrNumber === newMas2[j]) {
            isUnique = false;
            break;
        }
    }
    if (isUnique) {
        newMas2.push(arrNumber)
    }
}

console.log(newMas2);

// 3. Objekto Gylis: Parašykite funkciją, kuri naudodama for in ciklą ir rekursiją, grąžintų objekto gylį(kiek giliausiai objektas turi įdėtinius objektus).
console.log(`\n---- 3 užduotis----\n`);
const obj = {
    fauna: {
        bestuburiai: {
            veziagyviai: {
                ziaunakojai: {
                    sakotausiai: 100,
                    kriaukliaveziai: 120,
                    besarviai: 75
                }
            },
            vabzdziai: {
                vabalai: {
                    ivairiaedziai: 23,
                    plesrieji: {
                        zygiai: 78,
                        dusios: {
                            duseles: 56,
                            deronektai: 3
                        }
                    }
                },
                drugiai: 800
            }
        },
        stuburiniai: {
            zinduoliai: {
                pirmazveriai: 1,
                tikrazveriai: {
                    sterbliniai: 87,
                    placentiniai: {
                        kirstukai: 44,
                        banginiai: {
                            geltonieji: 3,
                            rauksletieji: {
                                finvalas: 2,
                                seivalas: 6
                            }
                        },
                        ruoniniai: {
                            ausytieji: 34,
                            tikrieji: 23
                        }
                    }
                }
            }
        }
    },
    flora: {
        medziai: {
            spygliuociai: 6,
            lapuociai: 45
        },
        krumai: {
            alyvos: 5,
            ievos: 4,
            agrastai: {
                raudonieji: 2,
                baltieji: 5,
                zalieji: 22
            }
        }
    }
}

// function howDeep(obj) {
//     let counter = 0;
//     for (let key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             if (typeof obj[key] === 'object') {
//                 counter += howDeep(obj[key]);
//             }
//             counter++
//         }
//     }
//     return counter;
// }

//console.log(howDeep(obj));

// function deepCounter(obj, depth = 0) {
//     for (let key in obj) {
//         if (typeof obj[key] === 'object') {
//             depth = deepCounter(obj[key], depth++);
//         }
//     }
//     return depth;
// }

// console.log(deepCounter(obj));

// function countObjectMaxDepth(o) {
//     const depths = [];
//     const getDepths = (object) => {
//         const items = Object.values(object);
//         let r = 0;

//         for (let item of items) {
//             if (typeof item === 'object' && Object.keys(item).length > 0) {
//                 const depth = getDepths(item);
//                 r += depth;
//                 depths.push(depth)
//             } else {
//                 r = 1;
//             }
//         }

//         return r;
//     }

//     getDepths(o);

//     return Math.max(...depths);
// }

// console.log(countObjectMaxDepth(obj));

function findMaxDepth(obj) {
    let maxDepth = 0;

    function intoDeep(obj, depth) {
        for (let key in obj) {
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                intoDeep(obj[key], depth + 1);
            }
        }
        if (depth > maxDepth) {
            maxDepth = depth;
        }
    }

    intoDeep(obj, 1);
    return maxDepth;
}

console.log(`Giliausias masyvas ${findMaxDepth(obj)} lygyje.`);

// 4. Masyvo Atvirkštinis: Turite skaičių masyvą.Naudodami for ciklą, sukurkite naują masyvą, kurio elementai būtų pradinio masyvo, bet eilės atvirkščiai.
console.log(`\n---- 4 užduotis----\n`);
const arr = [1, 2, 3, 4, 5];

function arrReverse(arr) {
    const arrReversed = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        arrReversed.push(arr[i]);
    }
    return arrReversed;
}


console.log(`Verčiamas masyvas: ${arr.join(', ')}.\nAtvirkščias masyvas: ${arrReverse(arr).join(', ')}.`);


// 5. Raktų Filtravimas Objekte: Turite objektą su daugybe savybių.Sukurkite funkciją, kuri naudojant for in ciklą, grąžina naują objektą, kuriame yra tik tas savybės, kurios tenkina tam tikrą sąlygą.
console.log(`\n---- 5 užduotis----\n`);

const cityData = {
    "Austin": 964254,
    "Charlotte": 885708,
    "Chicago": 2693976,
    "Columbus": 879170,
    "Dallas": 1343573,
    "Denver": 727211,
    "Fort Worth": 895008,
    "Houston": 2320268,
    "Indianapolis": 877584,
    "Jacksonville": 903889,
    "Los Angeles": 3979576,
    "New York": 8537673,
    "Philadelphia": 1584064,
    "Phoenix": 1680992,
    "San Antonio": 1547253,
    "San Diego": 1423851,
    "San Francisco": 883305,
    "San Jose": 1035317,
    "Seattle": 744955,
    "Washington": 705749
};

function findMillionCities(obj) {
    const millionCities = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key) && obj[key] >= 1000000) {
            millionCities[key] = obj[key];
        }
    }
    return millionCities
}

console.log(findMillionCities(cityData));

// 6. Suminė Vertė Objekte: Turite objektą, kurio savybės yra skaičiai.Naudodami for in ciklą, apskaičiuokite visų objekto savybių sumą.
console.log(`\n---- 6 užduotis----\n`);

function citieziensSum(obj) {
    let sum = 0;
    for (let key in obj) {
        sum += obj[key];
    }
    return sum;
}

console.log(citieziensSum(cityData));

// 7. Masyvo Elementų Kiekis: Turite masyvą su skirtingų tipų elementais.Naudodami for ciklą, suskaičiuokite, kiek yra kiekvieno tipo elementų.
console.log(`\n---- 7 užduotis----\n`);

const mixedArr = ['Hello', true, { key: 'value' }, 42, 'World', false, { foo: 'bar' }, 3.14, 'OpenAI', true, { x: 10, y: 20 }, 7, 'JavaScript', false, { a: 1, b: 2 }, 99, 'AI', true, { name: 'John', age: 30 }, 0, 'Hi'];

function countingTypes(arr) {
    const typesObj = {
        string: 0,
        number: 0,
        boolean: 0,
        object: 0,
    };
    for (let i = 0; i < arr.length; i++) {
        typesObj[typeof arr[i]]++
    }
    return typesObj;
}

console.log(countingTypes(mixedArr));


// 8. Objekto Konversija Į Masyvą: Sukurkite funkciją, kuri objektą(raktai ir reikšmės) konvertuotų į masyvą, kur kiekvienas elementas būtų[raktas, reikšmė] pora.
console.log(`\n---- 8 užduotis----\n`);


// 9. Dinaminis Objekto Sudarymas: Naudodami for ciklą, sukurti objektą, kurio raktai yra skaičiai nuo 1 iki n, o reikšmės - tie skaičiai pakelti kvadratu.
console.log(`\n---- 9 užduotis----\n`);


// 10. Sąlyginės Reikšmės Objekte: Turite objektą, kuriame saugomos įvairios vartotojų savybės(pvz., vardas, amžius, miestas).Sukurkite funkciją, kuri naudojant for in ciklą, pakeistų tam tikrų savybių reikšmes, jeigu jos tenkina nurodytą sąlygą(pvz., jeigu vartotojo amžius yra mažesnis nei 18, pridėkite savybę pilnametis: false).
console.log(`\n---- 10 užduotis----\n`);

