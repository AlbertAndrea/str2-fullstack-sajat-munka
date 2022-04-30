const MovieService = (MoviesApi) => {
  let movies = MoviesApi.get()

  const getAllMovies = () => movies

  const findMovieById = (id) => movies.find(movie => movie.id === id)

  const generateNewMovieId = () => {
    const sortedMovies = [...movies].sort((a, b) => a.id > b.id)
    return sortedMovies[sortedMovies.length - 1].id + 1
  }

  const createMovie = (producer, title) => {
    const movie = { id: generateNewMovieId(), title, producer }
    movies = [...movies, movie]
    return movie
  }

  const editMovie = (id, producer, title) => {
    movies = movies.map(movie => movie.id === id ? { id, producer, title } : movie)
    return findMovieById(id)
  }

  const removeMovie = (id) => {
    movies = movies.filter(movie => movie.id !== id)
  }

  return {
    getAllMovies,
    findMovieById,
    createMovie,
    editMovie,
    removeMovie
  }
}

module.exports = MovieService
