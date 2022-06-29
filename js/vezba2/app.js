// root = document.getElementById("root");

// // function createEl() {
// //   console.log("Button clicked");
// //   el = document.createElement("h1");
// //   el.innerText = "New element";
// //   el.style.backgroundColor = "blue";
// //   el.style.color = "white";
// //   root.appendChild(el);
// //   // console.log(el)
// // }

// // brojac = 0;
// // x = false;
// function addClass() {
//   //   x = false;
//   //   if (x == false) {
//   //     x = true;
//   //     root.classList.add("mojaKlasa");
//   //     console.log(x);
//   //   } else if (x === true) {
//   //     x = false;
//   //     root.classList.remove("mojaKlasa");
//   //     console.log(x);
//   //   }
//   //   if (x == false) {
//   //     root.classList.add("mojaKlasa");
//   //     x = true;
//   //   } else if (x === true) {
//   //     root.classList.remove("mojaKlasa");
//   //     x = false;
//   //   }
//   root.classList.toggle("mojaKlasa");
// }
x = document.getElementById("minutes");
y = document.getElementById("seconds");
function start() {
  const Srk = setInterval(() => {
    for (let i = 0; i < 60; i++) {
      y.innerText = i;
      if (i == 59) {
        x.innerText = 0;
        y.innerText = 0;
      }
    }
  }, 1000);
}
function stop() {
  const Srk = setInterval(() => {
    for (let i = 0; i < 60; i++) {
      y.innerText = i;
      if (i == 59) {
        x.innerText = 0;
        y.innerText = 0;
      }
    }
  }, 1000);

  clearInterval(Srk);
}
