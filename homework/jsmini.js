// JavaScript mini užduotys

console.log('KINTAMŲJŲ INICIJAVIMAS')
let number = 0

console.log(`--- ${++number} ---`);
// 1. Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
// a. Po kiekvieno jų inicijavimo, išvesti į console

const a = 1;
console.log(a);

const b = 2;
console.log(b);

const c = 3;
console.log(c);

console.log(`--- ${++number} ---`);
// 2. Sukurti 3 kintamuosius su teksto tipo reikšmėmis
// a. Po kiekvieno jų inicijavimo, išvesti į console

const pirmas = 'Pirmas';
console.log(pirmas);

const antras = 'Antras';
console.log(antras);

const trecias = 'Trecias';
console.log(trecias);

console.log(`--- ${++number} ---`);
// 3.	Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
// a.Po kiekvieno jų inicijavimo, išvesti į console

const masyvas1 = [1, 2, 3, 4, 5];
console.log(masyvas1);

const masyvas2 = [1.9, 5.2, 2.7, 15.6, 17.2];
console.log(masyvas2);

const masyvas3 = [1, 9.5, 4.3, 18, 6.1];
console.log(masyvas3);

console.log(`--- ${++number} --- `);
// 4.	Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
// a.Po kiekvieno jų inicijavimo, išvesti į console

const masyvas4 = ['Jurgis', 'Antanas', 'Aloizas', 'Martynas', 'Petras'];
console.log(masyvas4);

const masyvas5 = ['Phoebe', 'Monica', 'Rachel', 'Janice', 'Carol'];
console.log(masyvas5);

const masyvas6 = ['pamatai', 'sienos', 'langas', 'durys', 'stogas'];
console.log(masyvas6);

console.log('VEIKSMAI SU KINTAMAISIAIS');
number = 0;

console.log(`--- ${++number} --- `);
// 1.	Susumuoti visus skaičiaus tipo kintamuosius
// a.Rezultatą išvesti į console

const sum = a + b + c;
console.log(sum);

console.log(`--- ${++number} --- `);
// 2.	Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
// a.Rezultatą išvesti į console

const sujungimas = `${pirmas} ${antras} ${trecias}`;
console.log(sujungimas);

const sujungimas1 = pirmas + ' ' + antras + ' ' + trecias;
console.log(sujungimas1);

console.log(`--- ${++number} --- `);
// 3.	Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
// a.	1 - 2 + 3 - 4 + 5
// b.Rezultatą išvesti į console

const verte1 = masyvas1[0] - masyvas1[1] + masyvas1[2] - masyvas1[3] + masyvas1[4];
console.log(verte1);

const verte2 = masyvas2[0] - masyvas2[1] + masyvas2[2] - masyvas2[3] + masyvas2[4];
console.log(verte2);

const verte3 = masyvas3[0] - masyvas3[1] + masyvas3[2] - masyvas3[3] + masyvas3[4];
console.log(verte3);

console.log(`--- ${++number} --- `);
// 4.	Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas

const verte41 = `${masyvas4[4]}, ${masyvas4[3]}, ${masyvas4[2]}, ${masyvas4[1]}, ${masyvas4[0]}`;
console.log(verte41);

const verte42 = masyvas4[4] + ', ' + masyvas4[3] + ', ' + masyvas4[2] + ', ' + masyvas4[1] + ', ' + masyvas4[0];
console.log(verte42);

console.log(`KINTAMŲJŲ PALYGINIMAS`);
number = 0;

// Priklausomai nuo sąlygos, susikurkite 2 skirtingų reikšmių nurodyto tipo kintamuosius.
// Lyginant, jei rezultatas tenkina palyginimo sąlygą(nurodytą žemiau), tai į console išvesti žodį “Pomidoras”, o jei sąlyga nėra tenkinama, išvesti sakinį “Bandykite kitą kartą.”.

const skc1 = 7;
const skc2 = 5;
console.log(`Sugalvoti skaiciai: ${skc1} ir ${skc2}`);

const txt1 = 'nebeprisikiskiakopusteliaudvome';
const txt2 = 'begemotas';
console.log(`Sugalvoti zodziai: ${txt1} ir ${txt2}`);

