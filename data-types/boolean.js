/*
BOOLEAN - loginė reikšmė

Galimos reikšmės:
- true
- false

Loginiai operatoriai
- && (and) - visada turi pirmenybę
- || (or)
- ! (not/invert)

*/

const arSninga = true;
const arLyja = false;

const dabartineTemp = -1;
const siltaNuoTemp = 20;
const arSilta = false;

const vardas = '';
const arNurodytasVardas = false;

console.log(true, false);

console.clear();

// SPORTAS
// - varžybos vyksta tik dienos metu
// - varžybos vyksta tik jei turim bent dvi komandas

const arDiena = false;
const arYraDviKomandos = true;

// Varžybos vyksta kai tenkinanis VISOS sąlygos
const arVykstaVarzybos = arDiena && arYraDviKomandos;
console.log('Varzybos:', arVykstaVarzybos);

// KERMOSIUS
// - vaikas norėtų gaidelio
// - vaikas norėtų lazdelės
// - vaikas norėtų grybuko

const arTurimGaidelio = false;
const arTurimLazdeles = true;
const arTurimGrybuko = false;

// Saldainį gauna kai turima BENT VIENĄ prekę
const arVaikasGausSaldaini = arTurimGaidelio || arTurimLazdeles || arTurimGrybuko;
console.log('Kermosius:', arVaikasGausSaldaini);

const a = true;
const b = false;
const c = true;

console.log(a && b, '->', false);
console.log(a || b, '->', true);
console.log(a || b || c, '->', true);
console.log(a && b && c, '->', false);
console.log(a && b || c, '->', true);
console.log(a || b && c, '->', true);

console.clear();

console.log(false && false || false, '->', false);
console.log(false && false || true, '->', true);
console.log(false && true || false, '->', false);
console.log(false && true || true, '->', true);
console.log(true && true || false, '->', true);
console.log(true && true || true, '->', true);
console.log(true && false || false, '->', false);
console.log(true && false || true, '->', true);

console.clear();
console.log(false || false && false, '->', false);
console.log(false || false && true, '->', false);
console.log(false || true && false, '->', false);
console.log(false || true && true, '->', true);
console.log(true || true && true, '->', true);
console.log(true || false && true, '->', true);
console.log(true || true && false, '->', false);
console.log(true || false && false, '->', false);

console.log((true && true) || (false && false));
console.log((true && true) || false);

console.log(((true && true) || false) && false);

console.clear();

console.log(!true);
console.log(!false);

const arMiega = false;
console.log(!arMiega);

console.log(!!true);
console.log(!!false);

console.clear();

// Visi stringai yra true, išskyrus tuščius
console.log(!!'Labas', false, true);
console.log(!!'', true, false);

// Visi skaičiai yra true, išskyrus 0 (nulį)
console.log(!!5);
console.log(!!-5);
console.log(!!0);

// positive, negative numbers
// truthy, falsy values

console.clear();

console.log(false && false || false || false, '->', false);
console.log(false && false || false || true, '->', true);
console.log(false && false || false && false, '->', false);
console.log(false && false || false && true, '->', false);

console.log(false && false || true || false, '->', true);
console.log(false && false || true || true, '->', true);
console.log(false && false || true && false, '->', false);
console.log(false && false || true && true, '->', true);

console.log(false && true || false || false, '->', false);
console.log(false && true || false || true, '->', true);
console.log(false && true || false && false, '->', false);
console.log(false && true || false && true, '->', false);

console.log(false && true || true || false, '->', true);
console.log(false && true || true || true, '->', true);
console.log(false && true || true && false, '->', false);
console.log(false && true || true && true, '->', true);

console.log(true && true || false || false, '->', true);
console.log(true && true || false || true, '->', true);
console.log(true && true || false && false, '->', true);
console.log(true && true || false && true, '->', true);

console.log(true && true || true || false, '->', true);
console.log(true && true || true || true, '->', true);
console.log(true && true || true && false, '->', true);
console.log(true && true || true && true, '->', true);

console.log(true && false || false || false, '->', false);
console.log(true && false || false || true, '->', true);
console.log(true && false || false && false, '->', false);
console.log(true && false || false && true, '->', false);

console.log(true && false || true || false, '->', true);
console.log(true && false || true || true, '->', true);
console.log(true && false || true && false, '->', false);
console.log(true && false || true && true, '->', true);

