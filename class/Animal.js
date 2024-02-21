class Animal {
    constructor(name, color, sound) {
        this.name = name;
        this.color = color;
        this.group = '';
        this.type = '';
        this.sound = '';
        this.emoji = '';
    }

    intro() {
        return `${this.name}: Hi, I am ${this.group} - ${this.color} ${this.type}. ${this.sound}!!${this.emoji}.`
    }
}

export default Animal;