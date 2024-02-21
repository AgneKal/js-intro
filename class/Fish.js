import Animal from "./Animal.js";

class Fish extends Animal {
    constructor(name, color) {
        super(name, color)
        this.group = 'fish';
        this.isSwim = 'false';
    }
    swim() {
        this.isSwim = 'true';
    }

    stopSwim() {
        this.isSwim = 'false';
    }
}

export default Fish;