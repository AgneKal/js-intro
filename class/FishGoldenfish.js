import Fish from './Fish.js'

class Goldenfish extends Fish {
    constructor(name, color, wishLimit = 3) {
        super(name, color);
        this.wishLimit = wishLimit;
        this.restWishes = '0';
        this.type = 'goldenfish'
        this.sound = 'Gulp gulp';
        this.emoji = '🐡';
        this.isMagic = wishLimit > 0;
    }
    makeWish(wish) {
        if (this.wishLimit < 0) {
            return `Nori ispildyti mano nora? 🌠`
        }
        if (!this.isMagic) {
            return `As nepildau noru / Wrong fish 👀`
        }

        if (this.wishLimit > 0) {
            this.wishLimit -= 1;
            return `Stai tavo noras: ${wish}.`
        }
        return `Daugiau noru ispildyti nebegaliu 😔`
    }

}
// - jeigu liko neispildytu noru: Stai tavo noras: { { myWish } }
// - jeigu neliko neispildytu noru: Daugiau noru ispildyti nebegaliu: (
// - jeigu is viso nepildo noru: As nepildau noru / Wrong fish 👀

export default Goldenfish;