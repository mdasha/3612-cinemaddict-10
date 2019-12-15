import {createProfileName} from './components/profile-name.js';
import {createMenuTemplate} from './components/menu.js';
import {createFilter} from './components/filter.js';
import {createFilmsListTemplate} from './components/films-list.js';
import {createFilmCard} from './components/film-card.js';
import {createButtonShowMore} from './components/button-show-more.js';
import {generateMenu} from './mock/menu.js';
import {generateFilms, compareRatings, compareCommentsQuantity} from './mock/film.js';
import {createFooterStatistics} from './components/footer-statistics.js';
import {createFilmDetailsTemplate} from './components/film-details.js';

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = document.querySelector(`.header`);

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const renderDetailedFilm = (container, task) => {
  container[container.length - 1].addEventListener(`click`, () => {
    render(footerElement, createFilmDetailsTemplate(task), `afterend`);
  });
};

const renderDetailedFilms = (container, task) => {
  const filmCardTitle = container.querySelectorAll(`.film-card__title`);
  const filmCardPoster = container.querySelectorAll(`.film-card__poster`);
  const filmCardComments = container.querySelectorAll(`.film-card__comments`);

  renderDetailedFilm(filmCardTitle, task);
  renderDetailedFilm(filmCardPoster, task);
  renderDetailedFilm(filmCardComments, task);
};

const menu = generateMenu();
render(siteMainElement, createMenuTemplate(menu), `beforeend`);

render(siteMainElement, createFilter(), `beforeend`);
render(siteHeaderElement, createProfileName(), `beforeend`);
render(siteMainElement, createFilmsListTemplate(), `beforeend`);

const filmsListContainerElement = document.querySelector(`.films-list__container`);
const filmsListExtraElements = document.querySelectorAll(`.films-list--extra .films-list__container`);
const filmListContainer = document.querySelector(`.films-list__container`);
const filmsListExtra = document.querySelectorAll(`.films-list--extra .films-list__container`);
const filmsList = document.querySelector(`.films-list`);

const tasks = generateFilms(COUNT_FILMS);
const topRated = tasks.slice().sort(compareRatings);
const mostCommented = tasks.slice().sort(compareCommentsQuantity);
const footerElement = document.querySelector(`.footer`);

let showingTasksCount = SHOWING_TASKS_COUNT_ON_START;

tasks.slice(0, showingTasksCount).forEach((task) => {
  render(filmListContainer, createFilmCard(task), `beforeend`);
  renderDetailedFilms(filmListContainer, task);
});

render(filmsList, createButtonShowMore(), `beforeend`);

const showMoreButtonElement = filmsList.querySelector(`.films-list__show-more`);

topRated.slice(0, COUNT_TOP_RATED).forEach((task) => {
  render(filmsListExtra[0], createFilmCard(task), `beforeend`);
  renderDetailedFilms(filmsListExtra[0], task);
});

mostCommented.slice(0, COUNT_MOST_COMMENTED).forEach((task) => {
  render(filmsListExtra[1], createFilmCard(task), `beforeend`);
  renderDetailedFilms(filmsListExtra[1], task);
});

new Array(COUNT_FILMS)
  .fill(``)
  .forEach(
      () => render(filmsListContainerElement, createFilmCard(), `beforeend`)
  );
showMoreButtonElement.addEventListener(`click`, () => {
  const prevTasksCount = showingTasksCount;

render(filmsListContainerElement, createButtonShowMore(), `beforeend`);
  showingTasksCount = showingTasksCount + SHOWING_TASKS_COUNT_BY_BUTTON;

new Array(COUNT_TOP_RATED)
  .fill(``)
  .forEach(
      () => render(filmsListExtraElements[0], createTopRatedFilm(), `beforeend`)
  );
  tasks.slice(prevTasksCount, showingTasksCount)
    .forEach((task) => {
      render(filmListContainer, createFilmCard(task), `beforeend`);
      renderDetailedFilms(filmListContainer, task);
    });

new Array(COUNT_MOST_COMMENTED)
  .fill(``)
  .forEach(
      () => render(filmsListExtraElements[1], createMostCommentedFilm(), `beforeend`)
  );
  if (showingTasksCount >= tasks.length) {
    showMoreButtonElement.remove();
  }
});

const footerStatistics = document.querySelector(`.footer__statistics`);
render(footerStatistics, createFooterStatistics(), `beforeend`);
