function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split("");
  elemento.innerHTML = "";
  textoArray.forEach(function(letra, i) {
 setTimeout(function() {
  elemento.innerHTML += letra;
 }, 35 * i)

  });
}

const texto = document.querySelector('h4');
typeWriter(texto);
