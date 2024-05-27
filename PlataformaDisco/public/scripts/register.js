let boton = document.getElementById("btnReg");
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let contrasena = document.getElementById("contrasena");

boton.addEventListener("click", async function(e){
    e.preventDefault();
    try {
        console.log("Intentando enviar datos al backend...");
        const response = await axios.post("http://localhost:5000/user/user", {
            nombre: nombre.value,
            apellido: apellido.value,
            email: email.value,
            contrasena: contrasena.value 
        });
        console.log("Respuesta del servidor recibida:", response.data);
        swal({
            title: "¡Usuario registrado!",
            text: "Usuario registrado con éxito.",
            icon: "success",
            confirmButtonText: "Ok"
        }).then(() => {
            window.location.href = "./login.html";
        });
    } catch (error) {
        swal("Error", "No se pudo registrar el usuario.", "error");
    }
});

document.getElementById('cancelar').addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = 'index.html';
  });