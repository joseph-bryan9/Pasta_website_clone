function bannerTextdisplay() {
  if (window.pageYOffset > 550) {
    document.querySelector(".banner-text").style.display = "none";
  } else {
    document.querySelector(".banner-text").style.display = "block";
  }
}
window.onscroll = bannerTextdisplay;

// Overlay Nav-menu
// Fullscreen overlay nav-menu script
function showNavigation() {
  document.getElementById("myNav").style.display = "block";
  document.querySelector(".container").style.display = "none";
}

function closeNavigation() {
  document.getElementById("myNav").style.display = "none";
  document.querySelector(".container").style.display = "block";
}
