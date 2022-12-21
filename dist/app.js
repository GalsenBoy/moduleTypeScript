/*
////Déclarations des variables
const s: string = "bilaly";
const n: number = 12;
const b: boolean = false;
const arry: string[] = ["bil", "bbo", "tati"];
const oj: { fistname: string, lastname: string, [key: string]: string } = { fistname: "bilaly", lastname: "cissokho", adreese: "12 rue des linandes beiges" }
*/
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Character_lastName, _Character_firstName, _Character_age;
const compteur = document.querySelector('#compteur');
let i = 0;
const increment = (e) => {
    e.preventDefault();
    i++;
    const span = compteur.querySelector('span');
    if (span) {
        span.innerText = i.toString();
    }
};
compteur === null || compteur === void 0 ? void 0 : compteur.addEventListener('click', increment);
const tab = ["Bob", "Eric", "Tamsir", "Bill"];
for (let iterator of tab) {
    console.log(iterator);
}
/**
 *
 * @param x vitesse horizontale
 * @param y  vitesse verticale
 */
function narrowing(x, y) {
    (x == y) ? "x et y sont de même type" : "X et Y sont de types différents";
}
const user = { firstName: "Bilaly", lastName: "Cissokho", age: 24 };
const identifiant = 'GalsenBoy';
/*********************Générics**************************/
function mystere(arg) {
    return arg;
}
const bil = mystere("billy");
const code = mystere(1234);
// function mys<TypeArray>(params: TypeArray[]): TypeArray {
//     if (params[0]) {
//         return params[0];
//     }
// }
// const tabMys = mys([1, 2, 4,]);
const testTab = [12, "oiyizod", "ee", 2022];
function consoleSize(params) {
    console.log(params.length);
    return params;
}
const cleSize = consoleSize([12, 12, 'e']);
//Lecture sans modifier le tableau
function reverseTab(params) {
    return [...params].reverse();
}
//Class
class Character {
    constructor() {
        _Character_lastName.set(this, void 0);
        _Character_firstName.set(this, void 0);
        _Character_age.set(this, void 0);
        __classPrivateFieldSet(this, _Character_lastName, "Cissokho", "f");
        __classPrivateFieldSet(this, _Character_firstName, "Bilaly", "f");
        __classPrivateFieldSet(this, _Character_age, 24, "f");
    }
    toString() {
        return "Je m'appelle " + __classPrivateFieldGet(this, _Character_firstName, "f") + " " + __classPrivateFieldGet(this, _Character_lastName, "f") + " et j'ai " + __classPrivateFieldGet(this, _Character_age, "f") + " ans";
    }
}
_Character_lastName = new WeakMap(), _Character_firstName = new WeakMap(), _Character_age = new WeakMap();
const cr = new Character();
/*****************Tupple and enum , Unknow************************/
function merge(a, b) {
    return [...a, ...b];
}
var Steps;
(function (Steps) {
    Steps["Paiment"] = "paiement";
    Steps["Selection"] = "selection";
    Steps["Achat"] = "achat";
})(Steps || (Steps = {}));
const step = Steps.Achat;
console.log(step);
/**************Utilisation de librairie non typé */
import ScrollReveal from 'scrollreveal';
// const sr = ScrollReveal();
ScrollReveal.reveal('.image_blockchain', {
    origin: 'left',
    rotate: { x: 0, y: 0, z: -55 },
    scale: 0.5,
    distance: '100px',
    duration: 2000,
});
