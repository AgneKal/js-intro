import Animal from "./Animal.js";

class Bird extends Animal {
    constructor(name, color) {
        super(name, color);
        this.group = 'bird';
        this.isFlay = false;
    }

    fly() {
        this.isFlay = true;
    }

    stopFly() {
        this.isFlay = false;
    }

}

export default Bird;