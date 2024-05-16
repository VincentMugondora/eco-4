const menu = document.querySelector(".hamburger-menu")
const sliding = document.querySelector(".sliding")
const linkTags = document.querySelectorAll(".link-tag")

menu.addEventListener("click", function(){
    sliding.classList.toggle("sliders")
})

linkTags.forEach((tag)=>{
    // console.log("here",tag)


    
    tag.addEventListener('click', ()=>{
        sliding.classList.toggle("sliders")
    })
})