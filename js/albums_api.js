const urlRest =
  "https://my-json-server.typicode.com/Reaien/curso_web_duoc/Albums";

document.addEventListener("DOMContentLoaded", function () {
  cargarDatos();
});

function cargarDatos() {
  fetch(urlRest)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const albums = data;
      for (let i = 0; i < albums.length; i++) {
        const album = albums[i];
        if (album.id !== 1) {
          const albumCards = `
                    <div class="col-sm-4 mt-5">
                        <div class="card bg-white bg-opacity-50">
                            <img class="rounded my-3 mx-3" src="${album.Caratula}" alt="producto1">
                            <p class="fw-semibold ms-3 text-white text-opacity-75">${album.Artista}</p>
                            <div class="card-body d-flex justify-content-between">
                                <h5>${album.Album}</h5>
                                <p>$${album.Valor}</p>
                            </div>
                            <button type="button" class="btn btn-light mx-5 fw-bold mb-5">Comprar</button>
                        </div>
                    </div>`;
          document
            .getElementById("albums-container")
            .insertAdjacentHTML("beforeend", albumCards);
        }
      }
    })
    .catch((error) => {
      console.error("Error al cargar los álbumes:", error);
    });
}
