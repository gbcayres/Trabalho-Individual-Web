const pagina = document.querySelector(".pagina");
const btn = document.querySelector(".btn");

function changeMode() {
  pagina.classList.toggle("pagina-darkmode");
  btn.classList.toggle("btn-darkmode");
  pagina.classList.toggle("pagina-lightmode");
  btn.classList.toggle("btn-lightmode");
}