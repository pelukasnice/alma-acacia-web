
/* GALERIA DE FOTOS MODAL */

document.addEventListener("click", function(e) {
    if (e.target.classList.contains("gallery-item")) {
        const src = e.target.getAttribute("src");
        document.querySelector(".modal-img").src = src; 
        const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
        myModal.show();
    }
})

/* SCROLL NAVBAR */
document.addEventListener('DOMContentLoaded', function () {
    // Selecciona todos los enlaces del navbar
    var links = document.querySelectorAll('nav a');

    // Agrega un evento de clic a cada enlace
    links.forEach(function (link) {
        link.addEventListener('click', function (event) {
            // Previene el comportamiento predeterminado del enlace
            event.preventDefault();

            // Obtiene el objetivo del enlace (el atributo href)
            var targetId = this.getAttribute('href');

            // Desplazamiento suave hacia el objetivo
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
});














