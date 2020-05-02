function bannerTextdisplay() {
  if (window.pageYOffset > 550) {
    document.querySelector(".banner-text").style.display = "none";
  } else {
    document.querySelector(".banner-text").style.display = "block";
  }
}
window.onscroll = bannerTextdisplay;
