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
        console.log(data)
        const singleMovie = document.getElementById("singleMov");
        singleMovie.innerHTML = `<img src="https://image.tmdb.org/t/p/w500/${data.poster_path}">
        <h1>${data.original_title}</h1>
        <div class="mov-details">
        <p><strong>Release Date:</strong> ${data.release_date}</p>
        <p><strong>Genre:</strong> ${data.genres[0].name}, ${data.genres[1].name}</p>
        <p id="mov-about"><strong>Description:</strong> ${data.overview}</p>
        <p><strong>Actors:</strong> <span id="actorsSpan"></span></p>
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
      })
      .catch(error => console.error(error));
    }

document.getElementById("searchIdBtn").addEventListener("click",singleMovFetch)
