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

function mys<TypeArray>(params: TypeArray[]): TypeArray {
    return params[0];
}

const tabMys = mys([1, 2, 4,]);
const testTab: Array<string | number> = [12, "oiyizod", "ee", 2022];

function consoleSize<Type extends { length: number }>(params: Type): Type {
    console.log(params.length);
    return params
}

const cleSize = consoleSize([12, 12, 'e']);
