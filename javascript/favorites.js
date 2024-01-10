// Import navbar and footer
import getNav from "./modules/navbar.js";
import getFooter from "./modules/footer.js";
getNav();
getFooter();

// Display favorites
const favStorage = JSON.parse(localStorage.getItem("favorites"));
const favCard = document.getElementById("favMovCard");
if(favStorage){
    favStorage.forEach((element) => {
        favCard.innerHTML += element;
    })
    document.querySelector("section").classList.remove("hidden");
} else{
    document.querySelector("section").classList.add("hidden");
}
document.querySelectorAll(".fav-btn").forEach((element) => {
    element.classList.add("hidden");
})

