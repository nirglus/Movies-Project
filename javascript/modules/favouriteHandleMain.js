function favouriteHandler(){
    const favBtn = document.querySelectorAll(".fav-btn");
    for(let i = 0; i < favBtn.length; i++){
      favBtn[i].addEventListener("click", () => {
        let icon = document.getElementById(`heart-${i}`).classList;
        icon.remove("bi-heart");
        icon.add("bi-heart-fill");
        let movContent = `<div class="col-md-3 mb-4">` + document.getElementById(`mov-${i}`).innerHTML;
        favorites.push(`${movContent}`);
        localStorage.setItem("favorites", JSON.stringify(favorites));
      })
    }
  }

export default favouriteHandler;