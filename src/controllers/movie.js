import FilmCardComponent from '../components/film-card.js';
import FilmDetailsComponent from '../components/film-details.js';
import FilmDetailsInnerContainerComponent from '../components/film-details-inner-container';
import FilmDetailsTopContainerComponent from '../components/film-details-top-container.js';
import FilmDetailsCommentsComponent from '../components/film-details-comments.js';
import {remove, render, replace, RenderPosition} from "../utils/render";

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
    this._filmDetailsComponent = null;
    this._filmDetailsInnerContainerComponent = null;
    this._filmDetailsTopContainerComponent = null;
    this._filmDetailsCommentsComponent = null;

    this._onEscKeyDown = this._onEscKeyDown.bind(this);
  }

  render(film) {
    const oldFilmCardComponent = this._filmCardComponent;
    const oldFilmDetailsComponent = this._filmDetailsComponent;
    const oldFilmDetailsInnerContainerComponent = this._filmDetailsInnerContainerComponent;
    const oldFilmDetailsTopContainerComponent = this._filmDetailsTopContainerComponent;
    const oldFilmDetailsCommentComponent = this._filmDetailsCommentsComponent;

    this._filmCardComponent = new FilmCardComponent(film);
    this._filmDetailsComponent = new FilmDetailsComponent();
    this._filmDetailsInnerContainerComponent = new FilmDetailsInnerContainerComponent();
    this._filmDetailsTopContainerComponent = new FilmDetailsTopContainerComponent(film);
    this._filmDetailsCommentsComponent = new FilmDetailsCommentsComponent(film);

    const filmDetailsHandler = ((evt) => {
      evt.preventDefault();
      document.addEventListener(`keydown`, this._onEscKeyDown);

      this._replaceFilmsToFilmDetails();

      this._filmDetailsTopContainerComponent.setCloseFilmCardHandler((evts) => {
        evts.preventDefault();
        this. _replaceFilmDetailsToFilms();
      });
    });

    this._filmCardComponent.setFilmCardTitleClickHandler(filmDetailsHandler);
    this._filmCardComponent.setFilmCardPosterClickHandler(filmDetailsHandler);
    this._filmCardComponent.setFilmCardCommentsClickHandler(filmDetailsHandler);

    this._filmCardComponent.setWatchlistButtonClickHandler(() => {
      this._onDataChange(this, film, Object.assign({}, film, {
        isAddedToWishList: !film.isAddedToWishList
      }));
    });

    this._filmCardComponent.setMarkAsWatchedButtonClickHandler(() => {
      this._onDataChange(this, film, Object.assign({}, film, {
        isWatched: !film.isWatched
      }));
    });

    this._filmCardComponent.setFavouriteButtonClickHandler(() => {
      this._onDataChange(this, film, Object.assign({}, film, {
        isFavourite: !film.isFavourite
      }));
    });

    if (oldFilmCardComponent && oldFilmDetailsComponent && oldFilmDetailsInnerContainerComponent && oldFilmDetailsTopContainerComponent && oldFilmDetailsCommentComponent) {
      replace(this._filmCardComponent, oldFilmCardComponent);
      replace(this._filmDetailsComponent, oldFilmDetailsComponent);
      replace(this._filmDetailsInnerContainerComponent, oldFilmDetailsInnerContainerComponent);
      replace(this._filmDetailsTopContainerComponent, oldFilmDetailsTopContainerComponent);
      replace(this._filmDetailsCommentsComponent, oldFilmDetailsCommentComponent);
    } else {
      render(this._container, this._filmCardComponent, RenderPosition.BEFOREEND);
    }
  }

  setDefaultView() {
    if (this._mode !== Mode.DEFAULT) {
      document.removeEventListener(`keydown`, this._onEscKeyDown);
      this._filmDetailsComponent.reset();
      this._filmDetailsInnerContainerComponent.reset();
      this._filmDetailsTopContainerComponent.reset();
      this._filmDetailsCommentsComponent.reset();
      this. _replaceFilmDetailsToFilms();
    }
  }

  _onEscKeyDown(evt) {
    const isEscKey = evt.key === `Escape` || evt.key === `Esc`;

    if (isEscKey) {
      this. _replaceFilmDetailsToFilms();
      document.removeEventListener(`keydown`, this._onEscKeyDown);
    }
  }

  _replaceFilmDetailsToFilms() {
    remove(this._filmDetailsComponent);
    remove(this._filmDetailsInnerContainerComponent);
    remove(this._filmDetailsTopContainerComponent);
    remove(this._filmDetailsCommentsComponent);

    this._mode = Mode.DEFAULT;
  }

  _replaceFilmsToFilmDetails() {
    this._onViewChange();

    const footerElement = document.querySelector(`.footer`);

    render(footerElement, this._filmDetailsComponent, RenderPosition.BEFOREBEGIN);
    render(this._filmDetailsComponent.getElement(), this._filmDetailsInnerContainerComponent, RenderPosition.BEFOREEND);
    render(this._filmDetailsInnerContainerComponent.getElement(), this._filmDetailsTopContainerComponent, RenderPosition.BEFOREEND);
    render(this._filmDetailsInnerContainerComponent.getElement(), this._filmDetailsCommentsComponent, RenderPosition.BEFOREEND);

    this._mode = Mode.DETAILED;
  }
}