const sk1 = ['dramblys', 'stirna', 'zirafa', 'hiena'];
const sk2 = ['stalas', 'kede', 'spinta'];
console.log(`Sugalvoti sarasai: ${sk1} ir ${sk2}`);

const zodis = 'Pomidoras';
const fraze = 'Bandykite dar kartą';

console.log(`--- ${++number} --- `);
// 1.	Tarpusavyje palyginti skaičiaus tipo kintamuosius:
// a.kuris didesnis
// b.kuris mažesnis
// c.ar jie lygūs
// d.ar jie nelygūs
// e.kuris didesnis arba lygus
// f.kuris mažesnis arba lygus

if (skc1 > skc2) {
    console.log(zodis);
} else {
    console.log(fraze);
}

if (skc1 < skc2) {
    console.log(zodis);
} else {
    console.log(fraze);
}

if (skc1 === skc2) {
    console.log(zodis);
} else {
    console.log(fraze);
}

if (skc1 !== skc2) {
    console.log(zodis);
} else {
    console.log(fraze);
}

if (skc1 >= skc2) {
    console.log(zodis);
} else {
    console.log(fraze);
}

if (skc1 <= skc2) {
    console.log(zodis);
} else {
    console.log(fraze);
}

console.log(`--- ${++number} --- `);
// 2.	Išvesti teksto tipo kintamųjų ilgius

const txt1Ilgis = txt1.length;
const txt2Ilgis = txt2.length;
console.log(txt1Ilgis, txt2Ilgis);

console.log(`--- ${++number} --- `);
// 3.	Tarpusavyje palyginti teksto tipo kintamųjų ilgius:
// a.kuris didesnis
// b.kuris mažesnis
// c.ar jie lygūs
// d.ar jie nelygūs
// e.kuris didesnis arba lygus
// f.kuris mažesnis arba lygus

if (txt1Ilgis > txt2Ilgis) {
    console.log(zodis);
} else {
    console.log(fraze);
}

if (txt1Ilgis < txt2Ilgis) {
    console.log(zodis);
} else {
    console.log(fraze);
}

if (txt1Ilgis === txt2Ilgis) {
    console.log(zodis);
} else {
    console.log(fraze);
}

if (txt1Ilgis !== txt2Ilgis) {
    console.log(zodis);
} else {
    console.log(fraze);
}

if (txt1Ilgis >= txt2Ilgis) {
    console.log(zodis);
} else {
    console.log(fraze);
}

if (txt1Ilgis <= txt2Ilgis) {
    console.log(zodis);
} else {
    console.log(fraze);
}

console.log(`--- ${++number} --- `);
// 4.	Išvesti sąrašo tipo kintamųjų ilgius

const sk1Ilgis = sk1.length;
const sk2Ilgis = sk2.length;
console.log(sk1Ilgis, sk2Ilgis);

console.log(`--- ${++number} --- `);
// 5.	Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius:
// a.kuris didesnis
// b.kuris mažesnis
// c.ar jie lygūs
// d.ar jie nelygūs
// e.kuris didesnis arba lygus
// f.kuris mažesnis arba lygus

if (sk1Ilgis > sk2Ilgis) {
    console.log(zodis);
} else {
    console.log(fraze);
}

if (sk1Ilgis < sk2Ilgis) {
    console.log(zodis);
} else {
    console.log(fraze);
}

if (sk1Ilgis === sk2Ilgis) {
    console.log(zodis);
} else {
    console.log(fraze);
}

if (sk1Ilgis !== sk2Ilgis) {
    console.log(zodis);
} else {
    console.log(fraze);
}

if (sk1Ilgis >= sk2Ilgis) {
    console.log(zodis);
} else {
    console.log(fraze);
}

if (sk1Ilgis <= sk2Ilgis) {
    console.log(zodis);
} else {
    console.log(fraze);
}

console.log(`CIKLO FOR PANAUDOJIMAS`);
number = 0;

