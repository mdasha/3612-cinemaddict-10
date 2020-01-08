import AbstractSmartComponent from "./abstract-smart-component";
import {formatYear} from '../utils/common.js';

const createDescriptionMarkup = (descriptions) => {
  return descriptions
    .map((description) => {
      return (`${description}.`);
    })
    .join(`\n`);
};

const createFilmCard = (film) => {
  const {title, description, poster, date, duration, genre, rating, comments} = film;
  const year = formatYear(date);
  const filmDescription = createDescriptionMarkup(Array.from(description));

  return (
    `<article class="film-card">
      <h3 class="film-card__title">${title}</h3>

      <p class="film-card__rating">${rating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${year}</span>
        <span class="film-card__duration">${duration}</span>
        <span class="film-card__genre">${genre}</span>
      </p>
      <img src="./images/posters/${poster}" alt="" class="film-card__poster">
      <p class="film-card__description">${filmDescription}</p>
      <a class="film-card__comments">${comments} comments</a>
      <form class="film-card__controls">
        <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
        <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
        <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
      </form>
    </article>`
  );
};

export default class FilmCard extends AbstractSmartComponent {
  constructor(film) {
    super();

    this._film = film;
    this._submitHandler = null;
  }

  getTemplate() {
    return createFilmCard(this._film);
  }

  recoveryListeners() {
    this.setWatchlistButtonClickHandler(this._submitHandler);
    this.setMarkAsWatchedButtonClickHandler(this._submitHandler);
    this.setFavouriteButtonClickHandler(this._submitHandler);
  }

  setFilmCardTitleClickHandler(handler) {
    this.getElement().querySelector(`.film-card__title`)
      .addEventListener(`click`, handler);
  }

  setFilmCardPosterClickHandler(handler) {
    this.getElement().querySelector(`.film-card__poster`)
      .addEventListener(`click`, handler);
  }

  setFilmCardCommentsClickHandler(handler) {
    this.getElement().querySelector(`.film-card__comments`)
      .addEventListener(`click`, handler);
  }

  setWatchlistButtonClickHandler(handler) {
    this.getElement().querySelector(`.film-card__controls-item--add-to-watchlist`)
      .addEventListener(`click`, handler);
    this._submitHandler = handler;
  }

  setMarkAsWatchedButtonClickHandler(handler) {
    this.getElement().querySelector(`.film-card__controls-item--mark-as-watched`)
      .addEventListener(`click`, handler);
    this._submitHandler = handler;
  }

  setFavouriteButtonClickHandler(handler) {
    this.getElement().querySelector(`.film-card__controls-item--favorite`)
      .addEventListener(`click`, handler);
    this._submitHandler = handler;
  }


}
