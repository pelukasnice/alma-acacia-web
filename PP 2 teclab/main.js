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

/* SCROLL NAVBAR */

document.addEventListener("DOMContentLoaded", function () {
  // Selecciona todos los enlaces del navbar
  var links = document.querySelectorAll("nav a");

  // Agrega un evento de clic a cada enlace
  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      // Previene el comportamiento predeterminado del enlace
      event.preventDefault();

      // Obtiene el objetivo del enlace (el atributo href)
      var targetId = this.getAttribute("href");

      // Desplazamiento suave hacia el objetivo
      document.querySelector(targetId).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });
});

/* VALIDACION FORMULARIO*/ 

window.addEventListener("load", () => {
  const form = document.getElementById("formulario");
  const nombre = document.getElementById("nombre");
  const email = document.getElementById("email");
  const mensaje = document.getElementById("mensaje");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    validaCampos();
  });

  const validaCampos = () => {
    // captura los valores ingresados por el usuario
    const nombreValor = nombre.value.trim();
    const emailValor = email.value.trim();  
    const mensajeValor = mensaje.value.trim();  

    //Validando campo nombre
    if (!nombreValor) {
      console.log("CAMPO VACÍO");
      validaFalla(nombre, "Campo vacío");
    } else {
      validaOk(nombre);
    }

    //Validando campo email
    if(!emailValor){
        validaFalla(email,'Campo vacío')
    }else if(!validaEmail(emailValor)){
        validaFalla(email,'El email no es válido')
    }else{
        validaOk(email)
    }

    //Validando campo mensaje
    if (!mensajeValor) {
        console.log("CAMPO VACÍO");
        validaFalla(mensaje, "Campo vacío");
      } else {
        validaOk(mensaje);
      }
  };

  const validaFalla = (input, msje) => {
    const formControl = input.parentElement;
    const aviso = formControl.querySelector("p");
    aviso.innerText = msje;

    formControl.className = "form-control falla";
  };

  const validaOk = (input, msje) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control ok';
  };

  const validaEmail = (email) => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  };
});


