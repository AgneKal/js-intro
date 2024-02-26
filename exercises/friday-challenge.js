
console.log('--------------------------');
// Sukurti du kintamuosius.Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus(Jonas Jonaitis).Atspausdinti trumpesnį stringą.

const actorName = 'Johnson';
const actorSurName = 'Lenon';

if (actorName.length > actorSurName.length) {
    console.log(actorName);
} else if (actorName.length === actorSurName.length) {
    console.log(actorName, actorSurName);
} else {
    console.log(actorSurName);
}

// ternary padaryti kaip kita varianta

console.log('--------------------------');
// Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus(nebūtinai tikrus).Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį:
// "Aš esu Vardenis Pavardenis. Man yra XX metai(ų)".

const name = 'Jurgita';
const surname = 'Jonaityte';
const birthday = 1992;
const year = 2024;

console.log(`"Aš esu ${name} ${surname}. Man yra ${year - birthday} metai(ų)"`);

console.log('--------------------------');
// Sukurti du kintamuosius.Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus.Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš trijų paskutinių vardo ir pavardės kintamųjų raidžių.Jį atspausdinti.

const text = actorName.slice(-3) + actorSurName.slice(-3);
console.log(text);

console.log('--------------------------');
// Sukurti kintamąjį su stringu: “Once upon a time in hollywood”. Jame visas “o” (didžiąsias ir mažąsias) pakeisti žvaigždutėm “*”.  Rezultatą atspausdinti.

const hollywood = 'Once upon a time in hollywood';
const hollywoodO = hollywood.toLowerCase().replaceAll('o', '*');
console.log(hollywoodO);

console.log('--------------------------');
// Sukurkite keturis kintamuosius kuriems sugeneruokite atsitiktines reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų.

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const a = random(0, 2);
console.log(a);

const b = random(0, 2);
console.log(b);

const c = random(0, 2);
console.log(c);

const d = random(0, 2);
console.log(d);

const array = [a, b, c, d];
console.log(array);

const count5 = Array(3).fill(0);

for (let i = 0; i < array.length; i++) {
    count5[array[i]]++;
}

console.log(`0: ${count5[0]}, 1: ${count5[1]}, 2: ${count5[2]}`);

console.log('--------------------------');
// Pasinaudokite atsitiktinio skaičiaus generavimo funkcija.Sukurkite du kintamuosius ir naudodamiesi funkcija jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės.Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.


function random2(min, max) {
    return Math.random() * (max - min + 1) + min;
}
const e = random2(0, 4);
console.log(e);
const f = random2(0, 4);
console.log(f);

function dalyba(n1, n2) {
    const didesnis = n1 > n2 ? n1 : n2;
    const mazesnis = n1 > n2 ? n2 : n1;
    const result = didesnis / mazesnis;

    return Math.round(result * 100) / 100;
}

console.log(dalyba(e, f));

console.log('--------------------------');
// Naudokite funkciją ir sukurkite tris kintamuosius kuriems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir atspausdinkite vidurinę reikšmę.

const g = random(0, 25);
console.log(g);
const h = random(0, 25);
console.log(h);
const j = random(0, 25);
console.log(j);

const array2 = [g, h, j];
console.log(array2);

function midleNumber(arr) {
    const sortArray = arr.sort((a, b) => a - b);
    console.log(sortArray);
    return sortArray[1];
}
console.log(midleNumber(array2));

console.log('--------------------------');
// Sukurti du kintamuosius.Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus.Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš pirmų vardo ir pavardės kintamųjų raidžių.Jį atspausdinti.


const textFirstLetters = actorName.slice(0, 1) + actorSurName.slice(0, 1);
console.log(textFirstLetters);

console.log('--------------------------');
// Parašyti kodą, kuris generuotų atsitiktinį stringą iš lotyniškų mažųjų raidžių.Stringo ilgis 3 simboliai.

////////////////012345
const abcLot = 'abcdefghijklmnopqrstuvwxyz';
//console.log(abcLot);

function random3(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomWord(n) {
    let result = '';
    for (let i = 0; i < n; i++) {
        const randomLetter = abcLot[random3(0, 25)];
        result += randomLetter;
    }
    return result;
}

console.log(randomWord(3));