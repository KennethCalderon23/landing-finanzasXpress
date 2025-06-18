const form = document.getElementById('formCompra');
const mensaje = document.getElementById('mensaje');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nombre = form.nombre.value.trim();
  const email = form.email.value.trim();

  if (!nombre || !email) {
    mensaje.textContent = "Por favor completa todos los campos.";
    mensaje.style.color = "red";
    return;
  }

  mensaje.style.color = "green";
  mensaje.textContent = `¡Gracias, ${nombre}! Te enviaremos el ebook a ${email}.`;
  form.reset();
});