console.log(`--- ${++number} --- `);
// 1.	Suskaičiuoti ką gausime susumavus skaičius intervale tarp(imtinai):
// a.	0 … 0
// b.	0 … 4
// c.	0 … 100
// d.	574 … 815
// e.	- 50 … 50
// f.	- 70 … 30

const minSkc = -70;
const maxSkc = 30;
let suma = 0;

for (let sk = minSkc; sk <= maxSkc; sk++) {
    suma = suma + sk;
}
console.log(suma);

console.log(`--- ${++number} --- `);
// 2.	panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
// a.pvz.: “abcdef” -> “fedcba”

const raides = 'abcdef';
let raides2 = '';

for (let i = raides.length - 1; i >= 0; i--) {
    raides2 = raides2 + raides[i];
}
console.log(raides2);

console.log(`--- ${++number} --- `);
// 3.	Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
// a.	0 - 11
// b.	8 - 31
// c.	- 18 - 18
// d.rezultatą pateikti tokiu formatu:
// i.Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
//     ii.Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
//         iii.Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.

console.log(`FUNKCIJOS`);
number = 0;

// Parašyti funkcijas, kurios atitinka pateiktus reikalavimus, jei įvykdo reikiamus testus

console.log(`--- ${++number} --- `);
// 1.	Funkcija pavadinimu “tusciaFunkcija”:
// a.nepriima jokių kintamųjų
// b.neatlieka jokios vidinės logikos
// c.gražina boolean tipo reikšmę “false”
// d.TESTAS:
// i.console.log(tusciaFunkcija());
// ii.rezultatas: false

function tusciaFunkcija() {
    return false;
}
console.log(tusciaFunkcija());

console.log(`--- ${++number} --- `);
// 2.	Funkcija pavadinimu “daugyba”:
// a.priima du skaičiaus tipo kintamuosius
// b.atskirame kintamajame įsimena sandaugos reikšmę
// c.gražina saudaugos rezultatą
// d.TESTAI:
// i.console.log(daugyba(skaicius1, skaicius2));
// ii.console.log(daugyba(skaicius3, skaicius2));
// iii.console.log(daugyba(skaicius1, skaicius3));
// iv.rezultatas: teisingos reikšmės;

console.log(`--- ${++number} --- `);
// 3.	Funkcija pavadinimu “skaitmenuKiekisSkaiciuje”:
// a.priima vieną kintamąjį
// b.jei perduotas kintamasis nėra skaičiaus tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
// c.priešingu atveju, funkcija tęsia darbą
// d.į atskirą kintamąjį įsimena skaičių sudarančių skaitmenų kiekį
// e.gražina skaitmenų kiekį
// f.TESTAI:
// i.console.log(skaitmenuKiekisSkaiciuje(5));
// 1.	rezultatas: 1
// ii.console.log(skaitmenuKiekisSkaiciuje(781));
// 1.	rezultatas: 3
// iii.console.log(skaitmenuKiekisSkaiciuje(37060123456));
// 1.	rezultatas: 11
// iv.console.log(skaitmenuKiekisSkaiciuje(true));
// 1.	rezultatas: “Pateikta netinkamo tipo reikšmė.”
// v.console.log(skaitmenuKiekisSkaiciuje( “asd”));
// 1.	rezultatas: “Pateikta netinkamo tipo reikšmė.”
// vi.console.log(skaitmenuKiekisSkaiciuje(NaN));
// 1.	rezultatas: “Pateikta netinkamo tipo reikšmė.”

