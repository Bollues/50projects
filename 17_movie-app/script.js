const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

const main = document.getElementById('movie-app-main')
const form = document.getElementById('movie-app-form')
const search = document.getElementById('movie-app-form-input')

async function getMovies(url) {
  const res = await fetch(url)
  // console.log("res:\n",res)
  // console.log("res.json():\n",res.json())
  const data = await res.json()
  // console.log("data:\n",data)

  showMovies(data.results)
}

function showMovies(data){
  main.innerHTML = ''

  data.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie

    const movieElement = document.createElement("div")
    movieElement.classList.add("movie-app-block")
    movieElement.innerHTML = `<img src=${IMG_PATH + poster_path} alt=${title}>
    <div class="movie-app-info">
      <h3>${title}</h3>
      <span class="${getClassByRate(vote_average)}">${vote_average}</span>
    </div>
    <div class="movie-app-overview">
      <h3>Overview</h3>
      ${overview}
    </div>`

    main.appendChild(movieElement)
  })
}

function getClassByRate(vote){
  if(vote >= 8) {
    return 'movie-avgVote-green'
  } else if(vote >= 5) {
      return 'movie-avgVote-orange'
  } else {
      return 'movie-avgVote-red'
  }
}

getMovies(API_URL)

form.addEventListener("submit",(e) => {
  // 阻止submit后的默认操作
  e.preventDefault()

  const searchTerm = search.value

  if(searchTerm && searchTerm !== '') {
    getMovies(SEARCH_API + searchTerm)

    search.value = ''
  } else {
    window.location.reload()
}
})