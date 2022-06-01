// function broj(x) {
//   x = Number(prompt("Unesite neki broj: "));
//   console.log(x);
// }
// broj();

// a = Number(prompt("Unesite neki broj: "));
// b = Number(prompt("Unesite neki broj: "));
// function sum(a, b) {
//   console.log(a + b);
// }
// sum(a, b);

// a = Number(prompt("Unesite neki broj: "));
// function parni(x) {
//   if (x % 2 == 0) {
//     console.log(x + " je paran");
//   } else if (x !== Number) {
//     console.log("Niste uneli broj");
//   } else {
//     console.log(x + " je neparan");
//   }
// }
// parni(a);

// niz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function najveci(niz) {
//   max = niz[0];
//   for (i = 0; i < niz.length; i++) {
//     if (niz[i] > max) {
//       max = niz[i];
//     }
//   }
//   console.log(max + " je najveci broj u nizu");
// }
// najveci(niz);

// x = String(prompt("Unesite neku rijec: "));
// y = String(prompt("Unesite neku rijec: "));
// c = false;
// function anagram(x, y) {
//   if (x.length !== y.length) {
//     console.log("Rijeci nisu iste duzine");
//   }
//     for (i = 0; i < x.length; i++) {
//       if (y.includes(x[i])) {
//         c = true;
//       } else {
//         c = false;
//       }
//     }
//   }
//   if (c) {
//     console.log("Rijeci su anagrami");
//   } else {
//     console.log("Rijeci nisu anagrami");
//   }
// }

// anagram(x, y);

// a = Number(prompt("Unesite neki broj: "));
// b = Number(prompt("Unesite neki broj: "));
// c = Number(prompt("Unesite neki broj: "));
// function average(a, b, c) {
//   console.log((a + b + c) / 3);
// }
// average(a, b, c);

// X = String(prompt("Unesite neku rijec: "));
// function centar(X) {
//   if (X.length % 2 == 0) {
//     console.log(X[X.length / 2 - 1] + X[X.length / 2]);
//   } else {
//     console.log(X[(X.length + 1) / 2 - 1]);
//   }
// }
// centar(X);

// x = Number(prompt("Unesite broj redova: "));
// function SquareWithStars(x) {
//   for (i = 0; i < x; i++) {
//     for (j = 0; j < x; j++) {
//       if (i == 0 || i == x - 1 || j == 0 || j == x - 1) {
//         console.log("*");
//       } else {
//         console.log(" ");
//       }
//     }
//     console.log("\n");
//   }
// }
// SquareWithStars(x);

// a = Number(prompt("Unesite stranicu a: "));
// b = Number(prompt("Unesite stranicu b: "));
// c = Number(prompt("Unesite stranicu c: "));
// function povrsinatrougla(a, b, c) {
//   p = (a + b + c) / 2;
//   S = Math.sqrt(p * (p - a) * (p - b) * (p - c));
//   console.log(S);
// }
// povrsinatrougla(a, b, c);
