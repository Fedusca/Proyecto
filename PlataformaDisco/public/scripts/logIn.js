function validarFormulario() {
  const nombre = document.getElementById("nombre").value.trim();
  const contraseña = document.getElementById("contrasena").value.trim();

  if (!nombre || !contraseña) {
      // Mostrar SweetAlert indicando que se deben completar todos los campos
      swal(
         'error', 'por favor llene los campos'
      );
  } else {
      // Si todos los campos están completos, enviar el formulario
      document.getElementById("form").submit();
  }
}
document.getElementById("contrasena").addEventListener("input", function(){
  let pass = this.value;
  let errorMsj=document.getElementById("mensajeError");
  if(pass.length < 6){
      errorMsj.style.display="block";
  }else{
      errorMsj.style.display="none";
  }

})
let boton = document.getElementById("iniciar");
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let contrasenia = document.getElementById("contrasena");
boton.addEventListener("click", async function(e){
  e.preventDefault();

      swal({
          title: "¡sesion iniciada!",
          text: "Usuario registrado con éxito.",
          icon: "success",
          confirmButtonText: "Ok"
      }).then(() => {
          window.location.href = "./index.html";
      });

})