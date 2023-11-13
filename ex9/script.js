const btn = document.querySelector(".btn");
const pagina = document.body;

function msgErro() {
  alert("está dificil colega?")
  const audio = new Audio("sons/errou.wav");
  audio.play();
}

function msgAcerto(event) {
  event.stopPropagation();
  const audio = new Audio("sons/paraboins.flac");
  alert("PARABENS MERMAO !! VOCE CONSEGUIU !!");
  audio.play()
}