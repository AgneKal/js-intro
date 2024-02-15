const marks = [10, 2, 8, 4, 6];
const doubleMarks = [];

// for (let i=0; i<marks.length; i++) {
//     const number = marks[i];
//     doubleMarks.push(number * 2);
// }

for (const number of marks) {
    doubleMarks.push(number * 2);
}

console.log(marks);
console.log(doubleMarks);

const tripleMarks = marks.map(number => number * 3);
console.log(tripleMarks);

console.clear();

// Jeigu skaicius teigiamas, palikti koks yra
// Jeigu skaicius neigiamas - padauginti is 10
const randomNumbers = [10, -2, 3.14, 8.77, 444444, -66.6];
const randomNumbers2 = [];

for (const number of randomNumbers) {
    randomNumbers2.push(number > 0 ? number : number * 10);
}

console.log(randomNumbers);
console.log(randomNumbers2);

const rn3 = randomNumbers.map(n => n > 0 ? n : n * 10);
console.log(rn3);

console.clear();

const pazymiai = [10, 2, 8, 4, 6];
//                10, 4, 10, 8, 10

function geresnisPazymys(n) {
    if (n * 2 > 10) {
        return 10;
    }

    return n * 2;
}

function updateMarks(marks) {
    const newMarks = [];

    for (const mark of marks) {
        newMarks.push(geresnisPazymys(mark));
    }

    return newMarks;
}

console.log(updateMarks(pazymiai));

const geresniPazymiai = pazymiai
    .map(n => n * 2 > 10 ? 10 : n * 2);
console.log(geresniPazymiai);

const geresniPazymiai2 = pazymiai.map(geresnisPazymys);
console.log(geresniPazymiai2);


const students = ['Jonas', 'Maryte', 'Petras', 'Ona'];

function lastChar(text) {
    // const lastCharIndex = text.length - 1;
    // return text[lastCharIndex];

    return text[text.length - 1];
}

const abbr = students.map(lastChar);
console.log(abbr);