console.log(false && false && false || false, '->', false);
console.log(false && false && false || true, '->', true);
console.log(false && false && false && false, '->', false);
console.log(false && false && false && true, '->', false);

console.log(false && false && true || false, '->', false);
console.log(false && false && true || true, '->', true);
console.log(false && false && true && false, '->', false);
console.log(false && false && true && true, '->', false);

console.log(false && true && false || false, '->', false);
console.log(false && true && false || true, '->', true);
console.log(false && true && false && false, '->', false);
console.log(false && true && false && true, '->', false);

console.log(false && true && true || false, '->', false);
console.log(false && true && true || true, '->', true);
console.log(false && true && true && false, '->', false);
console.log(false && true && true && true, '->', false);

console.log(true && true && false || false, '->', false);
console.log(true && true && false || true, '->', true);
console.log(true && true && false && false, '->', false);
console.log(true && true && false && true, '->', false);

console.log(true && true && true || false, '->', false);
console.log(true && true && true || true, '->', true);
console.log(true && true && true && false, '->', false);
console.log(true && true && true && true, '->', true);

console.log(true && false && false || false, '->', false);
console.log(true && false && false || true, '->', true);
console.log(true && false && false && false, '->', false);
console.log(true && false && false && true, '->', false);

console.log(true && false && true || false, '->', false);
console.log(true && false && true || true, '->', true);
console.log(true && false && true && false, '->', false);
console.log(true && false && true && true, '->', false);

console.log(false || false && false || false, '->', false);
console.log(false || false && false || true, '->', true);
console.log(false || false && false && false, '->', false);
console.log(false || false && false && true, '->', false);

console.log(false || false && true || false, '->', false);
console.log(false || false && true || true, '->', true);
console.log(false || false && true && false, '->', false);
console.log(false || false && true && true, '->', false);

console.log(false || true && false || false, '->', false);
console.log(false || true && false || true, '->', true);
console.log(false || true && false && false, '->', false);
console.log(false || true && false && true, '->', false);

console.log(false || true && true || false, '->', true);
console.log(false || true && true || true, '->', true);
console.log(false || true && true && false, '->', false);
console.log(false || true && true && true, '->', true);

console.log(true || true && true || false, '->', true);
console.log(true || true && true || true, '->', true);
console.log(true || true && true && false, '->', true);
console.log(true || true && true && true, '->', true);

console.log(true || false && true || false, '->', true);
console.log(true || false && true || true, '->', true);
console.log(true || false && true && false, '->', true);
console.log(true || false && true && true, '->', true);

console.log(true || true && false || false, '->', true);
console.log(true || true && false || true, '->', true);
console.log(true || true && false && false, '->', true);
console.log(true || true && false && true, '->', true);

console.log(true || false && false || false, '->', true);
console.log(true || false && false || true, '->', true);
console.log(true || false && false && false, '->', true);
console.log(true || false && false && true, '->', true);

console.log(false || false || false || false, '->', false);
console.log(false || false || false || true, '->', true);
console.log(false || false || false && false, '->', false);
console.log(false || false || false && true, '->', false);

console.log(false || false || true || false, '->', true);
console.log(false || false || true || true, '->', true);
console.log(false || false || true && false, '->', false);
console.log(false || false || true && true, '->', true);

console.log(false || true || false || false, '->', true);
console.log(false || true || false || true, '->', true);
console.log(false || true || false && false, '->', true);
console.log(false || true || false && true, '->', true);

console.log(false || true || true || false, '->', true);
console.log(false || true || true || true, '->', true);
console.log(false || true || true && false, '->', true);
console.log(false || true || true && true, '->', true);

console.log(true || true || true || false, '->', true);
console.log(true || true || true || true, '->', true);
console.log(true || true || true && false, '->', true);
console.log(true || true || true && true, '->', true);

console.log(true || false || true || false, '->', true);
console.log(true || false || true || true, '->', true);
console.log(true || false || true && false, '->', true);
console.log(true || false || true && true, '->', true);

console.log(true || true || false || false, '->', true);
console.log(true || true || false || true, '->', true);
console.log(true || true || false && false, '->', true);
console.log(true || true || false && true, '->', true);

console.log(true || false || false || false, '->', true);
console.log(true || false || false || true, '->', true);
console.log(true || false || false && false, '->', true);
console.log(true || false || false && true, '->', true);