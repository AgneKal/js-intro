/*
STRING - tekstas, simbolių grandinėlė

Iniciavimo simboliai/būdai: viengubos ('), dvigubos (") kabutės ir ` (backtick) kabutes
*/

const text1 = 'Pirmas tekstas.';
console.log(text1);

const text2 = "O cia jau antras tekstas.";
console.log(text2);

//Cia yra tekstas be kabuciu.
const text31 = 'Cia yra tekstas be kabuciu';
const text32 = "Cia yra tekstas be kabuciu";
console.log(text31);
console.log(text32);

//Vienguba (') kabute.
const kabute21 = "Vienguba (') kabute.";
console.log(kabute21);

//Dviguba (") kabute.
const kabute12 = 'Dviguba (") kabute.';
console.log(kabute12);

const vardas = 'Chuck';
const pavarde = 'Norris';

const fullName = vardas + ' ' + pavarde;
console.log(fullName);

//Vienguba (') ir dviguba (") kabutes.
const kabuteMix1 = "Vienguba (') ir " + 'dviguba (") kabutes.';
console.log(kabuteMix1);

const kabuteMix21 = 'Vienguba (\') ir dviguba (") kabutes.';
console.log(kabuteMix21);

const kabuteMix22 = "Vienguba (') ir dviguba (\") kabutes.";
console.log(kabuteMix22);

const kabuteMix23 = "Vienguba (\') ir dviguba (\") kabutes.";
console.log(kabuteMix23);

const kabuteMix24 = 'Vienguba (\') ir dviguba (\") kabutes.';
console.log(kabuteMix24);

console.clear();

const gele = 'tulpe';
const spalva = 'geltona';

const backtick = `Backtick sakinys.`;
console.log(backtick);

const backtick12 = `Vienguba (') ir dviguba (") kabutes.`;
console.log(backtick12);

const backtick123 = `Vienguba (') ir dviguba (") ir backtick (\`) kabutes.`;
console.log(backtick123);

console.clear();

//As turiu tulpe kuri yra geltona.
const sakinys = 'As turiu ' + gele + ' kuri yra ' + spalva + '.';
console.log(sakinys);

const backtickGelytes = `As turiu ${gele} kuri yra ${spalva}.`;
console.log(backtickGelytes);

const n1 = 7;
const n2 = 5;

// 7 + 5 = 12;
const pliusas = `${n1} + ${n2} = ${n1 + n2};`;
console.log(pliusas);

console.clear();

// Stai sarasas:
//- pirmas
//- antras
//- trecias

const s1 = 'Stai sarasas:';
const s2 = '- pirmas';
const s3 = '- antras';
const s4 = '- trecias';

console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);

// \r - return;
// \n - new line;
// \t - tab

const eilutes = 'Stai sarasas:\r\n\
- pirmas\r\n\
- antras\r\n\
- trecias';
console.log(eilutes);

/*
<header>
    <img src="#" alt="">
    <nav>
        <a href="#">Link</a>
        <a href="#">Link</a>
        <a href="#">Link</a>
    </nav>
</header>;
*/

const HTML = '<header>\r\n\
\t<img src = "#" alt = "" >\r\n\
\t<nav>\r\n\
\t\t<a href="#">Link</a>\r\n\
\t\t<a href="#">Link</a>\r\n\
\t\t<a href="#">Link</a>\r\n\
\t</nav>\r\n\
</header >';
console.log(HTML);

const HTML2 = `<header>
    <img src = "#" alt = "" >
    <nav>
        <a href="#">Link</a>
        <a href="#">Link</a>
        <a href="#">Link</a>
    </nav>
</header >`
console.log(HTML2);