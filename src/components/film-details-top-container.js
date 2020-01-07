import AbstractSmartComponent from "./abstract-smart-component";
import {RATINGS} from '../const.js';

const createDescriptionMarkup = (descriptions) => {
  return descriptions
    .map((description) => {
      return (`${description}.`);
    })
    .join(`\n`);
};

const createGenresMarkup = (genres) => {
  return genres
    .map((genre) => {
      return (
        `<span class="film-details__genre">${genre}</span>`
      );
    })
    .join(`\n`);
};

const createYourRatingMarkup = (yourRating) => {
  return RATINGS
    .map((rating) => {
      const isChecked = yourRating === rating;
      return (
        `<input type="radio" name="score" class="film-details__user-rating-input visually-hidden" value="${rating}" id="rating-${rating}" ${isChecked ? `checked` : ``}>
         <label class="film-details__user-rating-label" for="rating-${rating}">${rating}</label>`
      );
    }).join(``);
};

const createFilmDetailsTopContainerTemplate = (film, options = {}) => {
  const {title, description, poster, day, year, month, duration, genres, country, rating, age, yourRating} = film;
  const {isWatched, isFavourite, isAddedToWishList} = options;
  const filmDescription = createDescriptionMarkup(Array.from(description));
  const genreList = createGenresMarkup(Array.from(genres));
  const yourRatingMarkup = createYourRatingMarkup(yourRating);
  const genre = Array.from(genres).length === 1 ? `Genre` : `Genres`;

  return (
    `<div><div class="form-details__top-container">
          <div class="film-details__close">
              <button class="film-details__close-btn" type="button">close</button>
          </div>

          <div class="film-details__info-wrap">
            <div class="film-details__poster">
              <img class="film-details__poster-img" src="./images/posters/${poster}" alt="">
              <p class="film-details__age">${age}</p>
            </div>

            <div class="film-details__info">
              <div class="film-details__info-head">
                <div class="film-details__title-wrap">
                  <h3 class="film-details__title">${title}</h3>
                  <p class="film-details__title-original">Original: ${title}</p>
                </div>

                <div class="film-details__rating">
                 <p class="film-details__total-rating">${rating}</p>
                    ${isWatched ? ` <p class="film-details__user-rating">Your rate ${yourRating}</p>` : ``}
                </div>
              </div>

              <table class="film-details__table">
                <tr class="film-details__row">
                  <td class="film-details__term">Director</td>
                  <td class="film-details__cell">Anthony Mann</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Writers</td>
                  <td class="film-details__cell">Anne Wigton, Heinz Herald, Richard Weil</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Actors</td>
                  <td class="film-details__cell">Erich von Stroheim, Mary Beth Hughes, Dan Duryea</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Release Date</td>
                <td class="film-details__cell">${day}.${month}.${year} </td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Runtime</td>
                  <td class="film-details__cell">${duration}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Country</td>
                  <td class="film-details__cell">${country}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">${genre}</td>
                  <td class="film-details__cell">
                    ${genreList}
                  </td>
                </tr>
              </table>

              <p class="film-details__film-description">
                ${filmDescription}
              </p>
            </div>
          </div>

          <section class="film-details__controls">
            <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist" ${isAddedToWishList ? `checked` : ``}>
            <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>

            <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched" ${isWatched ? `checked` : ``}>
            <label for="watched" class="film-details__control-label film-details__control-label--watched"> Already watched</label>

            <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite" ${isFavourite ? `checked` : ``}>
            <label for="favorite" class="film-details__control-label film-details__control-label--favorite" >Add to favorites</label>
          </section></div>
    ${isWatched ? `
    <div class="form-details__middle-container">
      <section class="film-details__user-rating-wrap">
        <div class="film-details__user-rating-controls">
          <button class="film-details__watched-reset" type="button">Undo</button>
        </div>

        <div class="film-details__user-score">
          <div class="film-details__user-rating-poster">
            <img src="./images/posters/${poster}" alt="film-poster" class="film-details__user-rating-img">
          </div>

          <section class="film-details__user-rating-inner">
            <h3 class="film-details__user-rating-title">${title}</h3>

            <p class="film-details__user-rating-feelings">How you feel it?</p>

            <div class="film-details__user-rating-score">
              ${yourRatingMarkup}
            </div>
          </section>
        </div>
      </section>


</div>` : ``}
 </div>`
  );
};

export default class FilmDetailsTopContainer extends AbstractSmartComponent {
  constructor(film) {
    super();

    this._film = film;
    this._isWatched = this._film.isWatched;
    this._isFavourite = this._film.isFavourite;
    this._isAddedToWishList = this._film.isAddedToWishList;
    this._submitHandler = null;

    this._subscribeOnEvents();
  }

  getTemplate() {
    return createFilmDetailsTopContainerTemplate(this._film, {
      isWatched: this._isWatched,
      isFavourite: this._isFavourite,
      isAddedToWishList: this._isAddedToWishList
    });
  }

  recoveryListeners() {
    this.setCloseFilmCardHandler(this._submitHandler);
    this._subscribeOnEvents();
  }

  reset() {
    this._isWatched = this._film.isWatched;
    this._isFavourite = this._film.isFavourite;
    this._isAddedToWishList = this._film.isAddedToWishList;

    this.rerender();
  }

  setCloseFilmCardHandler(handler) {
    this.getElement().querySelector(`.film-details__close-btn`)
      .addEventListener(`click`, handler);
    this._submitHandler = handler;
  }

  _subscribeOnEvents() {
    const element = this.getElement();

    element.querySelector(`.film-details__control-label--watched`)
      .addEventListener(`click`, () => {
        this._isWatched = !this._isWatched;

        this.rerender();
      });

    element.querySelector(`.film-details__control-label--favorite`)
      .addEventListener(`click`, () => {
        this._isFavourite = !this._isFavourite;

        this.rerender();
      });

    element.querySelector(`.film-details__control-label--watchlist`)
      .addEventListener(`click`, () => {
        this._isAddedToWishList = !this._isAddedToWishList;

        this.rerender();
      });
  }
}
