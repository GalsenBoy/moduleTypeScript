"use strict";
/*
////Déclarations des variables
const s: string = "bilaly";
const n: number = 12;
const b: boolean = false;
const arry: string[] = ["bil", "bbo", "tati"];
const oj: { fistname: string, lastname: string, [key: string]: string } = { fistname: "bilaly", lastname: "cissokho", adreese: "12 rue des linandes beiges" }
*/
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
function mys(params) {
    return params[0];
}
const tabMys = mys([1, 2, 4,]);
const testTab = [12, "oiyizod", "ee", 2022];
function consoleSize(params) {
    console.log(params.length);
    return params;
}
const cleSize = consoleSize([12, 12, 'e']);
