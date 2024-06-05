let currentAlbumId;

function renderAlbum(album) {
  const div = document.getElementById("view-album");
  div.innerHTML = ''; // Limpia el contenido existente

  const h1 = document.createElement('h1');
  h1.classList.add('text-white', 'text-5xl', 'mt-20', 'mb-4', 'ml-4', 'font-bold');
  h1.textContent = album.titulo;
  div.appendChild(h1);

  const img = document.createElement('img');
  img.src = album.portada ? album.portada : 'https://imgur.com/0uSALUr.png';
  img.alt = `Portada de ${album.titulo}`;
  img.style.width = '400px'; 
  img.style.height = '400px';
  div.appendChild(img);

  const p = document.createElement('p');
  p.classList.add('text-black', 'mb-4', 'ml-4', 'w-1/2');
  p.textContent = "Descripción: " + album.descripcion;
  div.appendChild(p);

  renderSongs(album);
}

function renderSongs(album) {
  const songList = document.querySelector('.songList ol');
  songList.innerHTML = ''; // Limpia la lista de canciones

  album.canciones.forEach((cancion, index) => {
    const li = document.createElement('li');
    li.id = cancion._id;
    const songTitle = document.createElement('span');
    songTitle.textContent = `${index + 1}. ${cancion.titulo} - `;
    li.appendChild(songTitle);
    li.style.display = 'flex';
    li.style.justifyContent = 'space-between';
    li.style.alignItems = 'center';
    li.style.marginBottom = '10px';

    const audio = document.createElement('audio');
    audio.src = cancion.url; 
    audio.controls = true;
    li.appendChild(audio);

    const songDuration = document.createElement('span');
    songDuration.textContent = `${cancion.duracion} segundos`;
    li.appendChild(songDuration);

    const youtubeIcon = document.createElement('i');
    youtubeIcon.classList.add('fa', 'fa-youtube-play', 'text-red-500');
    youtubeIcon.addEventListener('click', () => window.open(cancion.youtubeLink, '_blank'));
    const youtubeLink = document.createElement('a');
    youtubeLink.href = cancion.youtubeLink;
    youtubeLink.target = '_blank';
    youtubeLink.appendChild(youtubeIcon);
    li.appendChild(youtubeLink);

    const deleteIcon = document.createElement('span');
    deleteIcon.innerHTML = '<i class="fa fa-trash text-red-500"></i>';
    deleteIcon.dataset.songId = cancion._id;
    deleteIcon.addEventListener("click", function() {
      const updatedAlbum = { ...album };
      const songIndex = updatedAlbum.canciones.findIndex(song => song._id === cancion._id);
      updatedAlbum.canciones.splice(songIndex, 1);
      deleteSong(updatedAlbum);
    });
    li.appendChild(deleteIcon);

    songList.appendChild(li);
  });
}

const deleteSong = async (updatedAlbum) => {
  try {
    const id = updatedAlbum._id;
    const response = await axios.put(`/Album/albumes/${id}`, updatedAlbum);
    swal("Éxito", "La canción ha sido eliminada correctamente", "success")
      .then(() => {
        window.location.reload();
      });
  } catch (error) {
    console.error(error);
    swal("Error", "No se pudo eliminar la canción", "error");
  }
};

const getAlbum = async () => {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const albumId = urlParams.get('id');
    console.log(albumId);
    currentAlbumId = albumId;
    const response = await axios.get(`/Album/albumes/${albumId}`);
    const albumToUse = response.data;
    renderAlbum(albumToUse);
    document.getElementById('addSongLink').addEventListener('click', function() {
      window.location.href = `addSong.html?albumId=${albumId}`;
    });
  } catch (error) {
    swal({
      title: 'Error!',
      text: `${error.response.data}`,
      icon: 'error',
      confirmButtonText: 'Ok'
    });
    redirect('../public/index.html');
  }
};

window.onload = getAlbum;

document.getElementById('indexLink').addEventListener('click', function() {
  window.location.href = 'index.html';
});

document.getElementById('addAlbumLink').addEventListener('click', function() {
  window.location.href = 'addAlbum.html';
});

document.getElementById("editAlbumLink").addEventListener("click", function() {
  if (currentAlbumId) {
    window.location.href = `editAlbum.html?id=${currentAlbumId}`;
  } else {
    window.location.href = 'editAlbum.html';
  }
});

document.getElementById('AlbumesLink').addEventListener('click', function() {
  window.location.href = 'index.html';
});