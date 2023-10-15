let favorites = []
// Import navbar and footer
import getNav from "./modules/navbar.js";
getNav();

import getFooter from "./modules/footer.js";
getFooter();
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
              <div class="card-body d-flex flex-column">
              <h5 class="card-title">${element.original_title}</h5>
              <p class="card-text">Released on ${element.release_date}</p>
              <p class="card-text"><i class="bi bi-star-fill"></i> ${element.vote_average}</p>
              <button class="fav-btn btn btn-outline-danger" id="like-${index}-${pageNum}"><i class="bi bi-heart"></i> Add to favorites</button>
              </div>
              </div>
              </div>`
            });
            const favBtn = document.querySelectorAll(".fav-btn");
            for(let i = 0; i < favBtn.length; i++){
              favBtn[i].addEventListener("click", () => {
                let movContent = `<div class="col-md-3 mb-4">` + document.getElementById(`mov-${i}`).innerHTML;
                favorites.push(`${movContent}`);
                localStorage.setItem("favorites", JSON.stringify(favorites));
              })
            }
            document.getElementById("pageNumber").innerHTML = `${pageNum}`
            document.getElementById("card-sec").scrollIntoView({
                behavior: "auto"
              })
        } )
        .catch(err => console.error(err));
}
document.getElementById("searchNameBtn").addEventListener("click", () =>{
    document.getElementById("movieNames").innerHTML = '';
    searchByName();
    document.getElementById("card-sec").classList.remove("hidden");
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