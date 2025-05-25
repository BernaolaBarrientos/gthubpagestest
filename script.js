document.getElementById('fecha').addEventListener('change', function() {
  const fecha = this.value;
  const salida = document.getElementById('resultado');

  if (fecha) {
    salida.textContent = `Has seleccionado la fecha: ${fecha}`;
  } else {
    salida.textContent = '';
  }
});
