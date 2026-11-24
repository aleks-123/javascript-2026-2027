//! Funkcii vo JavaScript

function prikaziPoraka() {
  console.log("Dobrojdojde vo JavaScript");
}

// prikaziPoraka();
// prikaziPoraka();
// prikaziPoraka();
// prikaziPoraka();

//! enda funkcija vo JavaScript ima parametri i argumenti

function pozdravi(ime) {
  console.log(`Zdravo, ${ime}`);
}

pozdravi("Stojce");
pozdravi("Mirka");

// ime e parametar
// Stojce i Mirka se argumenti, ili konkretni vrednosti pri povikot

//? vezba na chas: edna funkcija prima parametri Ime i Grad, kreirajte funkcija sto kje logira pr: Elena e od Ohrid
//? Elena i Ohrid se argumenti vo taa funkcija

//! Return -> Vrakjane na vrednost

function soberi(a, b) {
  return a + b;
}

const zbir = soberi(2, 3);
const zbir1 = soberi(5, 3);
console.log(zbir, zbir1);
console.log(soberi(10, 7));

function samoPechati(a, b) {
  console.log(a + b);
}

const rezultat = samoPechati(10, 5);
console.log(rezultat);

//! Tri razlicni vidovi na fukcii imame

//? 1. Function declaration - deklaracija na funkcija
function soberiDeklaracija(a, b) {
  return a + b;
}
console.log(soberiDeklaracija(2, 3));

//? 2. Function expression
const soberiIzraz = function (a, b) {
  return a + b;
};

console.log(soberiIzraz(10, 20));

//? 3. Arrow function
const soberiArrow = (a, b) => {
  return a + b;
};

const primerArrow = (a, b) => a - b;

console.log(soberiArrow(2, 3));
console.log(primerArrow(10, 5));
//////////////////////////////

function scopeDeclaration(a, b) {
  return a + b;
}
const primerDeclaration = scopeDeclaration(2, 10);
console.log(primerDeclaration);

const testFunkcija = function (a, b) {
  return a + b;
};
console.log(testFunkcija(10, 20));

//? Default parametar ili standarden

const napraviPozdrav = function (ime = "Zorka") {
  return `Zdravo, ${ime}`;
};

console.log(napraviPozdrav());
console.log(napraviPozdrav("Mirko"));
console.log(napraviPozdrav(undefined));
console.log(napraviPozdrav(null));
console.log(napraviPozdrav(""));

//! If i Early Return

function proveriPoeni(poeni) {
  if (poeni < 0 || poeni > 100) {
    return "Nevalidni poeni";
  }

  if (poeni >= 60) {
    return "Polozshi";
  }

  return "Ne polozi";
}

console.log(proveriPoeni(80));
console.log(proveriPoeni(40));
console.log(proveriPoeni(110));

//! Opseg

const ime = "Ana";

function lokalnaPoraka() {
  const ime = "Elena";
  const tekst = `Zdravo, ${ime}`;
  return tekst;
}

console.log(lokalnaPoraka());
console.log(ime);

//! Funkcija so niza i ciklus

function zbirNaNiza(broevi) {
  let vkupno = 0;
  for (let i = 0; i < broevi.length; i++) {
    // vkupno = vkupno + broevi[i];
    vkupno += broevi[i];
  }

  return vkupno;
}

console.log(zbirNaNiza([10, 20, 30]));
console.log(zbirNaNiza([30, 20, 30]));

//? namesto for loop da iskoristite reduce kako gotova metoda

//! Callback

function pozdrav() {
  console.log("Zdravo");
}
function pozdrav1() {
  console.log("Zdravo1");
}
function izvrshi(callback) {
  callback();
}

izvrshi(pozdrav);
izvrshi(pozdrav1);

{
  /* <button id="presmetaj">Presmetaj</button>;

addEventListener(kalkuliraj(a, b))
addEventListener(kalkuliraj(a, b)) */
}

function ceZaKolicina(cena, kolicina) {
  return cena * kolicina;
}

function vkupnoSoDostava(cena, kolicina, dostava = 100) {
  return ceZaKolicina(cena, kolicina) + dostava;
}

console.log(vkupnoSoDostava(200, 3));
console.log(vkupnoSoDostava(500, 3, 300));

//////////////

//? Za domasna
//! 1)
//? Napishi funkcija napraviNaslov koja prima prv argument tekst vtor argment znak, i i gi spojuva tekstot i znakot
//? ("bravo", "!") -> bravo!

//! 2)
//? Napravi funkcija sto kje smeta cena na bilet, ako licata sto se od 0 do 7 godini vlezot e besplaten, od 7 do 18 godini cenata e 100 denari i nad 18 godini cenata da e 200 denari
//? ako imame negativen broj return na funkcijata

//! 3)
//? Napishi arrow funkcija voFarenhajt(celsius) so formula --------

//! 4)
//? Napishi funckija korisnicko ime, shto gi cisti praznite mesta na kraevite, i dvata argumenti gi pretvora vo mali bukvi i dodava tocka izmegju niv da se zacuvaat vo novi varijabli
//? ("  IVAN ", "  PeTrOv    ") -> 'ivan.petrov'

//! 5)
//? Napishi funkcija najdolg zbor so ciklus, ako site zbora imaat isti broj na bukvi vrati go prviot, ako ne vrati go najgolemiot zborot so najgolem tekst
