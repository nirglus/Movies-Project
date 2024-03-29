// Import navbar and footer
import getNav from "./modules/navbar.js";
import getFooter from "./modules/footer.js";
getNav();
getFooter();

// Display favorites
const favStorage = JSON.parse(localStorage.getItem("favorites"));
const favCard = document.getElementById("favMovCard");
displayFavs();

function displayFavs(){
    if(favStorage){
        favStorage.forEach((element) => {
            favCard.innerHTML += element;
        })
        document.querySelector("section").classList.remove("hidden");
    } else{
        document.querySelector("section").classList.add("hidden");
    }
    document.querySelectorAll(".fav-btn").forEach((element) => {
        element.innerHTML = `<i class="bi bi-trash"></i> Remove`;
        element.addEventListener("click", handleRemove);
    })
}

function handleRemove(event){
    const favMovieCard = event.target.closest(".col-md-3");
    if (favMovieCard) {
        const indexToRemove = favMovieCard.dataset.index;
        favMovieCard.remove();
        favStorage.splice(indexToRemove, 1);
        localStorage.setItem("favorites", JSON.stringify(favStorage));
        if(favStorage.length == 0){
            document.querySelector("section").classList.add("hidden");
            localStorage.removeItem("favorites");
        }
    }
}

