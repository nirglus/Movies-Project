const favStorage = JSON.parse(localStorage.getItem("favorites"));
console.log(favStorage);
const favCard = document.getElementById("favMovCard");
favStorage.forEach((element) => {
    if(element != null){
        favCard.innerHTML += element;
    }
})
