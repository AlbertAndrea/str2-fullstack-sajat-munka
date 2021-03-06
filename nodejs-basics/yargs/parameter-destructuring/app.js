const yargs = require('yargs')
const { id, producer, title } = require('./option')
const {
  getAllMovies,
  findMovieById,
  createMovie,
  editMovie,
  removeMovie
} = require('./movie-service')

yargs
  .version('1.0.0')
  .usage('Usage: <command> [options]')
  .command({
    command: 'get',
    describe: 'Get all movies',
    handler: () => console.log(getAllMovies())
  })
  .command({
    command: 'find',
    describe: 'Find a movie by id',
    builder: { id },
    handler: (args) =>
      console.log(findMovieById(args.id))
  })
  .command({
    command: 'create',
    describe: 'Create a new movie',
    builder: { producer, title },
    handler: (args) => {
      console.log(createMovie(args))
    }
  })
  .command({
    command: 'edit',
    describe: 'Edit a movie',
    builder: { id, producer, title },
    handler: (args) => {
      editMovie(args)
    }
  })
  .command({
    command: 'remove',
    describe: 'Remove a movie by id',
    builder: { id },
    handler: (args) => {
      removeMovie(args.id)
      console.log('deleted')
    }
  })
  .locale('en')
  .strict()
  .help()
  .parse()
