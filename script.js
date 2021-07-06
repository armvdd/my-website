let menuIcon = document.querySelector(".menu-mobile__icon");
let menuList = document.querySelector(".menu-mobile-ul");


menuIcon.addEventListener("click", function(){
    if(menuList.style.display === "none"){
        menuList.style.display="block";
    }
    else{
        menuList.style.display="none";
    }
});