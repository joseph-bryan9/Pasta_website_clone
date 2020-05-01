// Fullscreen overlay nav-menu script
function showNavigation() {
  document.getElementById("myNav").style.display = "block";
  document.getElementById("myNav").style.opacity("0.87");
}

function closeNavigation() {
  document.getElementById("myNav").style.display = "none";
  document.getElementById("myNav").style.opacity("0");
}

// Overlay Nav-menu fade-In/Fade-out

// Spinner
document.querySelector(".banner-section").style.visibility = "hidden";
document.querySelector(".banner-section").style.op = "hidden";
document.querySelector(".banner-section").classList.add("spinner");

setTimeout(() => {
  document.querySelector(".banner-section").classList.remove("spinner");
  document.querySelector(".banner-section").style.visibility = "visible";
}, 2000);
