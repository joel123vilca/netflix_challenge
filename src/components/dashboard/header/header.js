import "./header.scss";
import search from "../../../assets/images/search.png";

import * as moviesActions from "../../../redux/actions/moviesActions";
import { useDispatch } from "react-redux";
export default ({ black }) => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.target.value.length > 4) {
      let payload = e.target.value;
      dispatch(moviesActions.getSearchMovies(payload));
    }
  };

  return (
    <header className={black ? "black" : ""}>
      <div className="header--logo">
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1920px-Logonetflix.png"
            alt="Netflix"
          />
        </a>
        <a>home</a>
        <a>List</a>
      </div>
      <div className="header--user">
        <div class="search">
          <input
            class="input toggle"
            type="text"
            placeholder="Titles, people, genres"
            onChange={handleChange}
          />
          <img class="img" src={search} alt="" />
        </div>
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="User"
          />
        </a>
      </div>
    </header>
  );
};
