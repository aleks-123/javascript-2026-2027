//! Nizi - dodavanje i otstranuvanje na elementi

// push() - dodava element na krajot od nizata -> dolzina
// pop() - go otstranuva posledniot element od nizata -> izbrisaniot element
// unshift() - dodava elemnt na pocetok na nizata -> dolzina
// shift() - go otstranuva prviot elemnt od nizata -> izbrishaniot elemnt

// const ovosje = ["jabolko", "banana", "malina"];

// ovosje.push("portokal");
// console.log(ovosje);
// ovosje.pop();
// console.log(ovosje);
// ovosje.unshift("kivi");
// console.log(ovosje);
// ovosje.shift();
// console.log(ovosje);

const drugoOvosje = ["praska", "kajsija"];
const dolzinaPoPushMetoda = drugoOvosje.push("krusha");
console.log(drugoOvosje, dolzinaPoPushMetoda);
const izvadenoOvoshje = drugoOvosje.pop();
console.log(izvadenoOvoshje);

const broeviPoIzbor = [3, 8, 12, 13, 16];
const parni = [];

for (let i = 0; i < broeviPoIzbor.length; i++) {
  if (broeviPoIzbor[i] % 2 === 0) {
    parni[parni.length] = broeviPoIzbor[i];
  }
}

for (let i = 0; i < broeviPoIzbor.length; i++) {
  if (broeviPoIzbor[i] % 2 === 0) {
    parni.push(broeviPoIzbor[i]);
  }
}

//? Vezbi
//? Pocni so predmeti = ["html", "css"], dodaj Javascript na pocetok od areot i git na kraj od areot, na pocetok ispecatija nizata i dolzinata, odstranigo posledniot i ispectigo koj predmet e otstranet

//! Stringovi

const jazik = "JavaScript";
console.log(jazik[0]);
console.log(jazik.length);
console.log(jazik[jazik.length - 1]);
console.log(jazik.toUpperCase());
console.log(jazik.toLowerCase());

const vnesenoIme = "  Ana  ";
console.log(vnesenoIme);
const cistoIme = vnesenoIme.trim();
console.log(cistoIme);
console.log(`Zdravo, ${cistoIme}`);
console.log("banana".replace("a", "o"));
console.log("banana".replaceAll("a", "o"));

const zbor = "banana";
const zamenaZbor = zbor.replaceAll("a", "o");
console.log(zamenaZbor);

//! 3. Prebaruvanje vo niza
// const gradovi = ["Skopje", "Tetovo", "Kichevo", "Kavadarci"];
// console.log(gradovi.includes("Ohrid")); //
// console.log(gradovi.includes("Tetovo")); //
// console.log(gradovi.indexOf("Kichevo"));
// console.log(gradovi.indexOf("Strumica"));

const poraka = "Uchime JavaScript";
console.log(poraka.includes("JavaScript"));
console.log(poraka.includes("Script"));
console.log(poraka.startsWith("Uchime"));
console.log(poraka.endsWith("Script"));

console.log("  JAVASCRIPT   ".trim().toLowerCase() === "javascript");

//! 4. Slice i splice
const gradovi = ["Skopje", "Tetovo", "Kichevo", "Kavadarci"];
const slasjGradovi = gradovi.slice(1, 3);

const slajsPoraka = poraka.slice(0, 4);
console.log(gradovi);
console.log(slasjGradovi);

console.log(slajsPoraka);

/////
const gradoviZaPromena = ["Skopje", "Tetovo", "Kichevo", "Kavadarci"];
const izbrisaniGradovi = gradoviZaPromena.splice(1, 2, "Veles");
console.log(gradoviZaPromena);
console.log(izbrisaniGradovi);

///////////
//! Split
const spisok = "Krste,Mirce,Aco";
const iminja = spisok.split(",");
console.log(spisok);
console.log(iminja);
console.log(iminja.join(", "));

const vneseniGradovi = "Skopje, Ohrid, Bitola".split(",");
const cistiGradovi = [];
console.log(vneseniGradovi);
for (let i = 0; i < vneseniGradovi.length; i++) {
  cistiGradovi.push(vneseniGradovi[i].trim());
}
console.log(cistiGradovi);

// 7, map - e loop kade shto rezultatot e nova niza

const pocetniBroevi = [2, 3, 4, 6, 7, 20];

const zgolemeni = pocetniBroevi.map((broj, i) => {
  console.log(broj, i);
  return broj * 2;
});

console.log(zgolemeni);
console.log(pocetniBroevi);

const nerudeniIminja = [" stojko", "MARKO", "Elena"];
const sredeniIminja = nerudeniIminja.map((ime) => {
  return ime.trim().toLowerCase();
});

console.log(sredeniIminja);

// 8. fillter i find
const bodovi = [40, 80, 60, 25];
const polozeni = bodovi.filter((bod) => {
  return bod >= 60;
});

const polozen = bodovi.find((bod) => {
  return bod >= 60;
});

console.log(polozeni);
console.log(polozen);

const iminjaSoA = sredeniIminja.filter((ime) => {
  return ime.endsWith("a");
});

console.log(iminjaSoA);

// reduce od niza do eden rezultat
const inzosi = [10, 20, 30];
const vkupno = inzosi.reduce((zbir, iznos) => {
  return zbir + iznos;
}, 100);

console.log(vkupno);

// 4. Sort
const ceni = [20, 60, 10, 5, 70];
const podredeniCeni = ceni.slice();
podredeniCeni.sort((a, b) => {
  return b - a;
});

console.log(ceni);
console.log(podredeniCeni);
