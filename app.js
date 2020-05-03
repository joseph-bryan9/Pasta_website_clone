function bannerTextdisplay() {
  if (window.pageYOffset > 550) {
    document.querySelector(".banner-text").style.display = "none";
  } else {
    document.querySelector(".banner-text").style.display = "block";
  }
}
window.onscroll = bannerTextdisplay;

// Overlay Nav-menu
function showNavigation() {
  document.getElementById("myNav").style.display = "block";
  document.querySelector(".container").style.display = "none";
}

function closeNavigation() {
  document.getElementById("myNav").style.display = "none";
  document.querySelector(".container").style.display = "block";
}

// Spinner
document.querySelector(".nav-menu").style.background = "transparent";
document.querySelector(".banner-section").style.visibility = "hidden";
document.querySelector(".spinner").classList.add("spinner");

setTimeout(() => {
  document.querySelector(".nav-menu").style.backgroundImage =
    "url('assets/sky.jpg')";
  document.querySelector(".spinner").classList.remove("spinner");
  document.querySelector(".banner-section").style.visibility = "visible";
}, 3000);
