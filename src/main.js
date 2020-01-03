import {
  COUNT_FILMS,
  COUNT_MOST_COMMENTED,
  COUNT_TOP_RATED,
  SHOWING_TASKS_COUNT_BY_BUTTON,
  SHOWING_TASKS_COUNT_ON_START
} from './const.js';
import SiteMenuComponent from './components/menu.js';
import ProfileNameComponent from './components/profile-name.js';
import FooterStatisticsComponent from './components/footer-statistics.js';
import SortComponent from './components/sort.js';
import FilmsListComponent from './components/films-list.js';
import FilmCardComponent from './components/film-card.js';
import FilmDetailsComponent from './components/film-details.js';
import ShowMoreButtonComponent from './components/button-show-more.js';
import MostCommentedFilmsListComponent from "./components/most-commented-films-list";
import TopRatedFilmsListComponent from './components/top-rated-films-list.js';
import NoFilmsListComponent from './components/no-films-list.js';
import {generateMenu} from './mock/menu.js';
import {compareCommentsQuantity, compareRatings, generateFilms} from './mock/film.js';
import {render, RenderPosition} from './utils.js';

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = document.querySelector(`.header`);

const renderFilm = (filmListElement, film) => {
  const filmCardComponent = new FilmCardComponent(film);
  const filmDetailsComponent = new FilmDetailsComponent(film);
  const footerElement = document.querySelector(`.footer`);
  const filmCardTitle = filmCardComponent.getElement().querySelector(`.film-card__title`);
  const filmCardPoster = filmCardComponent.getElement().querySelector(`.film-card__poster`);
  const filmCardComments = filmCardComponent.getElement().querySelector(`.film-card__comments`);

  const removeFilmDetailsCard = () => {
    filmDetailsComponent.getElement().remove();
    filmDetailsComponent.removeElement();
  };

  const onEscKeyDown = (evt) => {
    const isEscKey = evt.key === `Escape` || evt.key === `Esc`;

    if (isEscKey) {
      removeFilmDetailsCard();
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };

  const renderDetailedFilm = (container) => {
    container.addEventListener(`click`, () => {
      const closeFilmCard = filmDetailsComponent.getElement().querySelector(`.film-details__close-btn`);

      render(footerElement, filmDetailsComponent.getElement(), RenderPosition.BEFOREEND);
      document.addEventListener(`keydown`, onEscKeyDown);
      closeFilmCard.addEventListener(`click`, () => {
        removeFilmDetailsCard();
      });
    });
  };

  renderDetailedFilm(filmCardTitle);
  renderDetailedFilm(filmCardPoster);
  renderDetailedFilm(filmCardComments);

  render(filmListElement, filmCardComponent.getElement(), RenderPosition.BEFOREEND);
};

const menu = generateMenu();

render(siteMainElement, new SiteMenuComponent(menu).getElement(), RenderPosition.BEFOREEND);

render(siteMainElement, new SortComponent().getElement(), RenderPosition.BEFOREEND);
render(siteHeaderElement, new ProfileNameComponent().getElement(), RenderPosition.BEFOREEND);

if (COUNT_FILMS === 0) {
  const noFilmsListComponent = new NoFilmsListComponent();

  render(siteMainElement, noFilmsListComponent.getElement(), RenderPosition.BEFOREEND);
} else {
  const filmsListComponent = new FilmsListComponent();

  render(siteMainElement, filmsListComponent.getElement(), RenderPosition.BEFOREEND);

  const filmsListContainerElement = document.querySelector(`.films-list__container`);
  const filmsElement = document.querySelector(`.films`);

  render(filmsElement, new TopRatedFilmsListComponent().getElement(), RenderPosition.BEFOREEND);
  render(filmsElement, new MostCommentedFilmsListComponent().getElement(), RenderPosition.BEFOREEND);

  const filmsListExtraElements = document.querySelectorAll(`.films-list--extra .films-list__container`);
  const filmsList = document.querySelector(`.films-list`);

  const films = generateFilms(COUNT_FILMS);
  const topRated = films.slice().sort(compareRatings);
  const mostCommented = films.slice().sort(compareCommentsQuantity);

  let showingTasksCount = SHOWING_TASKS_COUNT_ON_START;

  films.slice(0, showingTasksCount).forEach((film) => {
    renderFilm(filmsListContainerElement, film);
  });

  const showMoreButtonComponent = new ShowMoreButtonComponent();
  render(filmsList, showMoreButtonComponent.getElement(), RenderPosition.BEFOREEND);

  const showMoreButtonElement = filmsList.querySelector(`.films-list__show-more`);

  topRated.slice(0, COUNT_TOP_RATED).forEach((task) => {
    renderFilm(filmsListExtraElements[0], task);
  });

  mostCommented.slice(0, COUNT_MOST_COMMENTED).forEach((task) => {
    renderFilm(filmsListExtraElements[1], task);
  });

  showMoreButtonElement.addEventListener(`click`, () => {
    const prevTasksCount = showingTasksCount;

    showingTasksCount = showingTasksCount + SHOWING_TASKS_COUNT_BY_BUTTON;

    films.slice(prevTasksCount, showingTasksCount)
      .forEach((film) => {
        renderFilm(filmsListContainerElement, film);
      });

    if (showingTasksCount >= films.length) {
      showMoreButtonComponent.getElement().remove();
      showMoreButtonComponent.removeElement();
    }
  });
}
const footerStatistics = document.querySelector(`.footer__statistics`);
render(footerStatistics, new FooterStatisticsComponent().getElement(), RenderPosition.BEFOREEND);
