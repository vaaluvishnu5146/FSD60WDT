class Movie {
  constructor(title = "", studio = "", rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }

  getPG(movies = [Movie]) {
    var filteredArray = [];
    movies.forEach((movie) => {
      if (movie.rating === "PG") {
        filteredArray.push(movie);
      }
    });
    return filteredArray;
  }
}

const SPD1 = new Movie("SPD1", "EROS");
const SPD2 = new Movie("SPD2", "EROS");
const SPD3 = new Movie("SPD3", "EROS", "PG13");
const IRON_MAN = new Movie("IR1", "EROS", "R");

console.log(SPD1.getPG([SPD1, SPD2, SPD3, IRON_MAN]));
