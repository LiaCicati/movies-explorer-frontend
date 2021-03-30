import { useEffect, useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import * as auth from "../../utils/auth";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./App.css";
import * as moviesApi from "../../utils/MoviesApi";
import Main from "../Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import PageNotFound from "../PageNotFound/PageNotFound";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import InfoTooltip from "../InfoToolTip/InfoTooltip";
import authSuccess from "../../images/success.svg";
import authFail from "../../images/fail.svg";
import { mainApi } from "../../utils/MainApi";
import * as utils from "../../utils/utils";
import * as messages from "../../utils/constants";

const App = () => {
  const [loggedIn, setIsLoggedIn] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [tooltipImage, setTooltipImage] = useState("");
  const [message, setMessage] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [movieSearchError, setMovieSearchError] = useState("");

  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      auth
        .checkToken(token)
        .then((res) => {
          if (res) {
            setIsLoggedIn(true);
            history.push("/movies");
          }
        })
        .catch((err) => {
          console.log(utils.getErrors(err));
        });
    } else {
      localStorage.removeItem("token");
    }
  }, [history]);

  function onLogin(email, password) {
    auth
      .authorize(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("token", res.token);
          setIsLoggedIn(true);
          history.push("/movies");
        }
      })
      .catch((err) => {
        setIsInfoTooltipOpen(true);
        setTooltipImage(authFail);
        setMessage(utils.getErrors(err));
        console.log(err);
      });
  }

  function onRegister(name, email, password) {
    auth
      .register(name, email, password)
      .then((res) => {
        if (res.email) {
          setIsInfoTooltipOpen(true);
          setTooltipImage(authSuccess);
          setIsLoggedIn(true);
          onLogin(email, password);
          setCurrentUser({ name, email });
          setMessage(messages.REGISTER_SUCCESS);
          history.push("/movies");
        }
      })
      .catch((err) => {
        setIsInfoTooltipOpen(true);
        setTooltipImage(authFail);
        setMessage(utils.getErrors(err));
        console.log(err);
      });
  }

  function onSignOut() {
    localStorage.clear();
    setIsLoggedIn(false);
    history.push("/");
  }

  function closeAllModals() {
    setIsInfoTooltipOpen(false);
  }

  function handlerEscClose(evt) {
    if (evt.key === "Escape") {
      closeAllModals();
    }
  }

  function closeByOverlay(evt) {
    if (evt.target.classList.contains("modal-tooltip")) {
      closeAllModals();
    }
  }
 
  useEffect(() => {
    document.addEventListener("keydown", handlerEscClose);
    document.addEventListener("click", closeByOverlay);
    return () => {
      document.removeEventListener("keydown", handlerEscClose);
      document.removeEventListener("click", closeByOverlay);
    };
  });

  useEffect(() => {
    if (loggedIn) {
      Promise.all([mainApi.getUserInfo(), mainApi.getSavedMovies()])
        .then(([userData, movies]) => {
          setCurrentUser(userData);
          setSavedMovies(movies);
          localStorage.setItem("saved-movies", JSON.stringify(movies));
          localStorage.setItem("current-user", JSON.stringify(userData));
        })
        .catch((err) => console.log(utils.getErrors(err)));
    }
  }, [loggedIn]);

  function getAllMovies() {
    setMovieSearchError("");
    setIsLoading(true);
      moviesApi
        .getMovies()
        .then((movies) => {
          localStorage.setItem("all-movies", JSON.stringify(movies));
          setMovies(utils.checkSavedMovies(movies, savedMovies));
          setMovieSearchError(messages.MOVIES_NOT_FOUND);
        })
        .catch((err) => {
          setMovieSearchError(messages.SERVER_ERROR);
          console.log(utils.getErrors(err));
        })
        .finally(() => {
          setIsLoading(false);
        });
    
  }

  function handleUpdateUserInfo({ name, email }) {
    mainApi
      .updateProfile({ name, email })
      .then((data) => {
        if (data) {
          setCurrentUser(data);
          setIsInfoTooltipOpen(true);
          setTooltipImage(authSuccess);
          setMessage(messages.SUCCESS_PROFILE_UPDATE);
        }
      })
      .catch((err) => {
        setIsInfoTooltipOpen(true);
        setTooltipImage(authFail);
        setMessage(utils.getErrors(err));
        console.log(utils.getErrors(err));
      });
  }

  function handleSaveMovie(movie) {
    mainApi
      .addNewCard(movie)
      .then((savedMovie) => {
        setSavedMovies([savedMovie, ...savedMovies]);
      })
      .catch((err) => {
        console.log(utils.getErrors(err));
      });
  }

  function handleDeleteMovie(movie) {
    const movieId = movie.id || movie.movieId;
    const userMovie = savedMovies.find(
      (savedMovie) => savedMovie.movieId === movieId
    );
    mainApi
      .deleteMovie(userMovie._id)
      .then(() => {
        const newSavedMovies = savedMovies.filter(
          (savedMovie) => savedMovie.movieId !== movieId
        );
        setSavedMovies(newSavedMovies);
      })
      .catch((err) => {
        console.log(utils.getErrors(err));
      });
  }

  function handleCardClickButton(movie) {
    if (!movie.isSaved && !movie._id) {
      handleSaveMovie(movie);
    } else {
      handleDeleteMovie(movie);
    }
  }

  useEffect(() => {
    const allMovies = JSON.parse(localStorage.getItem("all-movies"));
    if (allMovies) {
      setMovies(utils.checkSavedMovies(allMovies, savedMovies));
      setMovieSearchError(messages.MOVIES_NOT_FOUND);
    } else {
      setMovieSearchError(messages.START_SEARCHING);
      setMovies([]);
    }
  }, [savedMovies]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Header loggedIn={false} />
            <Main />
            <Footer />
          </Route>
          <ProtectedRoute
            path="/movies"
            component={Movies}
            isLoading={isLoading}
            cards={movies}
            loggedIn={loggedIn}
            onGetMovies={getAllMovies}
            onCardClickButton={handleCardClickButton}
            movieSearchError={movieSearchError}
          ></ProtectedRoute>
          <ProtectedRoute
            path="/saved-movies"
            component={SavedMovies}
            loggedIn={loggedIn}
            savedMovies={savedMovies}
            onCardClickButton={handleCardClickButton}
          ></ProtectedRoute>
          <Route path="/signup">
            <Register onRegister={onRegister} />
          </Route>
          <Route path="/signin">
            <Login onLogin={onLogin} />
          </Route>
          <ProtectedRoute
            path="/profile"
            component={Profile}
            onSignOut={onSignOut}
            loggedIn={loggedIn}
            onUpdate={handleUpdateUserInfo}
          ></ProtectedRoute>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
        <InfoTooltip
          isOpen={isInfoTooltipOpen}
          onClose={closeAllModals}
          image={tooltipImage}
          message={message}
          loggedIn={loggedIn}
        />
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
