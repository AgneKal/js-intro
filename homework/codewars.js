function differenceInAges(ages) {
    ages = ages.sort((a, b) => b - a);
    const ats = [];
    ats.push(ages[ages.length - 1], ages[0], ages[0] - ages[ages.length - 1])
    return ats
}
console.log(differenceInAges([82, 15, 6, 38, 35]), 'ats:[6, 82, 76]');

function textLength(text) {
    return text.length
}

console.log(textLength('Agne'));

