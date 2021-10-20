const boxs = document.querySelectorAll(".lazy-load-box")
const loadAtHeight = window.innerHeight * 0.8

window.addEventListener('scroll', loadBoxs)

loadBoxs()

function loadBoxs(){
  boxs.forEach( box => {
    if(box.getBoundingClientRect().top < loadAtHeight){
      box.classList.add("active")
    }else{
      box.classList.remove("active")
    }
  })
}