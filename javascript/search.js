// Search by name fetch
function searchByName(pageNum=1){
    const movName = document.getElementById("searchNameInput").value;
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOGFhMjJiMGI4ZWM2ZjllZmFiNGVhNDNlYzdjNGFkYyIsInN1YiI6IjY1MTVlYjE3OWI4NjE2MDBjNWNhMGRiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l34HQLQpioCeEkD82DGk9D7wf1gGBKD-4p7E8ypDnMU'
        }
      };
      
      fetch(`https://api.themoviedb.org/3/search/movie?query=${movName}&include_adult=false&language=en-US&page=${pageNum}`, options)
        .then(response => response.json())
        .then(data => {
            const movieNames = document.getElementById("movieNames");
            const moviesArr = data.results;
            moviesArr.forEach((element, index) => {
              movieNames.innerHTML += `
              <div class="col-md-3 mb-4">
              <div class="movieCard" id="mov-${index}">
              <img src="https://image.tmdb.org/t/p/w500/${element.poster_path}" class="card-img-top">
              <div class="card-body">
              <h5 class="card-title">${element.original_title}</h5>
              <p class="card-text">Released on ${element.release_date}</p>
              <p class="card-text">${element.vote_average}</p>
              <button id="like-${index}-${pageNum}">Add to favorite</button>
              </div>
              </div>
              </div>`
            });
        } )
        .catch(err => console.error(err));
}
document.getElementById("searchNameBtn").addEventListener("click", () =>{
    searchByName();
});
let currentPage = 1;
document.getElementById("clickRight").addEventListener("click", () =>{
    if(currentPage < 6){
        document.getElementById("movieNames").innerHTML = '';
        searchByName(++currentPage);
    }
})
document.getElementById("clickLeft").addEventListener("click", () =>{
    if(currentPage > 1){
        document.getElementById("movieNames").innerHTML = '';
        searchByName(--currentPage);
    }
})