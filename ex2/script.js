const input = document.querySelector("#input");
    const btn = document.querySelector("#btn");
    const resultado = document.querySelector("#resultado")

    function inverter() {
    const num = input.value;
    const numTexto = num.toString();
    numInvertido = parseInt(numTexto.split("").reverse().join(""), 10);

    resultado.textContent = `Número invertido: ${numInvertido}`;
    } 