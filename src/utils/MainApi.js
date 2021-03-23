export default class Api {
  constructor(config) {
    this.url = config.url;
    this.headers = config.headers;
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`Ошибка: ${res.status}`));
  }

  getUserInfo() {
    return fetch(`${this.url}/users/me`, {
      method: "GET",
      headers: this.headers,
    }).then((res) => this._getResponseData(res));
  }

  updateProfile(name, email) {
    return fetch(`${this.url}/users/me`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({ name, email }),
    }).then((res) => this._getResponseData(res));
  }

  addNewCard({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    nameRU,
    nameEN,
    thumbnail,
    movieId,
  }) {
    return fetch(`${this.url}/movies`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        movieId,
        country,
        director,
        duration,
        year,
        description,
        image,
        trailer,
        thumbnail,
        nameRU,
        nameEN,
      }),
    }).then((res) => this._getResponseData(res));
  }

  deleteMovie(movieId) {
    return fetch(`${this.url}/movies/${movieId}`, {
      method: "DELETE",
      headers: this.headers,
    }).then((res) => {
      return this._getResponseData(res);
    });
  }

  getSavedMovies() {
    return fetch(`${this.url}/movies`, {
      method: "GET",
      headers: this.headers,
    }).then((res) => this._getResponseData(res));
  }
}

export const mainApi = new Api({
  url: "https://api.movies-explorer-lya.students.nomoredomains.monster",
  headers: {
    authorization: `Bearer ${localStorage.getItem("token")}`,
    "Content-Type": "application/json",
  },
});
