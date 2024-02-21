import Bird from './Bird.js'

class Canary extends Bird {
    constructor(name, color) {
        super(name, color);
        this.type = 'canary';
        this.sound = 'Tweet tweet';
        this.emoji = '🐦';
    }
}

export default Canary;