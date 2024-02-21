// class Cat {
//     constructor(name, color) {
//         this.name = name;
//         this.color = color;
//     }

//     intro() {
//         return `${this.name}: Hi, I am ${this.color} cat. Miau miau!!🐈🐈`
//     }
// }

// export default Cat;

import Pet from './Pet.js'

class Cat extends Pet {
    constructor(name, color) {
        super(name, color);
        this.breed = 'cat';
        this.sound = 'Miau miau';
        this.emoji = '🐈🐈';
    }
}

export default Cat;