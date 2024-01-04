export default function getFooter(){
    const footer = document.querySelector("footer");
    footer.innerHTML += `
    <!-- Grid container -->
    <div class="container p-4 pb-0">
   <!-- Section: Links -->
    <section class="footer-links">
      <!--Grid row-->
      <div class="row">
          <!-- Grid column -->
            <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
               <h6 class="mb-4 logo"><i class="bi bi-camera-reels"></i>  MovieNatic</h6>
               <p>Your ultimate source for movie info! Explore, Discover,
                  and stay updated with the latest movies, reviews, and more.
                  Lights, Camera, MovieNatic!</p>
             </div>
              <!-- Grid column -->
              <hr class="w-100 clearfix d-md-none" />
              <!-- Grid column -->
              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                 <h6 class="text-uppercase mb-4 font-weight-bold">Projects</h6>
                 <p><a class="text-white p-link" href="https://nirglus.github.io/Marvel-Wikipedia/">Marvel Wiki</a></p>
                 <p><a class="text-white p-link" href="https://nirglus.github.io/Hotel-Site-Design/">A Hotel</a></p>
                 <p><a class="text-white p-link" href="https://nirglus.github.io/myProject/">Nir's Portfolio</a></p>
                 <p><a class="text-white p-link" href="https://nirglus.github.io/age-calculator-app-main/">Age Calculator</a></p>
              </div>
              <!-- Grid column -->
              <hr class="w-100 clearfix d-md-none" />
              <!-- Grid column -->
              <hr class="w-100 clearfix d-md-none" />
              <!-- Grid column -->
              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
                  <p><i class="bi bi-house-fill mr-3"></i> Lod, 7145603, Israel</p>
                  <p><i class="bi bi-envelope-fill mr-3"></i> info@gmail.com</p>
                  <p><i class="bi bi-telephone-fill mr-3"></i> + 972 54 9214212</p>
                  <p><i class="bi bi-printer mr-3"></i> + 01 234 567 89</p>
                </div>
                <!-- Grid column -->

                <!-- Grid column -->
                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                    <h6 class="text-uppercase mb-4 font-weight-bold">Follow us</h6>
                    <!-- Facebook -->
                     <a
                       class="btn btn-primary m-1"
                       style="background-color: #3b5998"
                       href="#!"
                       role="button"
                       ><i class="bi bi-facebook"></i></a>

                     <!-- Twitter -->
                     <a
                       class="btn btn-primary m-1"
                       style="background-color: #55acee"
                       href="#!"
                       role="button"
                       ><i class="bi bi-twitter"></i></a>

                     <!-- Google -->
                     <a
                       class="btn btn-primary m-1"
                       style="background-color: #dd4b39"
                       href="#!"
                       role="button"
                       ><i class="bi bi-envelope-fill"></i></a>

                     <!-- Instagram -->
                     <a
                       class="btn btn-primary m-1"
                       style="background-color: #ac2bac"
                       href="#!"
                       role="button"
                       ><i class="bi bi-instagram"></i></a>

                     <!-- Linkedin -->
                     <a
                       class="btn btn-primary m-1"
                       style="background-color: #0082ca"
                       href="#!"
                       role="button"
                       ><i class="bi bi-linkedin"></i></a>
                     <!-- Github -->
                     <a
                       class="btn btn-primary m-1"
                       style="background-color: #333333"
                       href="#!"
                       role="button"
                       ><i class="bi bi-github"></i></a>
                   </div>
             </div>
           <!--Grid row-->
       </section>
</div>
<div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2); word-spacing: 1ch;">
<i class="bi bi-camera-reels"></i> MovieNatic © ${new Date().getFullYear()}</div>`
}