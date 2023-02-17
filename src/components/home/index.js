import "./home.scss";
import tv from "../../assets/images/tv.png";
import movie from "../../assets/images/fondo.m4v";

const Home = () => {
  return (
    <div>
      <div className="home-page">
        <div className="home-content">
          <div className="header">
            <div>
              <a href="/">
                <img
                  className="logo"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1920px-Logonetflix.png"
                  alt="Netflix"
                />
              </a>
            </div>
            <a href="/login" className="btn-login" data-testid="title">
              Sign In
            </a>
          </div>
          <div className="header-content">
            <div className="home-info">
              <h1 className="title">Unlimited movies, TV shows, and more</h1>
              <h2 className="subtitle">watch anywhere. Cancel anytime</h2>
              <div className="subtitle">
                Ready to watch? Enter your email to create or restart you
                membership.
              </div>
              <input type="email" className="input-email" placeholder="Email" />
              <button className="btn-link">Get Started </button>
            </div>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="section-one-content">
          <div className="section-text">
            <div className="text">
              <h1 className="section-title">Enjoy on you Tv.</h1>
              <h2 className="section-subtitle">
                Watch on Smart Tvs, playstation, xbox, Chromecast, Apple TV,
                Blu.ray players, and more.
              </h2>
            </div>
          </div>
          <div className="section-video">
            <div className="div-video-tv">
              <video
                src={movie}
                className="video-tv"
                autoPlay={true}
                muted
                loop
              ></video>
            </div>
            <div className="div-image-tv-content">
              <img src={tv} className="img-secction-one" />
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="section-one-content">
          <div className="section-text">
            <div className="div-video-tv">
              <video
                src={movie}
                className="video-tv"
                autoPlay={true}
                muted
                loop
              ></video>
            </div>
            <div className="div-image-tv-content">
              <img src={tv} className="img-secction-one" />
            </div>
          </div>
          <div className="section-video">
            <div className="text">
              <h1 className="section-title">Enjoy on you Tv.</h1>
              <h2 className="section-subtitle">
                Watch on Smart Tvs, playstation, xbox, Chromecast, Apple TV,
                Blu.ray players, and more.
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="section-one-content">Questions? Call 0-800-52351</div>
        <div className="section-one-content">Footer</div>
        <div className="section-one-content">Footer</div>
        <div className="section-one-content">Footer</div>
        <div className="section-one-content">Footer</div>
        <div className="section-one-content">Footer</div>
        <div className="section-one-content">Footer</div>
        <div className="section-one-content">Footer</div>
      </section>
    </div>
  );
};

export default Home;
