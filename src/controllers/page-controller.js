import {
  COUNT_FILMS,
  COUNT_MOST_COMMENTED,
  COUNT_TOP_RATED,
  SHOWING_TASKS_COUNT_BY_BUTTON,
  SHOWING_TASKS_COUNT_ON_START
} from '../const.js';
import {remove, render, RenderPosition} from '../utils/render.js';
import NoFilmsList from '../components/no-films-list.js';
import FilmsListContainer from '../components/films-list-container.js';
import ButtonShowMore from '../components/button-show-more.js';
import TopRatedFilmsListComponent from '../components/top-rated-films-list.js';
import MostCommentedFilmsListComponent from '../components/most-commented-films-list.js';
import FilmsList from '../components/films-list.js';
import Sort, {SortType} from '../components/sort.js';
import MovieController from './movie.js';

const renderFilms = (filmListElement, films, onDataChange, onViewChange) => {
  return films.map((film) => {
    const movieController = new MovieController(filmListElement, onDataChange, onViewChange);
    movieController.render(film);
    return movieController;
  });
};

export default class PageController {
  constructor(container) {
    this._container = container;

    this._films = [];
    this._showedMovieControllers = [];
    this._showingFilmsCount = SHOWING_TASKS_COUNT_ON_START;
    this._noFilmsListComponent = new NoFilmsList();
    this._filmsListComponent = new FilmsList();
    this._sortComponent = new Sort();
    this._filmsListContainerComponent = new FilmsListContainer();
    this._filmsTopRatedComponent = new FilmsListContainer();
    this._filmsMostCommentedComponent = new FilmsListContainer();
    this._showMoreButtonComponent = new ButtonShowMore();
    this._topRatedFilmsListComponent = new TopRatedFilmsListComponent();
    this._mostCommentedFilmsListComponent = new MostCommentedFilmsListComponent();

    this._onDataChange = this._onDataChange.bind(this);
    this._onViewChange = this._onViewChange.bind(this);
    this._onSortTypeChange = this._onSortTypeChange.bind(this);
    this._sortComponent.setSortTypeChangeHandler(this._onSortTypeChange);
  }

  render(films, topRatedFilms, mostCommentedFilms) {
    this._films = films;
    this._topRatedFilms = topRatedFilms;
    this._mostCommentedFilms = mostCommentedFilms;

    if (COUNT_FILMS === 0) {
      render(this._container, this._noFilmsListComponent, RenderPosition.BEFOREEND);
      return;
    }

    render(this._container, this._sortComponent, RenderPosition.BEFOREBEGIN);
    render(this._container, this._filmsListComponent, RenderPosition.BEFOREEND);

    render(this._filmsListComponent.getElement(), this._filmsListContainerComponent, RenderPosition.BEFOREEND);

    const filmListElement = this._filmsListContainerComponent.getElement();

    const newFilms = renderFilms(filmListElement, this._films.slice(0, this._showingFilmsCount), this._onDataChange, this._onViewChange);
    this._showedMovieControllers = this._showedMovieControllers.concat(newFilms);
    this._renderShowMoreButton();

    render(this._container, this._topRatedFilmsListComponent, RenderPosition.BEFOREEND);
    render(this._container, this._mostCommentedFilmsListComponent, RenderPosition.BEFOREEND);
    render(this._topRatedFilmsListComponent.getElement(), this._filmsTopRatedComponent, RenderPosition.BEFOREEND);
    render(this._mostCommentedFilmsListComponent.getElement(), this._filmsMostCommentedComponent, RenderPosition.BEFOREEND);

    const topRatedFilmsElement = this._filmsTopRatedComponent.getElement();
    renderFilms(topRatedFilmsElement, this._topRatedFilms.slice(0, COUNT_TOP_RATED), this._onDataChange, this._onViewChange);

    const mostCommentedFilmsElement = this._filmsMostCommentedComponent.getElement();
    renderFilms(mostCommentedFilmsElement, this._mostCommentedFilms.slice(0, COUNT_MOST_COMMENTED), this._onDataChange, this._onViewChange);
  }

  _onDataChange(movieController, oldData, newData) {
    const index = this._films.findIndex((it) => it === oldData);

    if (index === -1) {
      return;
    }

    this._films = [].concat(this._films.slice(0, index), newData, this._films.slice(index + 1));

    movieController.render(this._films[index]);
  }

  _onViewChange() {
    this._showedMovieControllers.forEach((it) => it.setDefaultView());
  }

  _renderShowMoreButton() {
    if (this._showingFilmsCount >= this._films.length) {
      return;
    }

    render(this._filmsListComponent.getElement(), this._showMoreButtonComponent, RenderPosition.BEFOREEND);

    this._showMoreButtonComponent.setClickHandler(() => {
      const prevTasksCount = this._showingFilmsCount;

      const filmListElement = this._filmsListContainerComponent.getElement();

      this._showingFilmsCount = this._showingFilmsCount + SHOWING_TASKS_COUNT_BY_BUTTON;

      const newFilms = renderFilms(filmListElement, this._films.slice(prevTasksCount, this._showingFilmsCount), this._onDataChange, this._onViewChange);
      this._showedMovieControllers = this._showedMovieControllers.concat(newFilms);

      if (this._showingFilmsCount >= this._films.length) {
        remove(this._showMoreButtonComponent);
      }
    });
  }

  _onSortTypeChange(sortType) {
    let sortedFilms = [];

    switch (sortType) {
      case SortType.DATE_DOWN:
        sortedFilms = this._films.slice().sort((a, b) => b.date - a.date);
        break;
      case SortType.RATING_DOWN:
        sortedFilms = this._films.slice().sort((a, b) => b.rating - a.rating);
        break;
      case SortType.DEFAULT:
        sortedFilms = this._films.slice(0, this._showingFilmsCount);
        break;
    }
    const filmListElement = this._filmsListContainerComponent.getElement();
    filmListElement.innerHTML = ``;

    this._showedMovieControllers = renderFilms(filmListElement, sortedFilms, this._onDataChange, this._onViewChange);

    if (sortType === SortType.DEFAULT) {
      this._renderShowMoreButton();
    } else {
      remove(this._showMoreButtonComponent);
    }
  }
}
