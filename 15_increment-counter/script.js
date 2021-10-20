const counters = document.querySelectorAll(".increment-counter-count")

/*
  写法一：正确，setTimeout执行完毕后再创建下一个setTimeout
*/
counters.forEach(counter => {
  counter.innerText = 0
  function updateCount(){
    const target = +counter.getAttribute("data-target")
    const countNow = +counter.innerText
    const count = target / 200
    if(countNow < target){
      counter.innerText = Math.ceil(countNow + count)
      setTimeout(updateCount,10)
    }else{
      counter.innerText = target
    }
  }
  updateCount()
})

/*
  写法二：错误，错在setTimeout越执行越多，导致数字越跳越快
*/

// function updateCount(){
//   counters.forEach(counter => {
//     const target = +counter.getAttribute("data-target")
//     const countNow = +counter.innerText
//     const count = target / 200
//     if(countNow < target){
//       counter.innerText = Math.ceil(countNow + count)
//       setTimeout(updateCount,10)
//     }else{
//       counter.innerText = target
//     }
//   })
// }

// updateCount()
