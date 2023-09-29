function popularWeekFetch(week){

}  

function popularDayFetch(day){
  
}
function fetchPopular(page=1){
  fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}&api_key=38aa22b0b8ec6f9efab4ea43ec7c4adc`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      const topMovies = document.getElementById("popMovCard");
      const moviesArr = data.results;
      moviesArr.forEach((element, index) => {
        topMovies.innerHTML += `<div id="mov-${index}">
        <img src="https://api.themoviedb.org/3/movie/${element.id}/images">
        <h1>${element.original_title}</h1>
        <p>Released on ${element.release_date}</p>
        <p>${element.vote_average}</p>`
      });
    })
    .catch(err => console.error(err));

  
}
fetchPopular(); 