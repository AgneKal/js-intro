//nebaigta
function sumInterval(start, end) {
    if (start < 0 && end <= 0) {
        const a = (start * (end - 1) / 2);
        const b = (end * (0 - 1) / 2);
        return a + b;
    }

    if (start <= 0 && end >= 0) {
        return 0;
    }

    if (start >= 0 && end > 0) {
        return 1;
    }
}

console.log(sumInterval(-4, -1), '-->', -10);
console.log(sumInterval(0, 4), '-->', 10);
console.log(sumInterval(1, 4), '-->', 10);
console.log(sumInterval(2, 4), '-->', 9);
console.log(sumInterval(3, 4), '-->', 7);
console.log(sumInterval(-1, 4), '-->', 9);
console.log(sumInterval(-2, 3), '-->', 3);
console.log(sumInterval(-4, 3), '-->', -4);
console.log(sumInterval(-4, 0), '-->', -10);
console.log(sumInterval(0, 0), '-->', 0);
console.log(sumInterval(-3, 3), '-->', 0);