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
