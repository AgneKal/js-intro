import Pet from './Pet.js'

class Hamster extends Pet {
    constructor(name, color) {
        super(name, color);
        this.type = 'hamster';
        this.sound = 'Niom niom';
        this.emoji = '🐹';
        this.foodAmount = 0;
    }

    eat(amount) {
        if (amount > 0) {
            this.foodAmount += amount;
            return `Mano burnoje siuo metu yra ${this.foodAmount} morkos (-u).`
        } else {
            return `Valgau tik realias morkas.`
        }
    }
}

export default Hamster;