function popularWeekFetch(week){

}  

function popularDayFetch(day){
  
}
function fetchPopular(page=1){
  fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}&api_key=38aa22b0b8ec6f9efab4ea43ec7c4adc`)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  
}