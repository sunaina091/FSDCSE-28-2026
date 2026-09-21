const root = document.getElementById("container");
console.log(root);
const btn = document.getElementById("btn");
console.log(btn);

async function getData() {
  const serverdata = await fetch("https://fakestoreapi.com/products");
  const jsondata = await serverdata.json();
  root.innerHTML = `<h style=color:red>${jsondata[0].title}</h>`;
  //   console.log(jsondata[0].title);
}
btn.addEventListener("click", getData);
