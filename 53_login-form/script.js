const loginContainer = document.querySelector('.container')
const btn = document.getElementsByTagName('button')[0]

btn.addEventListener('click', () => {
    loginContainer.classList.add('active')
})


loginContainer.addEventListener('click', () => {
  loginContainer.classList.remove('active')
})

