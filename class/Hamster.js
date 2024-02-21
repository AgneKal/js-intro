// class Hamster {
//     constructor(name, color) {
//         this.name = name;
//         this.color = color;
//     }

//     intro() {
//         return `${this.name}: Hi, I am ${this.color} hamster. Niom Niom!! 🐹🐹`
//     }
// }

// export default Hamster;

import Pet from './Pet.js'


class Hamster extends Pet {
    constructor(name, color) {
        super(name, color);
        this.breed = 'hamster';
        this.sound = 'Niom niom';
        this.emoji = '🐹🐹';
    }
}

export default Hamster;