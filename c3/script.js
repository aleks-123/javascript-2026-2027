//? const test = "dsjgnasdjngsajognasdognasgjnsad"; => string
//? const test1 = 20 => number
//? const test2 = true => boolean

//! null => nesto sto nie stavame da nema vrednost (false)
//! undefined => nesto sto sistemot ni dava deka nema vrednost (false)

const student = {
  ime: "Ana",
  vozrast: 20,
  nasoka: "JavaScript",
  eAktiven: true,
  pol: null,
};

console.log(student.ime);
console.log(student["ime"]);
console.log(student.pol);
console.log(student.godini);

const izbiranjeNaNasoka = "nasoka";

console.log(student.izbiranjeNaNasoka); // undefined
console.log(student[izbiranjeNaNasoka]); // JavaScript

delete student.pol;
console.log(student);
console.log(student.pol);
console.log(Object.hasOwn(student, "ime")); //true
console.log(Object.hasOwn(student, "grad")); //false

// 2. Metodi - metodit moze da napravi neshto

const avtomobil = {
  marka: "Toyota",
  eZapalen: false,
  zapali: function () {
    this.eZapalen = true;
    console.log("Avtomobilot e zapalen");
  },
  izgasi: function () {
    this.eZapalen = false;
    console.log("Avtomobilot se izgasi");
  },
};

avtomobil.zapali();
avtomobil.izgasi();
console.log(avtomobil);

const proizvod = {
  ime: "Sok",
  cena: 60,
  vkupnaCena: function (kolicina) {
    return this.cena * kolicina;
  },
};

const smetka = proizvod.vkupnaCena(3.6);
const smetka1 = proizvod.vkupnaCena(10);
console.log(smetka, smetka1);

//! FOR LOOP - metod za avtomatiziranje na procesi

// for (let brojac = 1; brojac <= 5; brojac++) {
//   console.log(brojac); // 1,2,3,4,5 sekoj na nov red
// }

// for (let i = 1; i <= 100; i++) {
//   console.log("Uchime for loop");
// }

// for (let brojac = 5; brojac >= 1; brojac--) {
//   console.log(brojac);
// }

const studenti = ["Ana", "Marko", "Elena"];

console.log(studenti);
console.log(studenti[1]);
console.log(studenti.length); //3
console.log(studenti[studenti.length - 1]);
console.log(studenti[3]);
studenti[1] = "Ivan";
console.log(studenti);
console.log(Array.isArray(studenti));

console.log(studenti[0]);
console.log(studenti[1]);
console.log(studenti[2]);

//! studenti.length ja dobivame dolzinata na arejot
//! so for loop broime ili i go zgolemuvame za onolku pati kolku sto mu e zadadeno na uslovot
//! so i++ elementot go zgolemuvame za +1
//! i od toa sleduva da i kje se zgolemuva se dodeka uslovot na goleminata na i e pomala od dolzinata na studenti array

for (let i = 0; i < studenti.length; i++) {
  console.log(i);
  console.log(studenti[i]);
}
