const btn = document.getElementsByTagName("button")[0]
const search = document.getElementsByClassName("ui-search")[0]
const input = document.getElementsByTagName('input')[0]

btn.addEventListener("click", ()=>{
  search.classList.toggle("active")
  input.focus()
})