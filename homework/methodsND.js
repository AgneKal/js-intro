// UZD 1
// Duodamas tekstas, kuris turėtų būti kaip vardas
// Bet jis suformatuotas padrikai...
// Reikia duotą tekstą suformatuoti taip, jog būtų
// tvarkingas vardas.

// pvz.: jonas -> Jonas
// pvz.: oNA -> Ona
// pvz.: PeTrAs -> Petras
// pvz.: Maryte -> Maryte

// geras, bet ilgas
function rightName1(word) {
    let name = word.toLowerCase()
    let names = name.replace(name[0], name[0].toUpperCase());
    return names
}

// geriausias
function rightName2(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase()
}

// blogas (išsiaiškinti kodėl)
function rightName3(word) {
    let name = word.toLowerCase().replace(word[0].toLowerCase(), word[0].toUpperCase())
    return name;
}

// blogesnis ir neveikiantis
function rightName4(word) {
    let name = word.toLowerCase().replace(word[0], word[0].toUpperCase())
    return name
}

console.log('-----1-----');
console.log(rightName1('jonas'));
console.log(rightName1('oNA'));
console.log(rightName1('PeTrAs'));
console.log(rightName1('Maryte'));

console.log('-----2-----');
console.log(rightName2('jonas'));
console.log(rightName2('oNA'));
console.log(rightName2('PeTrAs'));
console.log(rightName2('Maryte'));

console.log('-----3-----');
console.log(rightName3('jonas'));
console.log(rightName3('oNA'));
console.log(rightName3('PeTrAs'));
console.log(rightName3('Maryte'));

console.log('-----4-----');
console.log(rightName4('jonas'));
console.log(rightName4('oNA'));
console.log(rightName4('PeTrAs'));
console.log(rightName4('Maryte'));

//UZD 2
// Duodamas vardas ir pavardė.
// Grąžinti trumpinį (inicialai).

// function initials(name, surname) {
//     const nameLetter = name.slice(0, 1);
//     const surnameLetter = surname.slice(0, 1);
//     const initials = `${nameLetter}. ${surnameLetter}.`
//     return initials
// }
// console.log(initials('Chuck', 'Norris'));
// console.log(initials('Monica', 'Geller'));
// pvz.: Chuck Norris -> C. N.