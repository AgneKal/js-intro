import Pet from './Pet.js'

class Cat extends Pet {
    constructor(name, color) {
        super(name, color);
        this.type = 'cat';
        this.sound = 'Meow meow'
        this.emoji = '🐈';
    }
}

export default Cat;