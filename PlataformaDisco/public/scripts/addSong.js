




if (window.location.pathname === '/addSong.html') {
    
    document.getElementById("indexLink").addEventListener("click", function(){
        window.location.href = "index.html";
    });

    document.getElementById("masAlbumesLink").addEventListener("click", function(){
        window.location.href = "index.html";
    });

    const getAlbumIdFromUrl = function(){
        const params = new URLSearchParams(window.location.search);
        return params.get("albumId");
    };

    const getAlbum = async (albumId) => {
        try {
            const { data } = await axios.get(`http://localhost:5000/Album/albumes/${albumId}`);
            return data;
        } catch (error) {
            console.error(error);
            swal("Error", "No se pudo obtener la información del álbum", "error");
        }
    };
 
    let albumData;

    const albumId = getAlbumIdFromUrl();

    const addSong = async () => {
        // e.preventDefault();
        const titulo = document.getElementById("titulo").value;
        const duracion = document.getElementById("duracion").value;
        const youtubeLink = document.getElementById("url").value;
        const url = "assets/discos/evolve/Imagine Dragons  I Dont Know Why.mp3";
        
        // Validar los inputs antes de continuar
        if (!validateInputs(titulo, duracion, youtubeLink, url)) {
            return;
        }
 
        const newSong = { titulo, duracion, youtubeLink, url };

        try {
            // Añadir la nueva canción al array de canciones del álbum
            albumData.canciones.push(newSong);
            console.log(newSong)
            console.log(albumData)
            // Hacer la petición PUT para actualizar el álbum
            await axios.put(`http://localhost:5000/Album/albumes/${albumId}`, albumData);

            // Mostrar alerta de éxito y redirigir a la vista del álbum
            swal("Éxito", "La canción ha sido añadida correctamente", "success")
                .then(() => {
                    window.location.href = `./album.html?id=${albumId}`;
                });
        } catch (error) {
            console.error(error);
            swal("Error", "No se pudo añadir la canción", "error");
        }
    };

    document.getElementById("botonCancion").addEventListener("click", function(e){
        e.preventDefault();
        addSong();
    });

    document.getElementById("cancelar").addEventListener("click", function(e){
        e.preventDefault();
        window.location.href = `./album.html?id=${albumId}`;
    });

    // Obtener los datos del álbum al cargar la página
    (async () => {
        albumData = await getAlbum(albumId);
    })();
}


const validateInputs = (titulo, duracion, youtubeLink, value) => {
    if (titulo.trim() === '' && youtubeLink.trim() === '') {
        swal("Debes completar el título y la URL de YouTube", { icon: "error" });
        return false;
    } else if (titulo.trim() === '') {
        swal("Debes completar el título", { icon: "error" });
        return false;
    } else if (youtubeLink.trim() === '') {
        swal("Debes completar la URL de YouTube", { icon: "error" });
        return false;
    } else if (duracion.trim() === '' || isNaN(duracion)) {
        swal("Debes ingresar una duración válida", { icon: "error" });
        return false;
    } else if (value.trim() === '') {
        swal("Debes completar el campo de URL", { icon: "error" });
        return false;
    }
    return true;
};




















