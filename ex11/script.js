const btn = document.querySelector("#btn")

const larguraMax = window.innerWidth - 100
const alturaMax = window.innerHeight - 100

function moverBotao() {
  x = Math.floor(Math.random() * larguraMax);
  y = Math.floor(Math.random() * alturaMax);

  btn.style.left = x + "px";
  btn.style.top = y + "px";
}