document.querySelector(".banner-btn").addEventListener("click", () => {
  document.querySelector(".banner").style.display = "none";

  document.querySelector(".form-container").style.cssText =
    "opacity: 1; visibility:visible";

  //   document.querySelector(".container").style.background = "#cc683c";
  document.querySelector(".container").style.background =
    "url(images/bg1.jpg) center no-repeat";
});

document.querySelector(".x-btn").addEventListener("click", () => {
  document.querySelector(".banner").style.display = "flex";
  document.querySelector(".form-container").style.cssText =
    "opacity: 1; visibility:hidden";
  document.querySelector(".container").style.cssText =
    " background: url(images/bg1.jpg) center no-repeat; background-size:cover";
});
