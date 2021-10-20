const container = document.querySelector(".ui-banners-split-landing")
const left = document.querySelector(".split-landing-left")
const right = document.querySelector(".split-landing-right")

left.addEventListener("mouseenter", ()=>{container.classList.add("left")})
left.addEventListener("mouseleave", ()=>{container.classList.remove("left")})

right.addEventListener("mouseenter", ()=>{container.classList.add("right")})
right.addEventListener("mouseleave", ()=>{container.classList.remove("right")})