const menu = document.querySelector(".hamburger-menu")
const sliding = document.querySelector(".sliding")

menu.addEventListener("click", function(){
    sliding.classList.toggle("sliders")
})