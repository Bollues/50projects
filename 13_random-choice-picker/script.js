const textarea = document.querySelector("#random-pick-tags-textarea");
const tags = document.querySelector(".random-pick-tags")

textarea.addEventListener("keyup",(e)=>{
  createTags(e.target.value)

  if(e.key === "Enter"){
    randomSelect()
  }
})

function createTags(input){
  const words = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
  
  // 清空之前的span标签
  tags.innerHTML = ''
  
  words.forEach(word=>{
    const span = document.createElement("span")
    span.innerText = word
    tags.appendChild(span)
  })
}

function randomSelect(){
  const times = 30

  // 定时29次
  const randomPicking = setInterval(()=>{
    const randomSpan = randomPick()
    if(randomSpan !== undefined){
      highlightTag(randomSpan)
      setTimeout(()=>{
        unHighlightTag(randomSpan)
      },150)
    }
  },150)

  // 第30次的时候
  setTimeout(()=>{
    clearInterval(randomPicking)
    setTimeout(()=>{
      const randomSpan = randomPick()
      if(randomSpan !== undefined){
        highlightTag(randomSpan)
      }
    },150)
  },times*150)

}


function randomPick(){
  const spans = document.querySelectorAll("span")
  return spans[Math.floor(Math.random() * spans.length)]
}

function highlightTag(span){
  span.classList.add("active")
}

function unHighlightTag(span){
  span.classList.remove("active")
}