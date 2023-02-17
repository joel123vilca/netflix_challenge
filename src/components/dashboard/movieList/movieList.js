import "./movieList.scss";

const MovieList = ({ title, movies, seeTrailer }) => {
  return (
    <div className="movies">
      <div className="movie-category">{title}</div>
      <div className="movie-list">
        <div className="movie-content">
          {movies.map((movie) => (
            <div
              className="movie"
              key={movie.title}
              onClick={() => seeTrailer(movie)}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${
                  movie.backdrop_path || movie.poster_path
                }`}
                alt="img movie"
              ></img>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
