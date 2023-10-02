// Popular movies fetch
function fetchPopular(page=1){
  fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}&api_key=38aa22b0b8ec6f9efab4ea43ec7c4adc`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      const topMovies = document.getElementById("popMovCard");
      const moviesArr = data.results;
      moviesArr.forEach((element, index) => {
        topMovies.innerHTML += `<div id="mov-${index}">
        <img src="https://image.tmdb.org/t/p/w500/${element.poster_path}">
        <h1>${element.original_title}</h1>
        <p>Released on ${element.release_date}</p>
        <p>${element.vote_average}</p>`
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

function singleMovFetch(){
  fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=38aa22b0b8ec6f9efab4ea43ec7c4adc`)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    const singleMovies = document.getElementById("singleMov");
    singleMovies.innerHTML = data.results;

  })
  .catch(err => console.error(err));
}