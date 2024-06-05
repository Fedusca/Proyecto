const validateUserInputs = (nombre, apellido, email, contrasena) => {
    if (nombre.trim() === '' && apellido.trim() === '') {
        swal("Debes completar el nombre y el apellido", { icon: "error" });
        return false;
    } else if (nombre.trim() === '') {
        swal("Debes completar el nombre", { icon: "error" });
        return false;
    } else if (apellido.trim() === '') {
        swal("Debes completar el apellido", { icon: "error" });
        return false;
    } else if (email.trim() === '') {
        swal("Debes completar el email", { icon: "error" });
        return false;
    } else if (contrasena.trim() === '') {
        swal("Debes completar la contraseña", { icon: "error" });
        return false;
    } else if (contrasena.length < 5) {
        swal("La contraseña debe tener al menos 5 caracteres", { icon: "error" });
        return false;
    }
    return true;
};

let boton = document.getElementById("btnReg");
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let contrasena = document.getElementById("contrasena");

boton.addEventListener("click", async function(e) {
    e.preventDefault();
    
   
    if (!validateUserInputs(nombre.value, apellido.value, email.value, contrasena.value)) {
        return;
    }
    
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
        console.error('Error al registrar al usuario:', error);
        swal("Error", "No se pudo registrar el usuario.", "error");
    }
});

document.getElementById('cancelar').addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = 'index.html';
  });