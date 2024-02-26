import Fish from './Fish.js'

class Dolphin extends Fish {
    constructor(name, color) {
        super(name, color);
        this.type = 'dolphin'
        this.sound = 'squeak ';
        this.emoji = '🐬';
        this.isJumping = false;
        this.jumpCount = 0;
        this.repeat = 5;
    }

    jumpFromWater() {
        this.jumpCount += 1;
        return `Delfinas issoko is vandens ${this.jumpCount}-a karta.`;
    }
}

export default Dolphin;