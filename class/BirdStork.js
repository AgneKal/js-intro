import Bird from './Bird.js'

class Stork extends Bird {
    constructor(name, color) {
        super(name, color);
        this.type = 'stork';
        this.sound = 'Clatt clatt';
        this.emoji = '🦢';
        this.babiesCount = 0;
    }
    bringBabies() {
        this.babiesCount += 1;
        return `Zmonems i kopustu lauka atnesiau dar viena vaika (${this.babiesCount}).`;
    }
}

export default Stork;