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


if (window.location.pathname.includes('editAlbum.html')) {
  document.addEventListener('DOMContentLoaded', function () {
      const albumId = getAlbumIdFromUrl();

      document.getElementById("indexLink").addEventListener("click", function () {
          window.location.href = 'index.html';
      });

      document.getElementById("masAlbumesLink").addEventListener("click", function () {
          window.location.href = 'index.html';
      });

      document.getElementById("addAlbumLink").addEventListener("click", function () {
          window.location.href = 'addAlbum.html';
      });

      document.getElementById("addSongLink").addEventListener("click", function () {
          if (albumId) {
              window.location.href = `addSongs.html?id=${albumId}`;
          } else {
              window.location.href = "addSongs.html";
          }
      });
  });

  document.addEventListener('DOMContentLoaded', function () {
      const albumId = getAlbumIdFromUrl();
      if (albumId) {
          loadAlbumDetails(albumId);
      }

      document.getElementById("edit").addEventListener("click", editAlbum);

      document.getElementById("cancelar").addEventListener("click", function () {
        window.location.href = `./album.html?id=${albumId}`;
      });
  });

  const getAlbumIdFromUrl = () => {
      const params = new URLSearchParams(window.location.search);
      return params.get('id');
  };

  const getInputValues = () => {
      return {
        titulo: document.getElementById('titulo').value,
        year: document.getElementById('year').value,
        descripcion: document.getElementById('descripcion').value,
        portada: document.getElementById('portada').value,
      };
  };



  const loadAlbumDetails = async (albumId) => {
      try {
          const response = await axios.get(`http://localhost:5000/Album/albumes/${albumId}`);
          const album = response.data;
          document.getElementById('titulo').value = album.titulo;
          document.getElementById('descripcion').value = album.descripcion;
          document.getElementById('portada').value = album.portada;
          document.getElementById('year').value = album.year
      } catch (error) {
          console.error('Error loading album details:', error);
          swal("Error", "No se pudo cargar la información del álbum", "error");
      }
  };

  const editAlbum = async (e) => {
      e.preventDefault();
      const albumId = getAlbumIdFromUrl();
      const albumData = getInputValues();

      if (!validateInputs(albumData.titulo,albumData.year, albumData.descripcion)) {
          return;
      }

      try {
        await axios.put(`http://localhost:5000/Album/albumes/${albumId}`, albumData);
        swal({
            title: '¡Álbum editado!',
            text: 'Has modificado el álbum correctamente.',
            icon: 'success',
            confirmButtonText: 'Ok'
        }).then(() => {
            window.location.href = `./album.html?id=${albumId}`;
        });
    } catch (error) {
        console.error('Error editing album:', error);
        swal("Error", "No se pudo editar el álbum", "error");
    }
};
}



  

  