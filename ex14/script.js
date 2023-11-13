const pagina = document.querySelector(".pagina");
const btn = document.querySelector(".btn");

function changeMode() {
  pagina.classList.toggle("pagina-darkmode")
  btn.classList.toggle("btn-darkmode")
  if(btn.textContent == "dark") {
    btn.textContent = "light";
  } else {
    btn.textContent = "dark";
  }
}
