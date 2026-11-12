// const test = "Hello world";
// const test1 = "Semos";
// const test2 = "JavaScript";
// // console log e alatka za logiranje na podatocite
// console.log(test, test1, test2);

// // const, let i var
// const - e nepromenliva
// let i var - se promenlivi
// const primer = "semos";
// console.log(primer);
// primer = "JavasScript";
// console.log(primer);

const string = "string"; // ova tekst
const number = 5; // ova e brojka
const boolean = true; // ova e boolean

//! operatori za sporedba
//? ">" pogolemo, "<" pomalo, >=, <=

console.log(18 >= 18); //true
console.log(5 === "5"); // false
console.log(5 == "5"); //true
console.log(5 !== 3); //true

const osoba = 20;
const dozvolenVlez = 20;
const osoba1 = 17;
console.log(osoba1 >= dozvolenVlez);
const osoba2 = 23;

if (osoba1 >= dozvolenVlez) {
  console.log("Dozvolen vlez");
} else {
  console.log("Ne e dozvolen vlez");
}

const pariVoNovcanik = 60;
const cenaNaSok = 60;

if (pariVoNovcanik >= cenaNaSok) {
  console.log("Mozeme da kupime sok");
} else {
  console.log("Nemash dovolno pari");
}

// % e ostatok pri delenje, 7 % 2 e 1 pa rezultato e neparen broj

const brojZaProverka = 8;
if (brojZaProverka % 2 == 0) {
  console.log("paren broj");
} else {
  console.log("Neparen broj");
}

//? Vezba na casot, napishete uslov pa proverete gi dvete moznosti.
//!A - temperaturata e nad 30 stepeni ispecati toplo e inaku ispecati ne e toplo
//!B password: ako e tocno javascript ispecati uspesna najava inaku pogresna lozinka
//!C numbertocheck, proveri dali brojot e neparen, probaj so 8 i 9

//? else if - kade sto moze da upotrebime povekje uslovi

const poeni = 50;

if (poeni >= 90) {
  console.log("Odlicen uspeh");
} else if (poeni >= 70) {
  console.log("Mnogu dobar rezultat");
} else if (poeni >= 60) {
  console.log("Polozeno");
} else {
  console.log("Nepolozeno");
}
//? && znaci i(and na angliski): dvata uslovi mora da se tocni
//? || znaci ili (or na angliski): barem eden uslov da e ispolnet

const vozrastZaVozacka = 22;
const imaVozacka = false;

if (vozrastZaVozacka >= 18 && imaVozacka) {
  console.log("Moze da vozi");
}

const eSabota = false;
const eNedela = true;

if (eSabota || eNedela) {
  console.log("Vikend e");
}

const eNajaven = true;

if (!eNajaven) {
  console.log("Najavi se");
}

//! Vezba broj 2
//? 1. Za eden broj ispecati Pozitiven, Negativen ili Nula proveri so 10, -3 i 0
//? 2. Besplatna dostava ima ako narackata e >= 1000 i korisnikot e clen,
//? probaj: 1200/true. 1200/false. 500 true
//? Popust ima ako korisnikot e student ili ima kupon.

//! Switch = izbor spored tocna vrednost

const izborNaPijalok = "koka kola";

switch (izborNaPijalok) {
  case "kafe":
    console.log("izbra kafe: 100 denari.");
    break;
  case "caj":
    console.log("Izbra caj: 70 deanti");
    break;
  case "voda":
    console.log("izbra voda: 50 denari");
    break;
  default:
    console.log("Nepoznat pijalak");
}

const redenBrojNaDen = 2;

switch (redenBrojNaDen) {
  case 6:
  case 7:
    console.log("Vikend");
    break;
  default:
    console.log("Raboten den");
}

//! Vezba 3
//? Napishi switch za semafor: "Crveno" -> zastani, "Zolto" -> podgotvi se, "Zeleno" -> prodolzi
//? Meni 1 - Dodavanje, 2 - prikazuvanje, 3 -> izlez
//? dodajte default: odbravte pogresenen izbor izberete 1 2 ili 3

//? Objketi - Povrzani podatoci na edno mesto

const student = {
  ime: "Ana",
  vozrast: 20,
  nasoka: "JavaScript",
  eAktiven: true,
};

console.log(student);
console.log(student.ime);
console.log(student["vozrast"]);

student.vozrast = 21;
student.grad = "Skopje";
student.prosek = 9;
console.log(student);

//! Vezba 4
//? Sozdaj mojaKniga so naslov, avtor, brojNaStranici i eProcitana
// ispecati naslov i avtor; potoa promeni eProcitana vo true

/////////////////////////////////////
// ============================================================
// ДОМАШНА РАБОТА — if / else И switch
// ============================================================
// За секоја задача создајте променливи и испечатете го резултатот
// со console.log(). Проверете го кодот со различни вредности.
// Користете различни имиња од оние што веќе постојат во скриптата.
//
// 1. ЛИФТ — if / else
// Создајте променлива tezina со вкупната тежина во лифтот во килограми.
// Ако е поголема од 500, испечатете „Лифтот е преоптоварен“,
// инаку „Лифтот може да тргне“.
// Проверете со: 350, 500 и 520.
//
// 2. СПОРЕДБА НА ЦЕНИ — if / else if / else
// Создајте променливи cenaA и cenaB за ист производ во две продавници.
// Испечатете „Продавница А е поевтина“, „Продавница Б е поевтина“
// или „Цените се исти“, зависно од вредностите.
// Проверете со: 80/100, 120/90 и 100/100.
//
// 3. ПАРКИНГ — if / else if / else
// Создајте променлива casovi со позитивен цел број на часови.
// До 1 час паркирањето чини 40 денари, од 2 до 3 часа чини
// вкупно 100 денари, а за повеќе од 3 часа вкупно 150 денари.
// Испечатете ја цената. Проверете со: 1, 2, 3 и 4.
//
// 4. ИЗНАЈМУВАЊЕ ВЕЛОСИПЕД — if / else И &&
// Создајте boolean променливи imaSlobodenVelosiped и imaKaciga.
// Изнајмувањето е дозволено само ако има слободен велосипед И кацига.
// Испечатете „Може да изнајмиш“ или „Не може да изнајмиш“.
// Проверете ги сите четири комбинации на true и false.
//
// 5. СТАТУС НА НАРАЧКА — switch
// Создајте променлива statusNaNaracka. За "нова" испечатете
// „Нарачката е примена“, за "испратена" „Пратката е на пат“,
// а за "доставена" „Пратката е доставена“.
// За друга вредност испечатете „Непознат статус“.
// Проверете со сите три статуси и со "откажана".
//
// 6. МЕСЕЦИ — switch СО ГРУПИРАНИ case
// Создајте променлива mesec со број од 1 до 12.
// За 12, 1 и 2 испечатете „Зимски месеци“, за 3, 4 и 5
// „Пролетни месеци“, за 6, 7 и 8 „Летни месеци“,
// а за 9, 10 и 11 „Есенски месеци“.
// За друг број испечатете „Невалиден месец“.
// Проверете со: 12, 4, 8, 10 и 13.
