/*
Animals
*/

import Dog from "./PetDog.js";
import Cat from "./PetCat.js";
import Hamster from "./PetHamster.js";
import Canary from "./BirdCanary.js";
import Parrot from "./BirdParrot.js";
import Stork from "./BirdStork.js";
import Dolphin from "./FishDolphin.js";
import Goldenfish from "./FishGoldenfish.js";
import Shark from "./FishShark.js";

console.log('---Bird---');
const bubu = new Canary('Bubu', 'red');
console.log(bubu.intro());
console.log('------');
const kakadu = new Parrot('Kakadu', 'pink');
console.log(kakadu.intro(), kakadu.repeatSound('Pirmas'));
console.log(kakadu.intro(), kakadu.repeatSound('Antras'));
console.log(kakadu.intro(), kakadu.repeatSound('Trecias'));
console.log(kakadu.intro(), kakadu.repeatSound('Ketvirtas'));
console.log(kakadu.intro(), kakadu.repeatHistory());
console.log('------');
const gandras = new Stork('Gandras', 'white');
console.log(gandras.intro(), gandras.bringBabies());
console.log(gandras.intro(), gandras.bringBabies());
console.log(gandras.intro(), gandras.bringBabies());

console.log('---Fish---');
const goldie = new Goldenfish('Goldie', 'orange', 5);
console.log(goldie.intro(), goldie.makeWish('Noriu i kelione'));
console.log(goldie.intro(), goldie.makeWish('Noriu ledu'));
console.log(goldie.intro(), goldie.makeWish('Noriu sulciu'));
console.log(goldie.intro(), goldie.makeWish('Noriu pinigu'));
console.log(goldie.intro(), goldie.makeWish('Noriu sekmes'));
console.log(goldie.intro(), goldie.makeWish('Noriu dar pinigu'));
console.log('------');
const karpis = new Goldenfish('Karpis', 'white', -1)
console.log(karpis.intro(), karpis.makeWish('Noriu pinigu'));
console.log('------');
const flipas = new Dolphin('Flipas', 'blue');
console.log(flipas.intro(), flipas.jumpFromWater());
console.log(flipas.intro(), flipas.jumpFromWater());
console.log(flipas.intro(), flipas.jumpFromWater());
console.log('------');
const jaw = new Shark('Jaw', 'grey');
console.log(jaw.intro(), jaw.eatHuman());
console.log('------');
console.log('---Pet---');
const brisius = new Dog('Brisius', 'ginger', 'woof');
console.log(brisius.intro());
console.log('------');
const kicius = new Cat('Kicius', 'multicolor');
console.log(kicius.intro());
console.log('------');
const spirgis = new Hamster('Spirgis', 'white-black');
console.log(spirgis.intro(), spirgis.eat(5));
console.log(spirgis.intro(), spirgis.eat(7));
console.log(spirgis.intro(), spirgis.eat(-1));