console.log(`--- ${++number} --- `);
// 4.	Funkcija pavadinimu “didziausiasSkaiciusSarase”:
// a.priima vieną kintamąjį
// b.jei perduotas kintamasis nėra sąrašo tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
// c.jei sąrašas yra tuščias, tai išveda pranešimą “Pateiktas sąrašas negali būti tuščias.”
// d.priešingu atveju, funkcija tęsia darbą
// e.pereina per visą pateiktą sąrašą ir į atskirą kintamąjį įsimena skaičių, kuris tuo metu yra didžiausias
// f.gražina didžiausią surastą skaičių
// g.TESTAI:
// i.console.log(didziausiasSkaiciusSarase([1]));
// 1.	rezultatas: 1
// ii.console.log(didziausiasSkaiciusSarase([1, 2, 3]));
// 1.	rezultatas: 3
// iii.console.log(didziausiasSkaiciusSarase([-5, 78, 14, 0, 18]));
// 1.	rezultatas: 78
// iv.console.log(didziausiasSkaiciusSarase([69, 69, 69, 69, 66]));
// 1.	rezultatas: 69
// v.console.log(didziausiasSkaiciusSarase([-1, -2, -3, -4, -5, -6, -7, -8]));
// 1.	rezultatas: -1
// vi.console.log(didziausiasSkaiciusSarase( “pomidoras”));
// 1.	rezultatas: “Pateikta netinkamo tipo reikšmė.”
// vii.console.log(didziausiasSkaiciusSarase([]));
// 1.	rezultatas: “Pateiktas sąrašas negali būti tuščias.”

console.log(`--- ${++number} --- `);
// 5.	Funkcija pavadinimu “isrinktiRaides”:
// a.priima du kintamuosius:
// i.pirmasis nurodo tekstą, su kuriuo reikės atlikti užduotį
// ii.antrasis nurodo kas kelintą raidę išrinkti
// b.patikrinti, ar pirmasis kintamasis yra teksto tipo:
// i.jei ne, išvedame pranešimą “Pirmasis kintamasis yra netinkamo tipo.”
// ii.priešingu atveju tęsiame darbą
// c.patikrinti, ar pirmasis kintamasis yra ne tuščias tekstas ir ne didesnis nei 100 simbolių:
// i.jei ne, išvedame pranešimą “Pirmojo kintamojo reikšmė yra netinkamo dydžio.”
// ii.priešingu atveju tęsiame darbą
// d.patikrinti, ar antrasis kintamasis yra skaičiaus tipo:
// i.jei ne, išvedame pranešimą “Antrasis kintamasis yra netinkamo tipo.”
// ii.priešingu atveju tęsiame darbą
// e.patikriname, ar antrojo kintamojo vertė yra didesnė už nulį:
// i.jei ne, išvedame pranešimą “Antrasis kintamasis turi būti didesnis už nulį.”
// ii.priešingu atveju tęsiame darbą
// f.patikriname, ar antrojo kintamojo vertė yra ne didesnė už pirmojo kintamojo ilgį:
// i.jei ne, išvedame pranešimą “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
// ii.priešingu atveju tęsiame darbą
// g.išrenkame iš nurodyto teksto kas kelintą raidę(pagal antrojo kintamojo žingsnį)
// h.išrinktas raides sudėti į atskirą kintamąjį, kuris yra teksto tipo
// i.gražina rezultatą
// j.TESTAI:
// i.console.log(isrinktiRaides( “abcdefg”, 2));
// 1.	rezultatas: “bdf”
// ii.console.log(isrinktiRaides( “abcdefghijkl”, 3));
// 1.	rezultatas: “cfil”
// iii.console.log(isrinktiRaides( “abc”, 0));
// 1.	rezultatas: “Antrasis kintamasis turi būti didesnis už nulį.”
// iv.console.log(isrinktiRaides( “abc”, 4));
// 1.	rezultatas: “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
// v.console.log(isrinktiRaides(1561, 2));
// 1.	rezultatas: “Pirmasis kintamasis yra netinkamo tipo.”

console.log(`--- ${++number} --- `);
// 6.	Funkcija pavadinimu “dalyba”:
// a.turi priimti du kintamuosius
// b.reikia sugalvoti ir įgyvendinti kuo daugiau logiškų patikrinimų, kurie padėtų apsaugoti funkciją nuo neteisingo panaudojimo
// i.esant blogoms sąlygoms, išvesti atitinkamą pranešimą
// ii.esant geroms - tęsti darbą
// c.į atskirą kintamąjį išsaugoti apskaičiuotą dviejų skaičių dalybos reikšmę
// i.daliname pirmąjį skaičių iš antrojo
// d.grąžinti suskaičiuotą reikšmę
// e.TESTAI:
// i.sugalvoti bent 5 testus, kurie bendrai iš esmės patvirtintu gerą funkcijos veikimą

