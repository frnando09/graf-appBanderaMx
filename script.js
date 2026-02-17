function convertirHex(valor) {
    let hex = Number(valor).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}

const sliderVerde = document.getElementById("sliderVerde");
const sliderRojo = document.getElementById("sliderRojo");

const cajaVerde = document.getElementById("verde");
const cajaRojo = document.getElementById("rojo");

const hexVerde = document.getElementById("hexVerde");
const hexRojo = document.getElementById("hexRojo");

// Evento para el color verde
sliderVerde.addEventListener("input", () => {
    let valor = sliderVerde.value;
    let colorHex = "#" + convertirHex(0) + convertirHex(valor) + convertirHex(0);
    cajaVerde.style.backgroundColor = colorHex;
    hexVerde.textContent = colorHex.toUpperCase();
});

// Evento para el color rojo
sliderRojo.addEventListener("input", () => {
    let valor = sliderRojo.value;
    let colorHex = "#" + convertirHex(valor) + convertirHex(0) + convertirHex(0);
    cajaRojo.style.backgroundColor = colorHex;
    hexRojo.textContent = colorHex.toUpperCase();
});
