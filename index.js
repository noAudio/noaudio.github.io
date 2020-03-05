$(function () {
  $(".toggle").on("click", function () {
    if ($(".item").hasClass("active")) {
      $(".item").removeClass("active");
      $(this).find("a").html("<i class='fas fa-bars'></i>");
    } else {
      $(".item").addClass("active");
      $(this).find("a").html("<i class='fas fa-times'></i>");
    }
  });
});

// vanilla js to handle sticky navbar
window.onscroll = function () {
  immovableNav()
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function immovableNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}