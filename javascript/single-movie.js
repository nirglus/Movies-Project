// Single movie fetch
function singleMovFetch(id){
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOGFhMjJiMGI4ZWM2ZjllZmFiNGVhNDNlYzdjNGFkYyIsInN1YiI6IjY1MTVlYjE3OWI4NjE2MDBjNWNhMGRiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l34HQLQpioCeEkD82DGk9D7wf1gGBKD-4p7E8ypDnMU'
      }
    };
    
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        const singleMovie = document.getElementById("singleMov");
        singleMovie.innerHTML = `<img src="https://image.tmdb.org/t/p/w500/${data.poster_path}>
        <h1>${data.original_title}</h1>
        <div class="mov-details">
        <p><strong>Release Date:</strong> ${data.release_date}</p>
        <p><strong>Genre:</strong> ${data.genres[0].name}, ${data.genres[1].name}</p>
        <p id="mov-about"><strong>Description:</strong> ${data.overview}</p>
        </div>
  
        `;
      })
      .catch(err => console.error(err));
    }
  singleMovFetch(980489);