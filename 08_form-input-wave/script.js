const labels = document.querySelectorAll("label")

labels.forEach(label=>{
  // console.log(label.innerHTML)
  // console.log(label.innerText)
  label.innerHTML = label.innerText
    .split('')
    .map((letter, idx)=>`<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
    .join('')
})