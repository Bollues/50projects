window.onload = () =>{
  const menu = document.querySelector(".click-menu-container")
  const menuHeigth = menu.offsetHeight
  menu.style.height = '0'

  openMenu = (e) => {
    e.preventDefault()
    menu.classList.add('active')
    menu.style.left = `${e.clientX}px`
    menu.style.top = `${e.clientY}px`
    menu.style.height = `${menuHeigth}px`
    return 
  }

  closeMenu = () => {
    menu.style.height = '0'
    menu.classList.remove('active')
    return 
  }

  window.onclick = () => closeMenu()
}