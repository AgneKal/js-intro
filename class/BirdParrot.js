import Bird from './Bird.js'

class Parrot extends Bird {
    constructor(name, color) {
        super(name, color);
        this.type = 'parrot'
        this.sound = 'Prreprreprre prreprreprre';
        this.emoji = '🦜';
        this.history = [];
    }
    repeatSound(phrase) {
        if (this.history.length >= 3) {
            this.history.shift();
        }
        this.history.push(phrase);
        return phrase;
    }

    repeatHistory() {
        return this.history.join(', ');
    }
}



export default Parrot;