/* 
Gautą tekstą parašyti atbulai
*/

function reverse(text) {
    if (typeof text !== 'string') {
        return 'ERROR: duok teksta'
    }

    if (text.length <= 1) {
        return text;
    }

    let result = ''
    for (let i = text.length - 1; i >= 0; i--) {
        console.log(i, text[i]);
        result += text[i];
    }
    return result
}

console.log(reverse(2154));
console.log(reverse(true));
console.log(reverse(reverse));
console.log(reverse());
console.log(reverse(undefined));
console.log(reverse([]));
console.log(reverse(['asd']));
console.log(reverse([2545]));

console.log(reverse('abc', '->', 'cba'));
console.log(reverse('labas', '->', 'cba'));
console.log(reverse('kedes', '->', 'cba'));
console.log(reverse('alus', '->', 'cba'));
