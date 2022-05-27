// brojevi = [1, 2, 3];
// console.log(brojevi);
// x = Number(prompt("Unesite jos neke elemente"));
// brojevi.push(x);
// console.log(brojevi);

// niz = [3, 5, 10, 21, 42, 22, 1, 72, 33, 44, 55, 66, 77, 88, 99, 100];
// niz2 = [];
// for (i = 0; i < niz.length; i++) {
//   niz2.unshift(niz[i]);
// }
// console.log(niz2);

// x = Number(prompt("Unesite koliko zelite brojeva u nizu: "));
// niz = [];
// for (i = 0; i < x; i++) {
//   niz.push(Number(prompt("Unesite broj: ")));
// }
// console.log(niz);

// niz = ["crvena", "zelena", "crna", "bela"];
// niz2 = [];
// for (i = 0; i < 4; i++) {
//   niz2.push(niz[i]);
// }
// console.log(niz2);

// niz = ["crvena", "zelena", "crna", "bela"];
// str = niz[0];
// for (i = 1; i < niz.length; i++) {
//   str += "+" + niz[i];
// }
// console.log(str);

// x = "The Quick Brown Fox";
// niz = "";
// for (i = 0; i < x.length; i++) {
//   if (i % 2 == 0) {
//     niz += x[i].toUpperCase();
//   } else {
//     niz += x[i].toLowerCase();
//   }
// }
// console.log(niz);

// niz = [3, 5, 10, 21, 42, 22, 1, 72, 33, 44, 55, 66, 77, 88, 99, 100];
// sum = 0;
// for (i = 0; i < niz.length; i++) {
//   sum += niz[i];
// }
// console.log(sum);

niz = [3, 5, 2, 6, 12, 42, 243];
niz1 = [];
niz2 = [];
for (i = 0; i < niz.length; i++) {
  if (niz[i] % 2 == 0) {
    niz1.push(niz[i]);
  } else {
    niz2.push(niz[i]);
  }
}
console.log(niz1);
console.log(niz2);
