// Popular movies fetch
function fetchPopular(page=1){
  fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}&api_key=38aa22b0b8ec6f9efab4ea43ec7c4adc`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      const topMovies = document.getElementById("popMovCard");
      const moviesArr = data.results;
      moviesArr.forEach((element, index) => {
        topMovies.innerHTML += `
        <div class="col-md-3 mb-4">
        <div class="movieCard" id="mov-${index}">
        <img src="https://image.tmdb.org/t/p/w500/${element.poster_path}" class="card-img-top">
        <div class="card-body d-flex flex-column">
        <h5 class="card-title">${element.original_title}</h5>
        <p class="card-text">Released on ${element.release_date}</p>
        <p class="card-text"><i class="bi bi-star-fill"></i> ${element.vote_average}</p>
        <button class="fav-btn btn btn-outline-danger" id="like-${index}-${page}"><i class="bi bi-heart"></i> Add to favorites</button>
        </div>
        </div>
        </div>`
      });
    })
    .catch(err => console.error(err));
}
// Next and Previous buttons
let currentPage = 1;
document.getElementById("clickRight").addEventListener("click", () =>{
  if(currentPage < 6){
    document.getElementById("popMovCard").innerHTML = '';
    fetchPopular(++currentPage);
  }
})
document.getElementById("clickLeft").addEventListener("click", () =>{
  if(currentPage > 1){
    document.getElementById("popMovCard").innerHTML = '';
    fetchPopular(--currentPage);
  }
})
// Day or Week select
const selectElement = document.getElementById("weekOrDay");
selectElement.addEventListener("change", function() {
    const selectedValue = selectElement.value;
    if (selectedValue == "week"){
      document.getElementById("popMovCard").innerHTML = '';
      fetchPopular(8);
    } else if(selectedValue == "day"){
      document.getElementById("popMovCard").innerHTML = '';
      fetchPopular(9)
    }
});

