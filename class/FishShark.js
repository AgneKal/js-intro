import Fish from './Fish.js'

class Shark extends Fish {
    constructor(name, color) {
        super(name, color);
        this.type = 'shark';
        this.sound = 'Roar roar';
        this.emoji = '🦈';
        this.isEatHuman = false;
    }
    eatHuman() {
        return this.isEatHuman ? `Kaip noreciau paragauti plaukmenu...` : `As veganas`
    }
}

export default Shark;