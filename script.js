// Script para el botón de subir arriba del todo de la página

const boton = document.getElementById("botonSubir");

window.onscroll = function () {
    boton.style.display = (document.documentElement.scrollTop > 100) ? "block" : "none";
};

boton.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

// Fin del script para el botón de subir arriba del todo de la página