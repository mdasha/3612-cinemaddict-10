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
  constructor(container, filmsModel, topRatedFilmsModel, mostCommentedFilmsModel) {
    this._container = container;
    this._filmsModel = filmsModel;
    this._topRatedFilmsModel = topRatedFilmsModel;
    this._mostCommentedFilmsModel = mostCommentedFilmsModel;

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
    this._onFilterChange = this._onFilterChange.bind(this);
    this._onLoadShowMoreButtonClick = this._onLoadShowMoreButtonClick.bind(this);

    this._sortComponent.setSortTypeChangeHandler(this._onSortTypeChange);
    this._filmsModel.setFilterChangeHandler(this._onFilterChange);
  }

  render() {
    const films = this._filmsModel.getFilms();
    const topRatedFilms = this._topRatedFilmsModel.getFilms();
    const mostCommentedFilms = this._mostCommentedFilmsModel.getFilms();

    if (COUNT_FILMS === 0) {
      render(this._container, this._noFilmsListComponent, RenderPosition.BEFOREEND);
      return;
    }

    render(this._container, this._sortComponent, RenderPosition.BEFOREBEGIN);
    render(this._container, this._filmsListComponent, RenderPosition.BEFOREEND);

    render(this._filmsListComponent.getElement(), this._filmsListContainerComponent, RenderPosition.BEFOREEND);
    const filmListElement = this._filmsListContainerComponent.getElement();

    this._renderFilms(filmListElement, films.slice(0, this._showingFilmsCount));
    this._renderShowMoreButton();

    render(this._container, this._topRatedFilmsListComponent, RenderPosition.BEFOREEND);
    render(this._container, this._mostCommentedFilmsListComponent, RenderPosition.BEFOREEND);
    render(this._topRatedFilmsListComponent.getElement(), this._filmsTopRatedComponent, RenderPosition.BEFOREEND);
    render(this._mostCommentedFilmsListComponent.getElement(), this._filmsMostCommentedComponent, RenderPosition.BEFOREEND);

    const topRatedFilmsElement = this._filmsTopRatedComponent.getElement();
    renderFilms(topRatedFilmsElement, topRatedFilms.slice(0, COUNT_TOP_RATED));

    const mostCommentedFilmsElement = this._filmsMostCommentedComponent.getElement();
    renderFilms(mostCommentedFilmsElement, mostCommentedFilms.slice(0, COUNT_MOST_COMMENTED));
  }

  _removeFilms() {
    const filmListElement = this._filmsListContainerComponent.getElement();
    filmListElement.innerHTML = ``;
    this._showedMovieControllers = [];
  }

  _renderFilms(filmListElement, films) {
    const newFilms = renderFilms(filmListElement, films, this._onDataChange, this._onViewChange);
    this._showedMovieControllers = this._showedMovieControllers.concat(newFilms);
    this._showingFilmsCount = this._showedMovieControllers.length;
  }

  _onDataChange(movieController, oldData, newData) {
    const isSuccess = this._filmsModel.updateFilm(oldData.id, newData);

    if (isSuccess) {
      movieController.render(newData);
    }
  }

  _onViewChange() {
    this._showedMovieControllers.forEach((it) => it.setDefaultView());
  }

  _renderShowMoreButton() {
    remove(this._showMoreButtonComponent);

    if (this._showingFilmsCount >= this._filmsModel.getFilms().length) {
      return;
    }

    render(this._filmsListComponent.getElement(), this._showMoreButtonComponent, RenderPosition.BEFOREEND);
    this._showMoreButtonComponent.setClickHandler(this._onLoadShowMoreButtonClick);
  }

  _onSortTypeChange(sortType) {
    let sortedFilms = [];
    const filmListElement = this._filmsListContainerComponent.getElement();

    const films = this._filmsModel.getFilms();

    switch (sortType) {
      case SortType.DATE_DOWN:
        sortedFilms = films.slice().sort((a, b) => b.date - a.date);
        break;
      case SortType.RATING_DOWN:
        sortedFilms = films.slice().sort((a, b) => b.rating - a.rating);
        break;
      case SortType.DEFAULT:
        sortedFilms = films.slice(0, this._showingFilmsCount);
        break;
    }

    this._removeFilms();
    this._renderFilms(filmListElement, sortedFilms);

    if (sortType === SortType.DEFAULT) {
      this._renderShowMoreButton();
    } else {
      remove(this._showMoreButtonComponent);
    }
  }

  _onLoadShowMoreButtonClick() {
    const prevTasksCount = this._showingFilmsCount;
    const filmListElement = this._filmsListContainerComponent.getElement();
    const films = this._filmsModel.getFilms();

    this._showingFilmsCount = this._showingFilmsCount + SHOWING_TASKS_COUNT_BY_BUTTON;

    this._renderFilms(filmListElement, films.slice(prevTasksCount, this._showingFilmsCount));

    if (this._showingFilmsCount >= films.length) {
      remove(this._showMoreButtonComponent);
    }
  }

  _onFilterChange() {
    const filmListElement = this._filmsListContainerComponent.getElement();
    this._removeFilms();
    this._renderFilms(filmListElement, this._filmsModel.getFilms().slice(0, SHOWING_TASKS_COUNT_ON_START));
    this._renderShowMoreButton();
  }
}
