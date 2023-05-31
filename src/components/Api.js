class Api {
    constructor(options) {
      this._baseUrl = options.baseUrl;
      this._headers = options.headers;
    }
    _checkRes(res) {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(res.status);
      }
    }
    getUserInfo() {
      return fetch(this._baseUrl + "/users/me", {
        headers: this._headers,
      }).then(this._checkRes);
    }
    getCards() {
      return fetch(this._baseUrl + "/cards", {
        headers: this._headers,
      }).then(this._checkRes);
    }
    editProfile({ name, about }) {
      return fetch(this._baseUrl + "/users/me", {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({
          name,
          about,
        }),
      }).then(this._checkRes);
    }
  
    addCard({ name, link }) {
      return fetch(this._baseUrl + "/cards", {
        method: "POST",
        headers: this._headers,
        body: JSON.stringify({
          name,
          link,
        }),
      }).then(this._checkRes);
    }
    addLike(id) {
      return fetch(this._baseUrl + "/cards/likes/" + id, {
        method: "PUT",
        headers: this._headers,
      }).then(this._checkRes);
    }
    removeLike(id) {
      return fetch(this._baseUrl + "/cards/likes/" + id, {
        method: "DELETE",
        headers: this._headers,
      }).then(this._checkRes);
    }
    editAvatar(avatar) {
      return fetch(this._baseUrl + "/users/me/avatar", {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({
          avatar,
        }),
      }).then(this._checkRes);
    }
    deleteCard(cardId) {
      return fetch(this._baseUrl + "/cards/" + cardId, {
        method: "DELETE",
        headers: this._headers,
      }).then(this._checkRes);
    }
  }
  export const api = new Api({
    baseUrl: "https://around.nomoreparties.co/v1/cohort-3-en",
    headers: {
      authorization: "bccf616c-d32a-4841-af70-282e4f295a5b",
      "content-type": "application/json",
    },
});