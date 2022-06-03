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

function TwoSum(num, target) {
  let arr = [];
  for (let i = 0; i < num.length; i++) {
    for (let j = i + 1; j < num.length; j++) {
      if (num[i] + num[j] == target) {
        arr.push(i);
        arr.push(j);
        break;
      }
    }
  }
  if (arr.length == 0) {
    console.log("Nema takvih brojeva");
  } else {
    console.log(arr);
  }
}
TwoSum([2, 7, 11, 15], 9);
