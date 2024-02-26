import Animal from "./Animal.js";

class Pet extends Animal {
    constructor(name, color) {
        super(name, color);
        this.group = 'pet';
        this.repeat = 2;
    }
}

export default Pet;