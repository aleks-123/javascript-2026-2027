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

//! uslov za pecatenje na vrednosti pogolemi od 60 ili ednakvi
const poeniZaProverka = [45, 80, 60, 20];
for (let i = 0; i < poeniZaProverka.length; i++) {
  if (poeniZaProverka[i] >= 60) {
    console.log(poeniZaProverka[i]);
  }
}

//? Vezbi na chas
//? Ispecati gi broevite od 1 do 10 vklucitelno
//? Ispecati od 5 do 1, pa po ciklusot ispecati start
// 5
// 4
// 3
// 2
// 1
// start
//? ispecati od 5 do 15

const broevi = [10, 20, 30, 40, 50, 60];
let zbir = 0;

// zbir = 0 + 10;
// zbir = 10 + 20;
// zbir = 30 + 30;

for (let i = 0; i < broevi.length; i++) {
  zbir = zbir + broevi[i];
}
console.log(zbir);

const pocetniBroevi = [1, 2, 3, 4, 5, 6];
const zgolemeniBroevi = [];
// zgolemeniBroevi[0] = pocetniBroevi[0] + 1;
// zgolemeniBroevi[1] = pocetniBroevi[1] + 1;
// zgolemeniBroevi[2] = pocetniBroevi[2] + 1;
// zgolemeniBroevi[3] = pocetniBroevi[3] + 1;
// zgolemeniBroevi[4] = pocetniBroevi[4] + 1;
// zgolemeniBroevi[5] = pocetniBroevi[5] + 1;

for (let i = 0; i < pocetniBroevi.length; i++) {
  zgolemeniBroevi[i] = pocetniBroevi[i] * 2;
}
console.log(zgolemeniBroevi);

// const mesaniBroevi = [1, 2, 3, 4, 5, 6];
// const parniBroevi = []; //parniBroevi.length = 0
// const parniBroevi = [2]; //parniBroevi.length = 1
// const parniBroevi = [2, 4]; //parniBroevi.length = 2

for (let i = 0; i < mesaniBroevi.length; i++) {
  // 0 1 2 3 4 5
  if (mesaniBroevi[i] % 2 === 0) {
    // 0 1 2
    parniBroevi[parniBroevi.length] = mesaniBroevi[i];
  }
}
console.log(parniBroevi);

//! ZA DOMASHNA
//?  Ispecati 5 gradovi vo Makedonija
//? [2, 10, 12, 14, 20, 7, 5, 32, 17] ispecatigi samo broevite pogolemi od 10
//? presmetaj go proizvodot od broevite [5, 10, 20, 3, 8]
//? Namaligi cenite na arejot za 15 procenti [500, 200, 1800]
//? [60, 50, 70, 80, 55, 65, 45] kreiraj nova niza kade shto site broevi pogolemi od 60 zgolemigi za 10
