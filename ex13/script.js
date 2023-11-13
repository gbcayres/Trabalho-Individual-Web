const macas = document.querySelectorAll(".maca")

macas.forEach(maca => {
  maca.addEventListener('click', () => {
    removerMaca(maca)
  })
})

function removerMaca(maca) {
  maca.classList.add("removido");
}