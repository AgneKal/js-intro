class Animal {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.group = '';
        this.type = '';
        this.sound = '';
        this.emoji = '';
    }

    intro() {
        return `${this.name}: Hi, I am ${this.group} - ${this.color} ${this.type} ${this.emoji}. ${this.makeSounds()}`
    }

    firstUp() {
        return `${this.sound[0].toUpperCase() + this.sound.slice(1)}`;
    }

    makeSounds() {
        if (this.group === 'bird') {
            return `${this.firstUp()}${this.sound.repeat(this.repeat - 2)}${this.sound.replace(' ', '')}.`;
        } else if (this.group === 'fish' && this.type === 'dolphin') {
            return `${this.firstUp()}${this.sound.repeat(this.repeat - 2)}${this.sound.replace(' ', '')}.`;
        } else if (this.group === 'pet') {
            return `${this.firstUp()}${this.sound.replace(' ', '')}.`;
        } else {
            return `🤫.`;
        }
    }
}

export default Animal;

// Papildomi reikalavimai:
// - naminiai gyvunai { { sound } } kartoja 2 kartus
// - vandens gyvunai { { sound } } kartoja 0 kartus
//         - delfinas: { { sound } } kartoja 5 kartus
// - pauksciai { { sound } } kartoja 3 kartus