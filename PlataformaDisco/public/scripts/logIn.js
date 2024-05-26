function validateForm(form) {
    const inputs = form.getElementsByTagName("input");
  
    for (let i = 0; i < inputs.length; i++) {
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
  
  document.addEventListener("DOMContentLoaded", (event) => {
      const forms = document.querySelectorAll(".form");
    
      forms.forEach((form) => {
        form.onsubmit = () => validateForm(form);
      });
    
      const cancelButton = document.getElementById('cancelar');
      if(cancelButton) {
        cancelButton.addEventListener('click', function(event) {
          event.preventDefault();
          window.location.href = 'index.html';
        });
      }
    });