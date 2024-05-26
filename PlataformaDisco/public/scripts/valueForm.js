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