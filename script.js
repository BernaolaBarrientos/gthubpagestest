document.getElementById('fecha').addEventListener('change', function () {
  const fecha = this.value;
  const salida = document.getElementById('resultado');
  const imagen = document.getElementById('imagenPorFecha');

  if (fecha) {
    const [anio, mes, dia] = fecha.split("-");
    const fechaFormateada = new Date(anio, mes - 1, dia).toLocaleDateString('es-ES', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });

    salida.firstChild.textContent = `📆 Fecha seleccionada: ${fechaFormateada}`;

    // Generar nombre automático de imagen: DDMMYYYY.png
    const nombreImagen = `${dia}${mes}${anio}.png`;
    const rutaImagen = `imagenes/${nombreImagen}`;

    imagen.src = rutaImagen;
    imagen.style.display = 'block';

    // Ocultar imagen si no existe
    imagen.onerror = function () {
      this.style.display = 'none';
    };
  } else {
    salida.textContent = '';
    imagen.style.display = 'none';
  }
});
