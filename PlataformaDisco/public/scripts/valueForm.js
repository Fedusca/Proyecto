function validateForm(form) {
  const inputs = form.getElementsByTagName("input");

  for (let i = 0; i < inputs.length; i++) {
    // Si el id del input es "portada", omite la validación y continúa con el siguiente input
    if (inputs[i].id === "portada") continue;

    if (inputs[i].value.trim() === "") {
      swal(
        "Error",
        "Por favor, completa todos los campos antes de enviar el formulario.",
        "error"
      );
      return false;
    }
  }

  return true;
}


// const validateInputs = (titulo, descripcion) => {
//   if (titulo.trim() === '' && descripcion.trim() === '') {
//     swal("Debes completar el título y la descripción", { icon: "error" });
//     return false;
//   } else if (titulo.trim() === '') {
//     swal("Debes completar el título", { icon: "error" });
//     return false;
//   } else if (descripcion.trim() === '') {
//     swal("Debes completar la descripción", { icon: "error" });
//     return false;
//   }
//   return true;
// };