import Pet from './Pet.js'


class Dog extends Pet {
    constructor(name, color, sound) {
        super(name, color);
        this.breed = 'dog';
        this.sound = this.doubleSound(sound);
        this.emoji = '🐕🐕';
    }
    doubleSound(sound) {
        const str = `${sound} ${sound}`
        return str[0].toUpperCase() + str.slice(1);
    }
}

export default Dog;

// export default class Dog {
// }
// export default Dog;
// export default {Dog};