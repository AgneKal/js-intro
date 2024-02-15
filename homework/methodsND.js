// UZD 1
// Duodamas tekstas, kuris turėtų būti kaip vardas
// Bet jis suformatuotas padrikai...
// Reikia duotą tekstą suformatuoti taip, jog būtų
// tvarkingas vardas.

// pvz.: jonas -> Jonas
// pvz.: oNA -> Ona
// pvz.: PeTrAs -> Petras
// pvz.: Maryte -> Maryte


// function rightName(word) {
//     let name = word.toLowerCase()
//     let names = name.replace(name[0], name[0].toUpperCase());
//     return names
// }


function rightName(word) {
    let name = word.toLowerCase().replace(word[0].toLowerCase(), word[0].toUpperCase())
    return name;
}

// blogas
// function rightName(word) {
//     let name = word.toLowerCase().replace(word[0], word[0].toUpperCase())
//     return name
// }

// function rightName(word) {
//     let name = word[0].toUpperCase() + word.slice(1, word.length).toLowerCase();
//     return name
// }

console.log(rightName('jonas'));
console.log(rightName('oNA'));
console.log(rightName('PeTrAs'));
console.log(rightName('Maryte'));


//UZD 2
// Duodamas vardas ir pavardė.
// Grąžinti trumpinį (inicialai).

function initials(name, surname) {
    const nameLetter = name.slice(0, 1);
    const surnameLetter = surname.slice(0, 1);
    const initials = `${nameLetter}. ${surnameLetter}.`
    return initials
}
console.log(initials('Chuck', 'Norris'));
console.log(initials('Monica', 'Geller'));
// pvz.: Chuck Norris -> C. N.