var nav = document.querySelector('.nav')

window.onscroll = () => {
  if (window.scrollY > 200) {
    nav.classList.add('active')
  } else {
    nav.classList.remove('active')
  }
}
