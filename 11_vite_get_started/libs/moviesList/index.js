function Movie(id, movieName, releaseDate, rate, price) {
  this.id = id;
  this.movieName = movieName;
  this.releaseDate = releaseDate;
  this.rate = rate;
  this.price = price;
}
let lastId = 1;
let movies = [];

function setupMovies() {
  movies.push(new Movie(lastId, "Film A", new Date(), 8, 1000000000));
  lastId += 1;
  movies.push(new Movie(lastId, "Film B", new Date(), 9, 2000000000));
  lastId += 1;
  movies.push(new Movie(lastId, "Film C", new Date(), 7, 500000000));
  lastId += 1;
}
setupMovies();

export function getMovies() {
  return [...movies];
}

export function findMovieById(id) {
  return movies.find((el) => el.id === id);
}

export function addMovie(movie) {
  movies.push(movie);
}

export function updateMovie({ id, ...moviesData }) {
  movies = movies.map((el) => {
    if (el.id === Number(id)) {
      return { ...el, ...moviesData };
    }
    return el;
  });
}

export function removeMovie(id) {
  movies = movies.filter((el) => el.id !== id);
}

export function getLastId() {
  return lastId;
}

export function increamentLastId() {
  lastId += 1;
}
