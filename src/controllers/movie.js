import FilmCardComponent from '../components/film-card.js';
import FilmDetailsTopContainerComponent from '../components/film-details-top-container.js';
import {render, RenderPosition, replace} from "../utils/render";

const Mode = {
  DEFAULT: `default`,
  DETAILED: `detailed`
};

export default class MovieController {
  constructor(container, onDataChange, onViewChange) {
    this._container = container;
    this._onDataChange = onDataChange;
    this._onViewChange = onViewChange;

    this._mode = Mode.DEFAULT;

    this._filmCardComponent = null;
    this._filmDetailsTopContainerComponent = null;

    this._onEscKeyDown = this._onEscKeyDown.bind(this);
  }

  render(film) {
    const oldFilmCardComponent = this._filmCardComponent;
    const oldFilmDetailsTopContainerComponent = this._filmDetailsTopContainerComponent;

    this._filmCardComponent = new FilmCardComponent(film);
    this._filmDetailsTopContainerComponent = new FilmDetailsTopContainerComponent(film);

    const filmDetailsHandler = ((evt) => {
      evt.preventDefault();
      this._replaceFilmsToFilmDetails();

      document.addEventListener(`keydown`, this._onEscKeyDown);
    });

    this._filmDetailsTopContainerComponent.setCloseFilmCardHandler((event) => {
      event.preventDefault();
      this._replaceFilmDetailsToFilms();
    });


    this._filmCardComponent.setFilmCardTitleClickHandler(filmDetailsHandler);
    this._filmCardComponent.setFilmCardPosterClickHandler(filmDetailsHandler);
    this._filmCardComponent.setFilmCardCommentsClickHandler(filmDetailsHandler);

    this._filmCardComponent.setWatchlistButtonClickHandler((evt) => {
      evt.preventDefault();
      this._onDataChange(this, film, Object.assign({}, film, {
        isAddedToWishList: !film.isAddedToWishList
      }));
    });

    this._filmCardComponent.setMarkAsWatchedButtonClickHandler((evt) => {
      evt.preventDefault();
      this._onDataChange(this, film, Object.assign({}, film, {
        isWatched: !film.isWatched
      }));
    });

    this._filmCardComponent.setFavouriteButtonClickHandler((evt) => {
      evt.preventDefault();
      this._onDataChange(this, film, Object.assign({}, film, {
        isFavourite: !film.isFavourite
      }));
    });

    if (oldFilmCardComponent && oldFilmDetailsTopContainerComponent) {
      replace(this._filmCardComponent, oldFilmCardComponent);
      replace(this._filmDetailsTopContainerComponent, oldFilmDetailsTopContainerComponent);
    } else {
      render(this._container, this._filmCardComponent, RenderPosition.BEFOREEND);
    }
  }

  setDefaultView() {
    if (this._mode !== Mode.DEFAULT) {
      this._replaceFilmDetailsToFilms();
    }
  }

  _onEscKeyDown(evt) {
    const isEscKey = evt.key === `Escape` || evt.key === `Esc`;

    if (isEscKey) {
      this._replaceFilmDetailsToFilms();
      document.removeEventListener(`keydown`, this._onEscKeyDown);
    }
  }

  _replaceFilmDetailsToFilms() {
    replace(this._filmCardComponent, this._filmDetailsTopContainerComponent);
    render(this._container, this._filmCardComponent, RenderPosition.BEFOREEND);

    this._mode = Mode.DEFAULT;
  }

  _replaceFilmsToFilmDetails() {
    this._onViewChange();

    replace(this._filmDetailsTopContainerComponent, this._filmCardComponent);
    render(this._container.parentElement.parentElement, this._filmDetailsTopContainerComponent, RenderPosition.BEFOREEND);

    this._mode = Mode.DETAILED;
  }
}
