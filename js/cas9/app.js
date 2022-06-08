// function twiceAsOld(dY, sY) {
//   if (dy == 2 * sy) {
//     console.log("0");
//   } else {
//     for (i = sy.length; i < Infinity; i++) {
//       if (dy == 2 * i) {
//         console.log(i);
//         break;
//       } else {
//         console.log("No");
//       }
//     }
//   }
// }
// x = Number(prompt("Enter dads age"));
// y = Number(prompt("Enter sons age"));
// twiceAsOld(x, y);
// function TwiceAsOld() {
//   otac = Number(prompt("Enter dads age"));
//   sin = Number(prompt("Enter sons age"));
//   if (otac == 2 * sin) {
//     console.log("0");
//   } else
//     for (i = 0; i < 100; i++) {
//       if (otac + i == 2 * (sin + i)) {
//         console.log(i);
//         break;
//       } else if (otac - i == 2 * (sin - i)) {
//         console.log(i);
//         break;
//       }
//     }
// }
// TwiceAsOld();
// function SumTheStrings(a, b) {
//   console.log(parseInt(a) + parseInt(b));
// }
// function countOdd(n) {
//   let count = 0;
//   for (let i = 1; i < n; i++) {
//     if (i % 2 != 0) {
//       count++;
//     }
//   }
//   console.log(count);
// }
// countOdd(15023);
// function CheckSameCase(a, b) {
//   if (Number(a) || Number(b) || a == " " || b == " ") {
//     console.log(-1);
//   } else if (
//     (a.toUpperCase() === a && b.toLowerCase() === b) ||
//     (a.toLowerCase() === a && b.toUpperCase() === b)
//   ) {
//     console.log(0);
//   } else if (
//     (a.toUpperCase() === a && b.toUpperCase() === b) ||
//     (a.toLowerCase() === a && b.toLowerCase() === b)
//   ) {
//     console.log(1);
//   }
// }
// a = String(prompt("Enter first number"));
// b = String(prompt("Enter second number"));
// CheckSameCase(a, b);
// function FindMultiplesOfNumber(a, b) {
//   arr = [];
//   for (let i = 1; i <= b; i++) {
//     if (i % a == 0) {
//       arr.push(i);
//     }
//   }
//   if (arr.length == 0) {
//     console.log("Nema takvih brojeva");
//   } else {
//     console.log(arr);
//   }
// }
// a = Number(prompt("Enter first number"));
// b = Number(prompt("Enter second number"));
// FindMultiplesOfNumber(a, b);
//
// function TwoSum(num, target) {
//   let arr = [];
//   for (let i = 0; i < num.length; i++) {
//     for (let j = i + 1; j < num.length; j++) {
//       if (num[i] + num[j] == target) {
//         arr.push(i);
//         arr.push(j);
//         break;
//       }
//     }
//   }
//   if (arr.length == 0) {
//     console.log("Nema takvih brojeva");
//   } else {
//     console.log(arr);
//   }
// }
// TwoSum([2, 7, 11, 15], 9);
// function longestCommonPrefix(strs) {
//     prefix = ""
//     for (i = 0; i < strs.length; i++) {
//         for (j = 0; j < strs[i].length; j++) {
//             if(strs[i][j] === strs[i+1][j] === strs[i+2][j]) {
//                 prefix += strs[i][j]
//             }
// }

// console.log("dsajsopadja");
// arr = [3, 9, 1, 27, 54, 23];
// sum = 0;
// mojaF = (e) => {
//   sum += e;
//   console.log(sum);
// };
// arr.forEach(mojaF);

// arr = [0, 1, false, 2, undefined, "", 3, null];
// function filter(arr) {
//    arr1 = [];
//   for ( i = 0; i < arr.length; i++) {
//     if (arr[i] !=== "" && arr[i] !=== null && arr[i] !=== undefined) {
//       newArr.push(arr[i]);
//     }
//   }
//   console.log(arr1);
// }
// filter(arr);
// arr1 = [];

// arr.forEach((el) => {
//   if (
//     el !== "" &&
//     el !== null &&
//     el !== undefined &&
//     el !== 0 &&
//     el !== false
//   ) {
//     arr1.push(el);
//   }
// });
// console.log(arr1);

// arr = [1, 2, 3, 4, 5];
// arr1 = [];
// y = Number(prompt("Enter number"));
// x = Number(prompt("Enter number"));
// for (i = 0; i < y; i++) {}
// arr.forEach((el) => {
//   if (x !== el && y !== el) {
//     arr1.push(el);
//   }
// });
// console.log(arr1);

// x = Number(prompt("Enter number"));
// if (x % 2 == 0) {
//   console.log(x * 8);
// } else {
//   console.log(x * 9);
// }

// function fakeBin(x) {
//   str = "";
//   for (el of x) {
//     if (Number(el) >= 5) {
//       str += "1";
//     } else {
//       str += "0";
//     }
//   }
//   return str;
// }

// a = prompt("Unesite neku rijec: ");
// bzsv = a.replace(" ", "").toLowerCase();
// zadnjeslovo = bzsv.length - 1;
// jelipalindrom = true;

// for (let i = 0; i < bzsv.length / 2; i++) {
//   if (bzsv[i] !== bzsv[zadnjeslovo - i]) {
//     jelipalindrom = false;
//     break;
//   }
// }
// console.log(jelipalindrom);

// x = "I!U!U!U!U!I!I!I!I!I!";
// function uzvicnici(x) {
//   y = x.replace(/!/g, "");
//   console.log(y);
// }
// uzvicnici(x);

// function powersof2(n) {
//   let arr = [];
//   for (let i = 0; i < n; i++) {
//     arr.push(2 ** i);
//   }
//   console.log(arr);
// }
// powersof2(3);
