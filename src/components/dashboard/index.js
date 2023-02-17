import React, { useEffect, useState } from "react";
import * as moviesActions from "../../redux/actions/moviesActions";
import { useDispatch, useSelector } from "react-redux";
import "./dashboard.scss";
import {
  moviesSelector,
  resultsSelector,
} from "../../redux/selectors/MoviesSelectors";
import Modal from "react-modal";
import ReactPlayer from "react-player/lazy";
import HomeMovie from "./homeMovie/homeMovie";
import Header from "./header/header";
import MovieList from "./movieList/movieList";

const Dashboard = () => {
  const dispatch = useDispatch();
  const movies = useSelector(moviesSelector);
  const results = useSelector(resultsSelector);
  const [trailer, setTrailer] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [blackHeader, setBalckHeader] = useState(false);

  const API_KEY = "c1bc8e71df17c4559f456ef264867656";

  const closeModal = () => {
    setOpenModal(false);
  };

  const seeTrailer = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/${
        movie?.media_type === "tv" ? "tv" : "movie"
      }/${
        movie?.id
      }?api_key=${API_KEY}&language=en-US&append_to_response=videos`
    )
      .then((response) => response.json())
      .catch((err) => console.log(err.message));

    if (data?.videos) {
      const index = data.videos.results.findIndex(
        (element) => element.type === "Trailer"
      );
      setTrailer(data.videos?.results[index]?.key);
    }
    setOpenModal(true);
  };

  useEffect(() => {
    dispatch(moviesActions.getMovies());
  }, [dispatch]);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBalckHeader(true);
      } else {
        setBalckHeader(false);
      }
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div>
      <Header black={blackHeader} />
      {movies.hasOwnProperty("top") && results.length === 0 && (
        <HomeMovie item={movies.top[2]} />
      )}
      {results.length === 0 ? (
        <section className="lists">
          {movies.hasOwnProperty("top") && (
            <MovieList
              title="Top"
              movies={movies.top}
              seeTrailer={seeTrailer}
            ></MovieList>
          )}
          {movies.hasOwnProperty("comedy") && (
            <MovieList
              title="Comedy"
              movies={movies.comedy}
              seeTrailer={seeTrailer}
            ></MovieList>
          )}
          {movies.hasOwnProperty("action") && (
            <MovieList
              title="Action"
              movies={movies.action}
              seeTrailer={seeTrailer}
            ></MovieList>
          )}
        </section>
      ) : (
        <section className="results">
          <MovieList
            title="Find Movies"
            movies={results}
            seeTrailer={seeTrailer}
          ></MovieList>
        </section>
      )}

      <Modal isOpen={openModal} onRequestClose={closeModal}>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${trailer}`}
          width="100%"
          height="100%"
          style={{ position: "absolute", top: "0", left: "0" }}
          playing
          muted={false}
        />
      </Modal>
    </div>
  );
};

export default Dashboard;
