/*
OOP - "objektinis" programavimas
*/

class Car {
    constructor(brand, model, color, price) {
        // šis (objektas) - kontekstinis kintamasis
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.price = price;
        this.isEngineOn = false;
        this.isRadioOn = false;
        this.windowsHeight = [1, 1, 1, 1];
        this.tankSize = 40;
        this.tankLevel = 5;
    }

    turnOnEngine() {
        this.isEngineOn = true;
    }

    turnOffEngine() {
        this.isEngineOn = false;
    }

    fillTank(amount) {
        if (this.tankLevel + amount <= this.tankSize) {
            this.tankLevel += amount;
        } else {
            const diff = this.tankSize - this.tankLevel;
            this.tankLevel = this.tankSize;
            console.log(`Per daug, ipilta tik ${diff}`);
        }
    }
}

const audi = new Car('Audi', '80', 'red', 300);
const tesla = new Car('Tesla', 'Roadster 2', 'black', 100_000);

// console.log(audi.isEngineOn);
// console.log(tesla.isEngineOn);

// audi.turnOnEngine();
// console.log(audi.isEngineOn);
// console.log(tesla.isEngineOn);

// tesla.turnOnEngine();
// console.log(audi.isEngineOn);
// console.log(tesla.isEngineOn);

// tesla.turnOffEngine();
// audi.turnOffEngine();
// console.log(audi.isEngineOn);
// console.log(tesla.isEngineOn);

console.log('Talpa:', audi.tankSize);
console.log('Dabartinis kiekis:', audi.tankLevel);

audi.fillTank(5);
console.log('Dabartinis kiekis:', audi.tankLevel);

audi.fillTank(25);
console.log('Dabartinis kiekis:', audi.tankLevel);

audi.fillTank(25);
console.log('Dabartinis kiekis:', audi.tankLevel);

console.clear();
/*

Reikia class'es: Parrot

Savybes:
- vardas
- spalva
- amzius
- miega/nemiega

Functionalumas:
- gali pakartoti pasakyta zodi
    - jeigu miega, nereaguoja
    - jeigu pasakomas daugiau nei vienas zodis, tai pakartoja tik pirma zodi
- galima uzmigdyti
- galima pazadinti

*/
class Parrot {
    constructor(name, color, age) {
        this.name = name;
        this.color = color;
        this.age = age;
        this.isSleeping = true;
    }

    wakeUp() {
        this.isSleeping = false;
    }

    putToSleep() {
        this.isSleeping = true;
    }

    repeatWord1(phrase) {
        if (this.isSleeping === false) {
            let word = phrase.split(' ');
            const answer = word.length === 1 ? word[0] : 'Ka?';
            return answer;
        } else {
            return `Shhh... ${this.name} is sleeping.`
        }
    }
    repeatWord(phrase) {
        const word = phrase.split(' ');
        return this.isSleeping === false ? word.length === 1 ? word[0] : 'Ka?' : `Shhh... ${this.name} is sleeping.`
    }
    needToTalk(phrase) {
        this.wakeUp();
        return this.repeatWord(phrase);
    }

}

const firstParrot = new Parrot('Alice', 'green', '5');
console.log(firstParrot.needToTalk('Labas rytas'));
