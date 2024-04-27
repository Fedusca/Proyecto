// 1
// Primer Ejercicio
// Mi Primera Página Con JavaScript
// Podemos a partir de ahora empezar a dinamizar nuestro proyecto usando JS.

// En este breve ejercicio vamos a dejar todo preparado para ir sumando funcionalidad a nuestra página. Para lograr esto, seguí este paso a paso:

// Creá un archivo tours.js .
// Creá un archivo HTML que liste las fechas de la gira (y que ya tienes en tu proyecto) y vinculalo con el de JavaScript.
// show hint
// Trabajá en tu archivo JS:

// Preguntale al usuario su nombre y guardalo en una Variable.
// Preguntale su edad y guardala en una Variable.
// Por último, mostrale un mensaje al usuario que incluya su nombre y edad. Por ejemplo:


// 2

// Proyecto
// Saludo personalizado
// Durante la clase pasada practicamos pedirle al usuario que ingrese información con un prompt. Ahora, vamos a pedirle a la persona que complete su nombre cuando ingresa a la página de tours pero en lugar de mostrar una alert vamos a mostrarlo en un tag span que le dé una bienvenida personalizada. Para ello deberás agregar el siguiente código en tu HTML, posteriormente utilizaremos el id para manipular el contenido del span.

//  <span id="welcome"></span>
// El nombre de la persona se verá en mayúscula. Por ejemplo, "Hola, JUAN".

// REQUISITOS

// Antes de ingresar el nombre deberá ver un mensaje genérico.
// Si la persona no completa su nombre deberá comunicarle con un alert que debe completarlo.
// Si la persona ingresa una sola letra le informamos que al menos deben tener 2 letras y volvemos a pedirle que ingrese nuevamente su nombre.

// 3
// Ejercicios
// 1. Say your Name Remix
// Partiendo del ejercicio que completaste en la clase anterior, ahora deberás:

// Exigirle al usuario que ingrese un nombre de mínimo 3 letras. Usando un while loop no deberás permitir que el usuario ingrese un nombre que no cumpla con estos requisitos.
// Además, cuando por fin se ingrese el nombre correcto, deberá aparecer el icono de tickets justo al nombre del usuario.
// Tené en cuenta que deberás incluir un ícono con un enlace CDN de Font Awesome. Luego, deberás agregarlo a tu archivo HTML y configurar el elemento con la clase del ícono deseado.


const span = document.getElementById("welcome");
let nombre = prompt("¿Cuál es tu nombre?").toUpperCase();

while(nombre.length < 3){
nombre = prompt(
    "Tu nombre no puede contener menos de 3 caracteres, ingresa tu nombre nuevamente"
).toUpperCase();
}

let edad = prompt("¿Cuántos años tienes?");

span.textContent = " Hola, " + nombre.toUpperCase() + " adquiri tu entrada!";

const i = document.querySelector("i");
i.setAttribute("class", "fa-solid fa-ticket fa-2xl");
i.style.color = "#000000";

const button = document.querySelector(".buy");

document.addEventListener("click", function() {
    const button = document.querySelector(".buy");
  
    button.addEventListener("click", function() {
      const lugar = this.getAttribute("lugar");
      getTickets(true, lugar);
    });
  });
const getTickets = (hayTickets, lugar) => {
    if (hayTickets) {
      swal ("Hay entradas disponibles para el concierto en " , lugar, "success");
    } else {
      swal ("Lo siento, no hay entradas disponibles para el concierto en " + lugar + "error");
    }
  };


//alert(`¡Hola ${nombre}! Tienes ${edad} años. ¡Bienvenido!`);




