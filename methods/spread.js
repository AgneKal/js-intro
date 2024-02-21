const marks = [10, 2, 8, 4, 6, 0];

const first = marks[0];
const second = marks[1];
const third = marks[2];
const restMarks = marks.slice(3);
// const restMarks = marks.filter((_, index) => index >= 2);

console.log(first, second, third, restMarks);

// [] = array
// vadiname destrukturizavimas
// ... yra "rest" (lt. likę, visi kiti) operatorius
const [a, b, c, ...restABC] = marks;
console.log(a, b, c, restABC);

const t1 = [1, 2];
const t2 = [3, 4, 5];
const t3 = [6, 7, 8, 9];

const t12 = t1.concat(t2);
console.log(t12);

const t123 = t1.concat(t2, t3);
console.log(t123);

// ... yra "spread" (lt. išskleidimo) operatorius
const rest12 = [...t1, ...t2];
console.log(rest12);

const rest123 = [...t1, ...t2, ...t3];
console.log(rest123);

console.clear();

const car = {
    brand: 'Audi',
    model: 80,
    color: 'red',
    doors: 5,
    wheels: 4,
    gear: {
        type: 'manual',
        count: 5,
    },
};

const { brand, color, gear, ...restCar } = car;
const { type } = gear;

console.log(brand, color, gear, type);
console.log(restCar);


const xBrand = car.brand;
const xColor = car.color;
const xGear = car.gear;
const xType = xGear.type;

const usedCarKeys = ['brand', 'color', 'gear'];
const xRestCar = {};
//- brand, color, gear
//+ model, doors, wheels

for (const key in car) {
    if (!usedCarKeys.includes(key)) {
        xRestCar[key] = car[key];
    }
}

console.log(xRestCar);

const o1 = { a: 'aaa' };
const o2 = { b: 'bbb' };
const o3 = { c: 'ccc' };

const o12 = {};

for (const key in o1) {
    o12[key] = o1[key];
}

const o2keys = Object.keys(o2);
for (let i = 0; i < o2keys.length; i++) {
    const key = o2keys[i];
    o12[key] = o2[key];
}

console.log(o12);

const restO12 = { ...o1, ...o2 };
console.log(restO12);