
const favoriteRecords = ["Origins", "Evolve", "Nigth Vision", "Smoke Mirrors"];


function addFavorites(favorites) {
  const imgs = document.querySelectorAll("img");

  imgs.forEach((img) => {
    if (favorites.includes(img.getAttribute("name"))) {
      const icon = document.createElement("i");
      icon.classList.add("fa-regular");
      icon.classList.add("fa-star");

      icon.style.position = "absolute";
      icon.style.top = "10px";
      icon.style.left = "10px";
      icon.style.color = "gold";
      
      img.parentNode.style.position = "relative";

      img.parentNode.appendChild(icon);
      img.parentElement.classList.add("favorite");

      img.parentNode.appendChild(icon);
      img.parentElement.classList.add("favorite");
    }
  });
}

addFavorites(favoriteRecords);

let icons = document.querySelectorAll("i");

icons.forEach((i) => {
  i.addEventListener("click", function (e) {
    e.preventDefault();
    i.classList.toggle("fa-solid");
  });
});


const renderAlbums = (album) => {
  console.log(album);
  const div = document.getElementsByClassName('mt-8 ml-40 grid gap-x-24 gap-y-10 grid-cols-2 text-black-700 justify-items-end')[0]
  const newDiv = document.createElement('div')
  newDiv.classList.add('mb-20')
  const img = document.createElement('img')
  img.classList.add('rounded','cursor-pointer')
  img.style.width = "225px",
  img.style.height = "225px",
  img.src= album.portada ? album.portada: 'https://imgur.com/0uSALUr.png'
  



  const redirect = (id) => { window.location.href = `./album.html?id=${id}`}
  img.addEventListener("click", function(){
    redirect(album._id);
  })


  div.appendChild(newDiv)
  newDiv.appendChild(img)
  const p = document.createElement('p')
  p.classList.add('text-black','text-center', 'text-2xl', 'font-bold')
  p.textContent = album.titulo +" "+ album.year
  newDiv.appendChild(p)

}


async function getAlbums() {
  try {
    console.log("Peticion al servidor ****")
      const response = await axios.get('/Album/albumes');
      for (let key in response.data) {
          renderAlbums(response.data[key]);
      }
      
      swal("¡Éxito!", "Los álbumes se cargaron correctamente.", "success");
  } catch (error) {
      console.error('Error al cargar los álbumes', error);
      
      swal("Error", "No se pudieron cargar los álbumes.", "error");
  }
};


window.onload = getAlbums;



document.getElementById('addAlbumLink').addEventListener('click', function() {
  window.location.href = 'addalbum.html';
});

document.getElementById('toursLink').addEventListener('click', function() {
  window.location.href = 'tours.html';
});

document.getElementById('signUpLink').addEventListener('click', function() {
  window.location.href = 'singUp.html';
});

document.getElementById('logInLink').addEventListener('click', function() {
  window.location.href = 'logIn.html';
});