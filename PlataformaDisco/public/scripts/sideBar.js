 const linkRoutes = {
    addAlbumLink: 'addalbum.html',
    toursLink: 'tours.html',
    signUpLink: 'singUp.html',
    logInLink: 'logIn.html',
    indexLink: 'index.html',
    addSongLink: 'addSong.html',
    editAlbumLink: 'editAlbum.html',
    albumesLink: 'index.html'
  };

   function addLinkEvents(linkRoutes) {
    Object.keys(linkRoutes).forEach(linkId => {
      const linkElement = document.getElementById(linkId);
      if (linkElement) {
        linkElement.addEventListener('click', function() {
          window.location.href = linkRoutes[linkId];
        });
      }
    });
  }

 