const cups = document.querySelectorAll(".loading-water-small-cup")
const remainedWater = document.querySelector("#remainedWater")
const percentage = document.querySelector(".loading-water-percentage")
const remainedDiv = document.querySelector(".loading-water-remained")

cups.forEach((cup, idx) => {
  cup.addEventListener("click",() => {
    // 倒水
    if (cup.classList.contains("active")){
      // 如果是最后一杯
      if(idx === (cups.length-1)){
        cups[idx].classList.remove("active")
        updateBigCup(7)
      }else{  // 不是最后一杯
        // 点击的是注水的最后一杯
        if(!cups[idx+1].classList.contains("active") && cups[idx].classList.contains("active")){
          cups[idx].classList.remove("active")
          updateBigCup(idx)
        }else{  // 点击的不是注水的最后一杯
          for(let i=(idx+1); i<cups.length; i++){
            cups[i].classList.remove("active")
          }
          updateBigCup(idx + 1)
        }
      }
    // 注水
    }else{
      let i = 0
      do{
        cups[i].classList.add("active")
        i++
      }while(i<=idx)
      updateBigCup(idx + 1)
    }
    
  })
})

function updateBigCup(waterThen){
  remainedWater.innerText = `${2 - 0.25 * waterThen}L`
  percentage.innerText = `${waterThen * 12.5}%`

  percentage.style.height = `${waterThen * 12.5}%`
  
  // 注满了
  if(waterThen===8){
    remainedDiv.style.visibility = "hidden"
    remainedDiv.style.height = "0px"
  }else{
    remainedDiv.style.visibility = "visible"
  }

  // 倒光了
  if(waterThen===0){
    percentage.style.visibility = "hidden"
  }else{
    percentage.style.visibility = "visible"
  }
}