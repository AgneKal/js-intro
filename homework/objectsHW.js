// Darbas su objektais
// 1. Duomenų Objektas: Sukurkite objektą, kuris saugotų jūsų mėgstamiausios knygos pavadinimą, autorių ir leidimo metus. Išveskite kiekvieną objekto savybę naudojant for in ciklą.

const favoriteBook = {
    name: 'Harry Potter',
    author: 'J.K.Rowling',
    published: 1997
}
for (let a in favoriteBook) {
    console.log(a);
}

// 2. Vartotojų Masyvas: Sukurkite masyvą, kuriame būtų kelios objektų reikšmės, kiekviena reikšmė turėtų vartotojo vardą ir amžių. Naudodami for of ciklą, išveskite kiekvieno vartotojo vardą ir amžių.

const users = [{ name: 'Jonas', age: 15 }, { name: 'Petras', age: 18 }];

for (let u of users) {
    console.log(`${u.name} ${u.age}`);
}

// 3. Sąrašo Filtravimas: Turite objektų masyvą, kuriame saugoma informacija apie įvairius produktus (pavadinimas, kaina, kategorija). Parašykite funkciją, kuri naudojant for of ciklą grąžintų tik tuos produktus, kurie priklauso tam tikrai kategorijai.

const products = [{ name: 'Samsung', price: 500, category: 'TV' }, { name: 'HP', price: 1450, category: 'PC' }, { name: 'Apple', price: 1000, category: 'TV' }];

function findCategory(category) {
    const productOfCategory = [];
    for (let p of products) {
        p.category === category ? productOfCategory.push(p) : productOfCategory;
    }
    return productOfCategory
}

console.log(findCategory('TV'));

// 4. Objekto Kopijavimas: Parašykite funkciją, kuri naudojant for in ciklą sukurtų objekto kopiją.

const favoriteBook2 = {
    name: 'Harry Potter',
    author: 'J.K.Rowling',
    published: 1997
}


function makeCopy(obj) {
    const copyOfObj = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            copyOfObj[key] = obj[key];
        }
    }
    return copyOfObj;
}

const newFavoriteBook = makeCopy(favoriteBook2);

newFavoriteBook.pages = 280;
newFavoriteBook.published = 1994;
favoriteBook2.cover = 'hard';

console.log(favoriteBook2, newFavoriteBook);

// 5. Raktų ir Reikšmių Atrinkimas: Turite vartotojo objektą su įvairiomis savybėmis. Naudodami for in ciklą, sukurti du masyvus: viename saugokite objekto raktus, o kitame - reikšmes.

const favoriteBook3 = {
    name: 'Harry Potter',
    author: 'J.K.Rowling',
    published: 1997
}

const objKey = [];
const objValue = [];

for (let a in favoriteBook3) {
    objKey.push(a)
    objValue.push(favoriteBook3[a])
}

console.log(objKey);
console.log(objValue);

// 6. Masyvo Suma: Turite masyvą, kuriame yra skaičiai. Naudodami for ciklą, apskaičiuokite masyvo skaičių sumą.

const arr = [5, 8, 9, 3];
const sumArr = arr.reduce((a, b) => a + b)

console.log(sumArr);

let sum = 0;
for (let a of arr) {
    sum += a;
}

console.log(sum);

// 7. Didžiausias Skaičius: Turite skaičių masyvą. Naudodami for ciklą, raskite didžiausią skaičių masyve.

const arr2 = [5, 8, 9, 3, 17, 99, 55, 123];

function highestNumber(arr) {
    let highestNumber = 0;
    for (let a of arr) {
        a > highestNumber ? highestNumber = a : highestNumber;
    }
    return highestNumber
}
console.log(highestNumber(arr2));

// 8. Objekto Savybių Skaičius: Sukurkite funkciją, kuri naudojant for in ciklą, grąžina objekto savybių skaičių.

const favoriteBook4 = {
    name: 'Harry Potter',
    author: 'J.K.Rowling',
    published: 1997
}

function countKey(obj) {
    let counter = 0;
    for (let a in obj) {
        a ? counter++ : counter
    }
    return counter
}

console.log(countKey(favoriteBook4));

// 9. Sąlyginis Objektų Atrinkimas: Turite vartotojų masyvą su objektais, kuriuose yra vardas ir amžius. Naudodami for of ciklą, išveskite tik tuos vartotojus, kurių amžius yra didesnis nei 18.

const users1 = [{ name: 'Jonas', age: 15 }, { name: 'Petras', age: 19 }, { name: 'Janina', age: 23 }];

for (let u of users1) {
    u.age > 18 ? console.log(u.name) : false;
}

// 10. Objekto Savybių Keitimas: Turite objektą, kuriame saugomi įvairių žmonių amžiai. Naudodami for in ciklą, padidinkite kiekvieno asmens amžių 1 metais.

const ages = {
    Jonas: 15,
    Petras: 19,
    Janina: 23
};

for (let a in ages) {
    ages[a]++
}

console.log(ages);