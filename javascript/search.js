// Search by name fetch
function searchByName(){
    const movName = document.getElementById("searchNameInput").value;
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOGFhMjJiMGI4ZWM2ZjllZmFiNGVhNDNlYzdjNGFkYyIsInN1YiI6IjY1MTVlYjE3OWI4NjE2MDBjNWNhMGRiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l34HQLQpioCeEkD82DGk9D7wf1gGBKD-4p7E8ypDnMU'
        }
      };
      
      fetch(`https://api.themoviedb.org/3/search/movie?query=${movName}&include_adult=false&language=en-US&page=1`, options)
        .then(response => response.json())
        .then(data => {
            const movieNames = document.getElementById("movieNames");
            const moviesArr = data.results;
            moviesArr.forEach((element, index) => {
              movieNames.innerHTML += `<div id="mov-${index}">
              <img src="https://image.tmdb.org/t/p/w500/${element.poster_path}">
              <h1>${element.original_title}</h1>
              <p>Released on ${element.release_date}</p>
              <p>${element.vote_average}</p>`
            });
        } )
        .catch(err => console.error(err));
}
document.getElementById("searchNameBtn").addEventListener("click", searchByName);