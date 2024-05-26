// function validateForm(form) {
//     const inputs = form.getElementsByTagName("input");
  
//     for (let i = 0; i < inputs.length; i++) {
//       if (inputs[i].value.trim() === "") {
//         swal(
//           "Error",
//           "Por favor, completa todos los campos antes de enviar el formulario.",
//           "error"
//         );
//         return false;
//       }
//     }
  
//     return true;
//   }
  
//   document.addEventListener("DOMContentLoaded", (event) => {
//       const forms = document.querySelectorAll(".form");
    
//       forms.forEach((form) => {
//         form.onsubmit = () => validateForm(form);
//       });
    
//       const cancelButton = document.getElementById('cancelar');
//       if(cancelButton) {
//         cancelButton.addEventListener('click', function(event) {
//           event.preventDefault();
//           window.location.href = 'index.html';
//         });
//       }
//     });


btnEdit = document.getElementById("edit");

    const changeAlbum = async(e)=>{
      e.preventDefault()
      try{
         await axios.put(`/Album/albumes.html?=${id}`, objectToSend)
         swal({
          title: 'Album edited!',
          text: 'You modified the album!',
          icon: 'success',
          confirmButtonText: 'Ok'
        }) 
      window.location.href=`./album.html?=${id}`
      }
      catch(error){
      
      }
  }

  // btnEdit.addEventListener("click", function(){
  //   changeAlbum(e)
  // })