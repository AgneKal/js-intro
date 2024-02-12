const student = {
    name: 'Jonas',
    age: 99,
    isMarried: true,
    length: Infinity,
}

// console.log(student.name);
// console.log(student.age);
// console.log(student.isMarried);

// console.log(student['name']);
// console.log(student['age']);
// console.log(student['isMarried']);

const noriuSuzinoti = 'name';
// const noriuSuzinoti = 'age';
// const noriuSuzinoti = 'isMarried'; 

const name = student[noriuSuzinoti];
console.log(name);

console.log([10, 555].length);
console.log('ewre'.length);
console.log(student.length);

const keys = Object.keys(student);
console.log(keys);

const keysCount = keys.length;
console.log(keysCount);

console.clear();

const car = {
    brand: 'Audi',
    model: 80,
    color: 'red',
    price: 300,
};

const carKeys = Object.keys(car);
console.log(carKeys);

for (let i = 0; i < carKeys.length; i++) {
    const key = carKeys[i];
    const value = car[key];
    console.log(i, key, value);
}

//dirba su objektais
for (const key in car) {
    const value = car[key];
    console.log(key, value);
}

