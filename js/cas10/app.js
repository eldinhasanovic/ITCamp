// const a = document.getElementById("haha");
// const a = document.getElementsByClassName("haha");
// const a = document.querySelector(".haha");
// ili #haha,h3 itd
// setTimeout(() => {
//   a.innerText = "xdddd";
// }, 1000);
// a.innerText = "xdddd";
// a.innerHTML = "<h1>xdddd</h1>";
// a.innerText = "xdddd";
// a.style.color = "red";
// const a = document.getElementById("haha");
// function AddText() {
//   x = String(prompt("Enter text"));
//   a.innerText = x;
//   console.log(a);
// }
// AddText();

// const a = document.getElementById("haha");
// function AddText() {
//   sum = "";
//   x = String(prompt("Enter text"));
//   c = Number(prompt("Unesite broj ponavljanja"));
//   for (let i = 0; i < c; i++) {
//     sum += x;
//   }
//   a.innerText = sum;
//   console.log(a);
// }
// AddText();

// function mojaF() {
//     const a = document.getElementById("haha");
//     a.style.fontFamily = "Comic Sans MS";
//     a.style.fontSize = "12px";
//     a.style.color = "red";
// }

// function mojaF() {
//   const a = document.getElementById("haha");
//   if (a.style.color == "green") {
//     a.style.color = "yellow";
//   } else {
//     a.style.color = "green";
//   }
// }

// arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function mojaF(niz) {
//   prosti = [];

//   prosti = arr.filter((el) => {
//     for (j = 2; j < el; j++) {
//       if (el % j == 0) {
//         return el + "nije prost";
//       }
//     }
//     console.log(prosti);
//   });
// }

// mojaF(arr);

// function mojaF() {
//   const a = document.getElementById("haha");
//   a.style.fontFamily = "Comic Sans MS";
//   a.style.fontSize = "12px";
//   a.style.color = "red";
// }

// const url = "https://fakestoreapi.com/products";

// const load = () =>
//   new Promise((resolve, reject) => {
//     const xhttp = new XMLHttpRequest();
//     xhttp.open("GET", url);
//     xhttp.send();
//     xhttp.onload = function () {
//       resolve(JSON.parse(this.responseText));
//     };
//     xhttp.onerror = () => {
//       reject(this);
//     };
//   });

// const loadProducts = async () => {
//   const products = await load();

//   console.log(products);

//   displayArticles(products);
// };

// var displayArticles = (articles) => {
//   console.log(articles[1]);

//   const newArray = articles.map((article) => {
//     return `<div class="card">
//                     <img src="${article.image}" alt="SlikaNeka">
//                     <div>
//                         <h4 class="category">${article.category}</h4>
//                         <p class="description">${article["description"]}</p>
//                         <span class="price">${article["price"]}</span>
//                     </div>
//                 </div>`;
//   });

//   console.log(newArray);

//   newArray.forEach(
//     (a) => (document.getElementById("mainDisplay").innerHTML += a)
//   );
// };
