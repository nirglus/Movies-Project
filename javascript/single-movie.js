// Import navbar and footer
import getNav from "./modules/navbar.js";
import getFooter from "./modules/footer.js";
getNav();
getFooter();

// Single movie fetch
function singleMovFetch(){
    const movID = document.getElementById("searchIdInput").value;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOGFhMjJiMGI4ZWM2ZjllZmFiNGVhNDNlYzdjNGFkYyIsInN1YiI6IjY1MTVlYjE3OWI4NjE2MDBjNWNhMGRiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l34HQLQpioCeEkD82DGk9D7wf1gGBKD-4p7E8ypDnMU'
      }
    };
    
    fetch(`https://api.themoviedb.org/3/movie/${movID}?language=en-US`, options)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const singleMovie = document.getElementById("singleMov");
        singleMovie.innerHTML = `
        <div class="card">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img class="card-img" src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt="Movie Poster">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h2 class="card-title">${data.original_title}</h2>
              <p class="card-text"><strong>Genre: </strong>${data.genres[0].name}, ${data.genres[1].name}</p>
              <p id="mov-about"><strong>Rating: </strong>${data.vote_average.toFixed(1)}</p>
              <p id="mov-about"><strong>Description: </strong>${data.overview}</p>
              <p class="card-text"><strong>Actors: </strong><span id="actorsSpan"></span></p>
              <p class="card-text"><small class="text-muted"><b>Released on: </b>${data.release_date.split('-').reverse().join('/')}</small></p>
              <div class="text-right">
                <button class="fav-btn btn btn-outline-danger" id="like-${movID}"><i class="bi bi-heart"></i> Add to favorites</button>
              </div>
            </div>
          </div>
        </div>
      </div>
        `;
      })
      .catch(err => console.error(err));

      fetch(`https://api.themoviedb.org/3/movie/${movID}/credits?language=en-US`, options)
      .then(res => res.json())
      .then(data => {
        const ACTORS_ARR = data.cast;
        const actorSpan = document.getElementById("actorsSpan"); 
        let actorNames = ""
        ACTORS_ARR.forEach((element, index) =>{
            actorNames += element.name
            if (index < ACTORS_ARR.length - 1) {
                actorNames += ", ";
            }
          })
          actorSpan.innerHTML += actorNames;
          goToDisplay();
        })
        .catch(error => console.error(error));
    }

// Move down
function goToDisplay(){
   document.getElementById("singleMov").scrollIntoView(true);
}
document.getElementById("searchIdBtn").addEventListener("click",() =>{
  singleMovFetch();
});
