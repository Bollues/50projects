const container = document.getElementsByClassName("container")
// const navigation = document.getElementsByClassName("animation-rotatingNavigation-nav")
const open = document.getElementsByClassName("content-controler-open")
const close = document.getElementsByClassName("content-controler-close")

open[0].addEventListener("click",()=>{
  container[0].classList.add("shownav")
  // navigation[0].classList.add("shownav")
})

close[0].addEventListener("click",()=>{
  container[0].classList.remove("shownav")
  // navigation[0].classList.remove("shownav")
})