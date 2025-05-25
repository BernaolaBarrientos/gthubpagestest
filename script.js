document.getElementById('fecha').addEventListener('change', function () {
  const fecha = this.value;
  const salida = document.getElementById('resultado');

  if (fecha) {
    const fechaFormateada = new Date(fecha).toLocaleDateString('es-ES', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });
    salida.textContent = `📆 Fecha seleccionada: ${fechaFormateada}`;
  } else {
    salida.textContent = '';
  }
});
