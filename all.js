// $(document).ready(function() {
//     $(".navbar-toggler-icon").click(function() {
//         $(this).toggleClass("active");
//         var icon = $(this).find(".navbar-toggler-icon");
//         var currentIcon = icon.text();
//         icon.text(currentIcon === "menu" ? "close" : "menu");
//     });
// });

var navbarToggler = document.querySelector(".navbar-toggler");
var navbarTogglerIcon = navbarToggler.querySelector(".navbar-toggler-icon");

navbarToggler.addEventListener("click", function() {
  navbarTogglerIcon.classList.toggle("active");
  var currentIcon = navbarTogglerIcon.innerHTML;
  navbarTogglerIcon.innerHTML = (currentIcon === "menu") ? "close" : "menu";
});