/*
////Déclarations des variables
const s: string = "bilaly";
const n: number = 12;
const b: boolean = false;
const arry: string[] = ["bil", "bbo", "tati"];
const oj: { fistname: string, lastname: string, [key: string]: string } = { fistname: "bilaly", lastname: "cissokho", adreese: "12 rue des linandes beiges" }
*/


const compteur = document.querySelector('#compteur') as HTMLButtonElement;
let i = 0;

const increment = (e: Event) => {
    e.preventDefault();
    i++;
    const span = compteur.querySelector('span');
    if (span) {
        span.innerText = i.toString();
    }
}
compteur?.addEventListener('click', increment);

const tab: string[] = ["Bob", "Eric", "Tamsir", "Bill"];
for (let iterator of tab) {
    console.log(iterator);
}


/**
 * 
 * @param x vitesse horizontale
 * @param y  vitesse verticale
 */
function narrowing(x: number | boolean, y: number | boolean | string) {
    (x == y) ? "x et y sont de même type" : "X et Y sont de types différents";
}

/**********************Alias de type*******************/
type User = { firstName: string, lastName: string, age: number };
const user: User = { firstName: "Bilaly", lastName: "Cissokho", age: 24 };

type Id = number | string;
const identifiant: Id = 'GalsenBoy';

type tes<ArgType> = (arg: ArgType) => ArgType;


/*********************Générics**************************/

function mystere<ArgType>(arg: ArgType): ArgType {
    return arg;
}

const bil = mystere<string>("billy");
const code = mystere(1234);

// function mys<TypeArray>(params: TypeArray[]): TypeArray {
//     if (params[0]) {
//         return params[0];
//     }
// }

// const tabMys = mys([1, 2, 4,]);
const testTab: Array<string | number> = [12, "oiyizod", "ee", 2022];

function consoleSize<Type extends { length: number }>(params: Type): Type {
    console.log(params.length);
    return params
}

const cleSize = consoleSize([12, 12, 'e']);


//Lecture sans modifier le tableau

function reverseTab<T>(params: readonly T[]): T[] {
    return [...params].reverse();
}

//Class

class Character {
    #lastName: string;
    #firstName: string;
    #age: number;

    constructor() {
        this.#lastName = "Cissokho";
        this.#firstName = "Bilaly";
        this.#age = 24;
    }
    toString(): string {
        return "Je m'appelle " + this.#firstName + " " + this.#lastName + " et j'ai " + this.#age + " ans"
    }
}

const cr = new Character();


/*****************Tupple and enum , Unknow************************/

function merge<T extends unknown[], U extends unknown[]>(a: T, b: U): [...T, ...U] {
    return [...a, ...b]
}

enum Steps {
    Paiment = "paiement",
    Selection = "selection",
    Achat = "achat",
}

const step: Steps = Steps.Achat;
console.log(step)

/**************Utilisation de librairie non typé */

import ScrollReveal from 'scrollreveal'

// const sr = ScrollReveal();
ScrollReveal.reveal('.image_blockchain', {
    origin: 'left',
    rotate: { x: 0, y: 0, z: -55 },
    scale: 0.5,
    distance: '100px',
    duration: 2000,
});
