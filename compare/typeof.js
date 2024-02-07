/*
TYPEOF - duomenis tipo nustatymo operatorius
*/

const a = typeof 5;
console.log(a);

const b = typeof 'aasfsd';
console.log(b);

const c = typeof true;
console.log(c);

function example() {
    return 777;
}

const d = typeof example;
console.log(d);

const e = typeof example();
console.log(e);

const f = typeof undefined;
console.log(f);

const g = typeof typeof 42069;
// const g = typeof (typeof 42069);
// const g = typeof ('number');
// const g = typeof 'number';
// const g = 'String';
console.log(g);



