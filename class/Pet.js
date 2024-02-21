

class Pet {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.breed = 'pet';
        this.sound = 'Au miau niom!!!';
        this.emoji = '🐕🐈🐹'
    }

    intro() {
        return `${this.name}: Hi, I am ${this.color} ${this.breed}. ${this.sound}!!${this.emoji}`
    }
}

export default Pet;