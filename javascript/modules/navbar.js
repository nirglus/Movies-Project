export default function getNav(){
    const navbar = document.querySelector("nav");
    navbar.innerHTML += `
    <a class="navbar-brand" href="#"><i class="bi bi-camera-reels"></i>  MovieNatic</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
                <a class="nav-link" href="../index.html">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="../html/about.html">About</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="../html/single-movie.html">Search by ID</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="../html/search.html">Search by name</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="../html/favorites.html">Favorites</a>
            </li>
        </ul>
    </div>`
}