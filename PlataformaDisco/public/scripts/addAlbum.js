const validateInputs = (titulo, year, descripcion) => {
  if (titulo.trim() === '' && descripcion.trim() === '') {
      swal("Debes completar el título y la descripción", { icon: "error" });
      return false;
  } else if (titulo.trim() === '') {
      swal("Debes completar el título", { icon: "error" });
      return false;
  } else if (descripcion.trim() === '') {
      swal("Debes completar la descripción", { icon: "error" });
      return false;
  } else if (year.trim() === '' || isNaN(year)) {
      swal("Debes ingresar un año válido", { icon: "error" });
      return false;
  } else if (parseInt(year) < 2008) {
      swal("El año debe ser igual o mayor a 2008", { icon: "error" });
      return false;
  }
  return true;
};

const btnAdd = document.getElementById("btnAdd");
const titulo = document.getElementById("titulo");
const year = document.getElementById("year");
const descripcion = document.getElementById("descripcion");
const portada = document.getElementById("portada");

btnAdd.addEventListener("click", async function(e) {
  e.preventDefault();

  // Validar los campos de entrada
  if (!validateInputs(titulo.value, year.value, descripcion.value)) {
      return;
  }

  try {
      const response = await axios.post("http://localhost:5000/Album/album", {
          titulo: titulo.value,
          descripcion: descripcion.value,
          year: year.value,
          portada: portada.value,
          canciones: []
      });
      const albumId = response.data.id;
      console.log(albumId)
      if (albumId) {
          swal({
              title: "Álbum creado!",
              text: "Has creado un álbum correctamente.",
              icon: "success",
              confirmButtonText: "Ok"
          }).then(() => {
              window.location.href = `./album.html?id=${albumId}`;
          });
      } else {
          console.log("No se recibió el ID del álbum del servidor")
      }
  } catch (error) {
      console.error("Error al enviar el álbum", error);
  }
});

document.getElementById('cancelar').addEventListener('click', function(e) {
  e.preventDefault();
  window.location.href = 'index.html';
});




  
