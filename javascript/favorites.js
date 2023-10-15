// Import navbar and footer
import getNav from "./modules/navbar.js";
getNav();

import getFooter from "./modules/footer.js";
getFooter();

// Display favorites
const favStorage = JSON.parse(localStorage.getItem("favorites"));
console.log(favStorage);
const favCard = document.getElementById("favMovCard");
favStorage.forEach((element) => {
    if(element != null){
        favCard.innerHTML += element;
    }
})
document.querySelectorAll(".fav-btn").forEach((element) => {
    element.classList.add("hidden");
})

