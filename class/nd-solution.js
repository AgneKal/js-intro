class Animal {
    constructor() {
        this.soundRepeatCound = 0;
        this.sound = '';
    }

    // voice() {
    //     const text = Array(this.soundRepeatCound).fill(this.sound);

    //     if (this.soundRepeatCound > 0) {
    //         text[0] = this.sound[0].toUpperCase() + this.sound.slice(1);
    //     }
    //     return text.join(' ') + '.';
    // }

    voice() {
        if (this.soundRepeatCound === 0) {
            return '.';
        }

        const firstWord = this.sound[0].toUpperCase() + this.sound.slice(1);
        return firstWord + (' ' + this.sound).repeat(this.soundRepeatCound - 1) + '.';
    }
}

class Pet extends Animal {
    constructor() {
        super();
        this.soundRepeatCound = 2;
        this.sound = 'naminis';
    }
}
class Fish extends Animal { }
class Bird extends Animal {
    constructor() {
        super();
        this.soundRepeatCound = 3;
        this.sound = 'paukstis';
    }
}

class Dog extends Pet {
    constructor() {
        super();
        this.sound = 'suo';
    }
}
class Cat extends Pet {
    constructor() {
        super();
        this.sound = 'kate';
    }
}
class Hamster extends Pet {
    constructor() {
        super();
        this.sound = 'ziurkenas';
    }
}

class Shark extends Fish { }
class GoldFish extends Fish { }
class Dophin extends Fish {
    constructor() {
        super();
        this.soundRepeatCound = 5;
        this.sound = 'delfinas';
    }
}

class Parrot extends Bird {
    constructor() {
        super();
        this.sound = 'papuga';
    }
}
class Canary extends Bird {
    constructor() {
        super();
        this.sound = 'kanarele';
    }
}
class Stark extends Bird {
    constructor() {
        super();
        this.sound = 'gandras';
    }
}

const suo = new Dog();
const kate = new Cat();
const ziurkenas = new Hamster();

const papuga = new Parrot();
const kanarele = new Canary();
const gandras = new Stark();

const ryklys = new Shark();
const auksineZuvele = new GoldFish();
const delfinas = new Dophin();

console.log('suo:', suo.voice());
console.log('papuga:', papuga.voice());
console.log('ryklys:', ryklys.voice());