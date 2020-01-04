import {
  COUNT_FILMS,
  COUNT_MOST_COMMENTED,
  COUNT_TOP_RATED,
  SHOWING_TASKS_COUNT_BY_BUTTON,
  SHOWING_TASKS_COUNT_ON_START
} from '../const.js';
import {remove, render, RenderPosition} from '../utils/render.js';
import FilmCardComponent from '../components/film-card.js';
import FilmDetailsComponent from '../components/film-details.js';
import NoFilmsList from '../components/no-films-list.js';
import FilmsListContainer from '../components/films-list-container.js';
import ButtonShowMore from '../components/button-show-more.js';
import TopRatedFilmsListComponent from '../components/top-rated-films-list.js';
import MostCommentedFilmsListComponent from '../components/most-commented-films-list.js';
import FilmsList from '../components/films-list.js';
import Sort, {SortType} from '../components/sort.js';

const renderFilm = (filmListElement, film) => {
  const filmCardComponent = new FilmCardComponent(film);
  const filmDetailsComponent = new FilmDetailsComponent(film);
  const footerElement = document.querySelector(`.footer`);

  const onEscKeyDown = (evt) => {
    const isEscKey = evt.key === `Escape` || evt.key === `Esc`;

    if (isEscKey) {
      remove(filmDetailsComponent);
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };

  const filmDetailsHandler = (() => {
    render(footerElement, filmDetailsComponent, RenderPosition.BEFOREEND);
    document.addEventListener(`keydown`, onEscKeyDown);

    filmDetailsComponent.setCloseFilmCardHandler(() => {
      remove(filmDetailsComponent);
    });
  });

  filmCardComponent.setFilmCardTitleClickHandler(filmDetailsHandler);
  filmCardComponent.setFilmCardPosterClickHandler(filmDetailsHandler);
  filmCardComponent.setFilmCardCommentsClickHandler(filmDetailsHandler);

  render(filmListElement, filmCardComponent, RenderPosition.BEFOREEND);
};

const renderFilms = (filmListElement, films) => {
  films.forEach((film) => {
    renderFilm(filmListElement, film);
  });
};

export default class PageController {
  constructor(container) {
    this._container = container;

    this._noFilmsListComponent = new NoFilmsList();
    this._filmsListComponent = new FilmsList();
    this._sortComponent = new Sort();
    this._filmsListContainerComponent = new FilmsListContainer();
    this._filmsTopRatedComponent = new FilmsListContainer();
    this._filmsMostCommentedComponent = new FilmsListContainer();
    this._showMoreButtonComponent = new ButtonShowMore();
    this._topRatedFilmsListComponent = new TopRatedFilmsListComponent();
    this._mostCommentedFilmsListComponent = new MostCommentedFilmsListComponent();
  }

  render(films, topRated, mostCommented) {
    const renderShowMoreButton = () => {
      if (showingTasksCount >= films.length) {
        return;
      }

      render(this._filmsListComponent.getElement(), this._showMoreButtonComponent, RenderPosition.BEFOREEND);

      this._showMoreButtonComponent.setClickHandler(() => {
        const prevTasksCount = showingTasksCount;

        showingTasksCount = showingTasksCount + SHOWING_TASKS_COUNT_BY_BUTTON;

        films.slice(prevTasksCount, showingTasksCount)
          .forEach((film) => {
            renderFilm(filmListElement, film);
          });

        if (showingTasksCount >= films.length) {
          remove(this._showMoreButtonComponent);
        }
      });
    };

    const container = this._container.getElement();

    if (COUNT_FILMS === 0) {
      render(container, this._noFilmsListComponent, RenderPosition.BEFOREEND);
      return;
    }
    render(container, this._sortComponent, RenderPosition.BEFOREBEGIN);
    render(container, this._filmsListComponent, RenderPosition.BEFOREEND);

    render(this._filmsListComponent.getElement(), this._filmsListContainerComponent, RenderPosition.BEFOREEND);
    const filmListElement = this._filmsListContainerComponent.getElement();

    let showingTasksCount = SHOWING_TASKS_COUNT_ON_START;
    renderFilms(filmListElement, films.slice(0, showingTasksCount));
    renderShowMoreButton();

    this._sortComponent.setSortTypeChangeHandler((sortType) => {
      let sortedFilms = [];

      switch (sortType) {
        case SortType.DATE_DOWN:
          sortedFilms = films.slice().sort((a, b) => b.date - a.date);
          break;
        case SortType.RATING_DOWN:
          sortedFilms = films.slice().sort((a, b) => b.rating - a.rating);
          break;
        case SortType.DEFAULT:
          sortedFilms = films.slice(0, showingTasksCount);
          break;
      }

      filmListElement.innerHTML = ``;
      renderFilms(filmListElement, sortedFilms);

      if (sortType === SortType.DEFAULT) {
        renderShowMoreButton();
      } else {
        remove(this._showMoreButtonComponent);
      }
    });

    render(container, this._topRatedFilmsListComponent, RenderPosition.BEFOREEND);
    render(container, this._mostCommentedFilmsListComponent, RenderPosition.BEFOREEND);
    render(this._topRatedFilmsListComponent.getElement(), this._filmsTopRatedComponent, RenderPosition.BEFOREEND);
    render(this._mostCommentedFilmsListComponent.getElement(), this._filmsMostCommentedComponent, RenderPosition.BEFOREEND);

    const topRatedFilmsElement = this._filmsTopRatedComponent.getElement();
    renderFilms(topRatedFilmsElement, topRated.slice(0, COUNT_TOP_RATED));

    const mostCommentedFilmsElement = this._filmsMostCommentedComponent.getElement();
    renderFilms(mostCommentedFilmsElement, mostCommented.slice(0, COUNT_MOST_COMMENTED));
  }
}
