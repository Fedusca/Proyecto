document.getElementById("indexLink").addEventListener("click", function(){
  window.location.href = "index.html";
});

document.getElementById("masAlbumesLink").addEventListener("click", function(){
  window.location.href = "index.html";
});


const span = document.getElementById("welcome");
let nombre = prompt("¿Cuál es tu nombre?").toUpperCase();

while (nombre.length < 3) {
  nombre = prompt(
    "Tu nombre no puede contener menos de 3 caracteres, ingresa tu nombre nuevamente"
  ).toUpperCase();
}

let edad = prompt("¿Cuántos años tienes?");

while (isNaN(edad)) {
  edad = parseInt(prompt("Por favor, ingresa una edad válida (número entero)"));
}

if (edad < 18) {
  swal(
    "Lo siento",
    "Solo los mayores de edad pueden comprar tickets.",
    "warning"
  );

  const buyButtons = document.querySelectorAll(".buy");
  buyButtons.forEach(function (button) {
    button.disabled = true;
    button.style.backgroundColor = "lightgray";
  });

  span.textContent = "Hola, " + nombre + ", tienes que ser mayor de edad para adquirir entradas :(";
} else {
  span.textContent = "Hola, " + nombre.toUpperCase() + ", adquiri tu entrada!";
}



let tickets = {
  "Lima": 35,
  "Sao Paulo": 9,
  "Buenos Aires": 2,
  "Cordoba": 9,
  "Montevideo": 100,
};

const i = document.querySelector("i");
i.setAttribute("class", "fa-solid fa-ticket fa-2xl");
i.style.color = "#000000";

const buttons = document.querySelectorAll(".buy");

buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    const lugar = this.getAttribute("lugar");
    getTickets(lugar);
  });
});

const getTickets = (lugar) => {
  if (tickets[lugar] > 0)  {
    tickets[lugar]--;
    swal(` Adquiriste una entrada quedan ${tickets[lugar]} entradas disponibles para el concierto en ${lugar}`, "", "success");
  } else {
    swal(
      `Lo siento, no hay entradas disponibles para el concierto en ${lugar}`,
      "",
      "error"
    );
  }
  disableSoldOutButtons();
};

const disableSoldOutButtons = () => {
  const buyButtons = document.querySelectorAll(".buy");
  buyButtons.forEach(button => {
    const lugar = button.getAttribute('lugar');
    if (tickets[lugar] === 0) {
      button.disabled = true;
      button.textContent = "SOLD OUT";
      button.style.backgroundColor = "red";
    }
  });
};



//alert(`¡Hola ${nombre}! Tienes ${edad} años. ¡Bienvenido!`);
