//1. Pecatenje i komentari
// console.log("Hello world");
// komentari
// console.log("Zdravo, JavaScript!");

//2. Tipovi: string, number, boolean, undefind, null
console.log(typeof "Marko"); //string
console.log(typeof 20); //number
console.log(typeof 3.5); //number
console.log(typeof true); //boolean moze da bide true ili false
let unknowTipe;
console.log(typeof unknowTipe); // undefined
let newValue = null;
console.log(newValue); // null
let test = undefined;
console.log(typeof test);

// 03. var, let, const
// - LET
let age = 30;
console.log(age);
age = 21;
console.log(age);
age = age + 1;
console.log(age);

// - CONST
const godini = 50;
console.log(godini);
// godini = 40;
// console.log(godini);

// - VAR
var surname = "Prezime";
console.log(surname);
surname = "Ime";
console.log(surname);
// var grad = "Skopje";
// const grad = "Ohrid";
// let grad = "Kumanovo";
const biloshto = true;
console.log(biloshto);

// objekti
const student = {
  ime: "Zoran",
  prezime: "Zoranoski",
  godini: 20,
};

const student1 = {
  ime: "Martina",
  prezime: "Martinoska",
  godini: 20,
};

const student2 = {
  ime: "Aleksandar",
  prezime: "Aleksandroski",
  godini: 20,
};

// niza
const moduli = ["HTML", "CSS", "JavaScript"];
console.log(moduli);

const studenti = [student, student1, student2];
console.log(studenti);

// camelcase tehnika
const firstName = "Filip";
console.log(typeof firstName);
const firstNameAndLastName = "Filip Filiposki";
// const first-name-lastnam = "nikako da ne se korist" nikako crti izmegju zborcinja

// var
let message;
// let i const
const vrednost = false;

if (vrednost) {
  message = "Zdravo";
} else {
  message = "Nezdravo";
}
console.log(message);

// Matematicki presmetki

console.log(10 + 10);
console.log(10 - 7);
console.log(10 * 3);
console.log(30 / 3);
console.log(10 % 3);
console.log((2 + 3) * 4);
console.log("5" + 2);
console.log(Number("5") + 2);
console.log(10 + 20 - (5 * 3 * 4) / 2);
console.log(100 - 300);

//! Vezba
// Deklariraj ime i grad so const, vozrast so let
// Isptecati gi, zgolemi ja vozrasta za 1 i proveri gi tipovite
// Koristi svoi iminja na promenlivi za da ne gi povtorish postojanite
