const students = [
    { name: 'Jonas', age: 99, isMarried: true },
    { name: 'Maryte', age: 88, isMarried: false },
    { name: 'Petras', age: 77, isMarried: false },
    { name: 'Ona', age: 66, isMarried: true },
];

for (let i = 0; i < students.length; i++) {
    const student = students[i];
    console.log(`${student.name}: ${student.age}`);
}


// for-of ciklas dirba su masyvais
for (const student of students) {
    console.log(`${student.name}: ${student.age}`)
}

const numbers = [10, 2, 8, 4, 6];

for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log('+++', number);
}

for (const number of numbers) {
    console.log('+++', number);
}


const text = 'Pomidoras';

for (let i = 0; i < text.length; i++) {
    const letter = text[i];
    console.log(i, letter);
}

for (const letter of text) {
    console.log(letter);
}