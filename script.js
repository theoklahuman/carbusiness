const button = document.querySelector(".hamburger-button");
const mainNavClass = document.querySelector(".main-nav");
const closeHamburger = document.querySelector(".close-hamburger");

button.addEventListener("click", function(event) {
    if (mainNavClass.style.display = "none") {
    mainNavClass.style.display = "flex";
    button.style.display = "none";
    closeHamburger.style.display = "block";
    }
})

closeHamburger.addEventListener("click", function(event) {
    if (mainNavClass.style.display = "flex") {
        mainNavClass.style.display = "none";
        button.style.display = "block";
        closeHamburger.style.display = "none";
        }
})




