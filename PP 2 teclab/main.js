
/* SCROLL NAVBAR */

document.addEventListener("DOMContentLoaded", function () {
  // Selecciona todos los enlaces del navbar
  var links = document.querySelectorAll("nav a");

  // Agrega un evento de clic a cada enlace
  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      // Previene el comportamiento predeterminado del enlace
      event.preventDefault();

      // Obtiene el objetivo del enlace 
      var targetId = this.getAttribute("href");

      // Desplazamiento suave hacia el objetivo
      document.querySelector(targetId).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });
});

/* GALERIA DE FOTOS MODAL */

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("gallery-item")) {
    const src = e.target.getAttribute("src");
    document.querySelector(".modal-img").src = src;
    const myModal = new bootstrap.Modal(
      document.getElementById("gallery-modal")
    );
    myModal.show();
  }
});

/* VALIDACION FORMULARIO*/ 

(() => {
  'use strict';

  const forms = document.querySelectorAll('.needs-validation');

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add('was-validated');
    }, false);
  });
})();


/* EMAIL JS*/ 

const btn = document.getElementById('button');
const form = document.getElementById('form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  if (form.checkValidity()) {
    btn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_ccu1m6q';

    emailjs.sendForm(serviceID, templateID, form)
      .then(() => {
        btn.value = 'Send Email';
        Swal.fire({
          icon: 'success',
          title: 'Estaremos en contacto con Ud a la brevedad.',
          showConfirmButton: false,
          timer: 2300
        });
        //Elimina la clase 'was-validated' y restablece el formulario.
        form.classList.remove('was-validated');
        form.reset();
      })
      .catch((err) => {
        btn.value = 'Send Email';
        Swal.fire({
          icon: 'error',
          title: 'Error al enviar el correo electrónico',
          text: JSON.stringify(err)
        });
      });
  }
});




