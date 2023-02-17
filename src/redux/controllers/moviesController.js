import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "c1bc8e71df17c4559f456ef264867656";

class MoviesController {
  static async getMovies() {
    try {
      const response = await axios.get(
        `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`
      );
      const romance = await axios.get(
        `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`
      );
      const action = await axios.get(
        `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`
      );
      const comedy = await axios.get(
        `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`
      );
      const movies = {
        top: response.data.results,
        romance: romance.data.results,
        action: action.data.results,
        comedy: comedy.data.results,
      };
      return movies;
    } catch (err) {
      throw err;
    }
  }

  static async getSearchMovies(payload) {
    try {
      const data = await axios.get(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${payload}`
      );
      console.log("hola", data.data.results);
      return data.data.results;
    } catch (err) {
      throw err;
    }
  }
}

export default MoviesController;
