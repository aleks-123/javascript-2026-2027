//! Kopiranje na arrays
//? kopiranje so pomosh na spread operator
const testArray = [2, 5, 7, 9, 20];
const kopiranArray = [...testArray];

const array1 = [23, 12, 21, 41, 12];

const array2 = [1, 1, 2, 4, 5];
const array3 = [...array1, ...array2, 12, 10, 23];

//?Kopiranje so pomosh na slice
const testArrayDrug = [1, 3, 2, 5, 2, 3];
const copyArray = testArrayDrug.slice();

kopiranArray.push(100);

//! Kopiranje na objekti

const persona1 = {
  name: "Marko",
  age: 25,
  city: "Skopje",
};

const persona2 = { ...persona1, exams: true, age: 15 };
console.log(persona1);
console.log(persona2);

//! Destruction na Arrays - Razlozuvanje

const arr1 = [1, 5, 8];
const [a, b, c] = arr1;
console.log(a);
const arr2 = [50, 100, 200, 300, 400, 500];
const [element, element2, ...ostanatiElementi] = arr2;
console.log(element, element2, ostanatiElementi);

//! Destruction na objekti - Razlozuvanje

const mojObjekt = { produkt: "solenki", cena: 35, prodavnica: "Vero", grad: "Skopje" };

const { cena: cenaNaProizvod, produkt } = mojObjekt;

console.log(cenaNaProizvod, produkt);

////////////////////!

const studenti = [
  { ime: "Bojan", prosek: 7.2, grad: "Skopje" },
  { ime: "Pero", prosek: 8, grad: "Gostivar" },
  { ime: "Janko", prosek: 9, grad: "Tetovo" },
  { ime: "Vesna", prosek: 6, grad: "Kriva Palanka" },
  { ime: "Vancho", prosek: 5.6, grad: "Shtip" },
  { ime: "Stanko", prosek: 10, grad: "Kumanovo" },
  { ime: "Ivana", prosek: 9.3, grad: "Resen" },
  { ime: "Bashkim", prosek: 9.6, grad: "Ohrid" },
  { ime: "Sandra", prosek: 9.8, grad: "Kicevo" },
];

studenti.forEach((student) => console.log(student.ime));

const studentiPolozile = studenti
  .filter((student) => student.prosek > 8)
  .sort((a, b) => b.prosek - a.prosek)
  .slice(0, 3);

const studentSoProsekDevet = studenti.find((student) => student.prosek === 9);

console.log(studentSoProsekDevet);

//! Ternary operators
const godini = 15;
const vozrast = godini >= 18 ? "Polnoleten" : "Ne e polnoleten";
console.log(vozrast);

// const studenti = [
//   { ime: "Bojan", prosek: 7.2, grad: "Skopje" },
//   { ime: "Pero", prosek: 8, grad: "Gostivar" },
//   { ime: "Janko", prosek: 9, grad: "Tetovo" },
//   { ime: "Vesna", prosek: 6, grad: "Kriva Palanka" },
//   { ime: "Vancho", prosek: 5.6, grad: "Shtip" },
//   { ime: "Stanka", prosek: 10, grad: "Kumanovo" },
//   { ime: "Ivana", prosek: 9.3, grad: "Resen" },
//   { ime: "Bashkim", prosek: 9.6, grad: "Ohrid" },
//   { ime: "Sandra", prosek: 9.8, grad: "Kicevo" },
// ];

const nagradaStudenti = studenti.map((s) => {
  return {
    ...s,
    // prosek: s.prosek >= 8 ? s.prosek + 1 : s.prosek,
    prosek: s.prosek + 1,
  };
});
console.log(nagradaStudenti);

const zbirNaProsek = studenti.reduce((acc, s) => acc + s.prosek, 0).toFixed(1);
console.log(zbirNaProsek);

//? DOMASHNA

//! Site studenti od Skopje cie ime zavrshuva na "o" i imaat prosek nad 7, podredeni po ime rastecki
//! Site studenti koi imaat prosek nad 9 i ne se od Skopje, podredeni po prosek opagjacki
//! Prvite 3 studenti koi imaat prosek nad 8 i ne se od Skopoje, podredeni po prosek opagjacki
//! Prvite 3 studenti koi imaat iminja od 5 karakteri, podredeni po prosek
//! Vkupen prosek na studentite koi se od Kumanovo
//! Vkupniot prosek od site studenti podelen so brojot na studenti za generalen prosek na cela generacija
//! Da se dodade uste eden student so ime Goran, prosek 6.8 i grad Delcevo
//! Da se izbrishe prviot student vo studentite
//! Da se krerira nov array(map) kade shto za studentite od Ohrid i Kumanovo prosecite im se zgolemeni za +2
//! Da se presmeta vkupen prosek na Ohrigjani i Tetovcani i da se najdi prosekot niven
