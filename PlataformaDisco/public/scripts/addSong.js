// // Verificar si la URL de la página actual corresponde a la página deseada
// if (window.location.pathname === '/addSong.html') {
//     // Código a ejecutar solamente en la página deseada
//     document.getElementById("indexLink").addEventListener("click", function(){
//         window.location.href = "index.html";
//     });

// const e = require("cors");

//     document.getElementById("masAlbumesLink").addEventListener("click", function(){
//         window.location.href = "index.html";
//     });

//     const getAlbumIdFromUrl = function(){
//         const params = new URLSearchParams(window.location.search);
//         return params.get("albumId");
//     };

//     const getAlbum = async (albumId) => {
//         try {
//             const { data } = await axios.get(`http://localhost:5000/Album/albumes/${albumId}`);
//             return data;
//         } catch (error) {
//             console.error(error);
//             swal("Error", "No se pudo obtener la información del álbum", "error");
//         }
//     };

//     albumId = getAlbumIdFromUrl();

//     let boton = document.getElementById("botonCancion")
//     boton.addEventListener("click", function(){
//         addSong()
//     });

//     document.getElementById("cancelar").addEventListener("click", function(){
//      window.location.href = `./album.html?id=${albumId}`;;
//     });

//     const addSong = async () => {
//         const albumId = getAlbumIdFromUrl();
//         const titulo = document.getElementById("titulo").value;
//         const duracion = document.getElementById("duracion").value;
//         const youtubeLink = document.getElementById("url").value;

//         const newSong = { titulo, duracion, youtubeLink, };

//         try {
//             console.log(albumId)
//             const album = await getAlbum(albumId);

//             // Agregar la canción nueva al array de canciones
//             album.canciones.push(newSong);

//             // Hacer la petición PUT para actualizar el álbum
//             await axios.put(`http://localhost:5000/Album/albumes/${albumId}`, album);

//             // Mostrar alerta de éxito y redirigir a la vista del álbum
//             swal("Éxito", "La canción ha sido añadida correctamente", "success")
//                 .then(() => {
//                     window.location.href = `./album.html?id=${albumId}`;
//                 });
//         } catch (error) {
//             console.error(error);
//             swal("Error", "No se pudo añadir la canción", "error");
//         }
//     };
// }



// Verificar si la URL de la página actual corresponde a la página deseada
if (window.location.pathname === '/addSong.html') {
    // Código a ejecutar solamente en la página deseada
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
        const url = "assets/discos/evolve/Imagine Dragons  I Dont Know Why.mp3"
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




















