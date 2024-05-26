// function validateForm(form) {
//   const inputs = form.getElementsByTagName("input");

//   for (let i = 0; i < inputs.length; i++) {
//     // Si el id del input es "portada", omite la validación y continúa con el siguiente input
//     if (inputs[i].id === "portada") continue;

//     if (inputs[i].value.trim() === "") {
//       swal(
//         "Error",
//         "Por favor, completa todos los campos antes de enviar el formulario.",
//         "error"
//       );
//       return false;
//     }
//   }

//   return true;
// }


btnAdd = document.getElementById("btnAdd");
const titulo = document.getElementById("titulo");
  const year = document.getElementById("year");
  const descripcion = document.getElementById("descripcion");
  const portada = document.getElementById("portada");

btnAdd.addEventListener("click",async function(e){
  e.preventDefault();
 

  try{
    const response = await axios.post("http://localhost:5000/Album/album",{
      titulo: titulo.value,
      descripcion: descripcion.value,
      year: year.value,
      portada: portada.value,
      canciones: []
    });
    const albumId = response.data.id;
    console.log(albumId)
    if(albumId){
      swal({
        title: "album creado!",
        text: "creaste un album correctamente",
        icon: "success",
        confirmButtonText: "ok"
      }).then(()=>{
        window.location.href = `./album.html?id=${albumId}`;
      });
    }else{
      console.log("No se recibio el ID del album del servidor")
    }
  }catch (error){
    console.error("error al enviar el album", error);
  }
  }); 
  
  document.getElementById('cancelar').addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = 'index.html';
  });





  
