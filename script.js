let menuIcon = document.querySelector(".menu-mobile__icon");
let menuList = document.querySelector(".menu-mobile-ul");

menuIcon.addEventListener("click", function () {
  if (menuList.style.display === "block") {
    menuList.style.display = "none";
  } else {
    menuList.style.display = "block";
  }
});
