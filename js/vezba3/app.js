// const name = document.getElementById("name");
// const email = document.getElementById("email");

// function formSubmit() {
//   event.preventDefault();
//   //   console.log("form submitted");
//   //   alert("form submitted");
//   console.log(name.value);
//   console.log(email.value);
// }

// https://catfact.ninja/facts
// fetch("https://catfact.ninja/facts")
//   .then((response) => {
//     console.log("fetched");
//     return response.json();
//   })
//   .then((response) => {
//     console.log(response);
//     for (let i = 0; i < response.length; i++) {
//       console.log(response[data[i]]);
//     }
//   });

// async function getData() {
//   const res = await fetch("https://catfact.ninja/facts");
//   const resjson = await res.json();
//   const { data } = resjson;
//   data.forEach((el) => {
//     x = document.createElement("p");
//     x.innerText = el.fact;
//     document.body.appendChild(x);
//   });
// }
// getData();
