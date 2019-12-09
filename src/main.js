import {createProfileName} from './components/profile-name.js';
import {createMenuTemplate} from './components/menu.js';
import {createFilter} from './components/filter.js';
import {createFilmsListTemplate} from './components/films-list.js';
import {createFilmCard} from './components/film-card.js';
import {createButtonShowMore} from './components/button-show-more.js';
import {createTopRatedFilm} from './components/film-top-rated.js';
import {createMostCommentedFilm} from './components/film-most-commented.js';

const COUNT_FILMS = 5;
const COUNT_TOP_RATED = 2;
const COUNT_MOST_COMMENTED = 2;

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = document.querySelector(`.header`);

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

render(siteMainElement, createMenuTemplate(), `beforeend`);
render(siteMainElement, createFilter(), `beforeend`);
render(siteHeaderElement, createProfileName(), `beforeend`);
render(siteMainElement, createFilmsListTemplate(), `beforeend`);

const filmsListContainerElement = document.querySelector(`.films-list__container`);
const filmsListExtraElements = document.querySelectorAll(`.films-list--extra .films-list__container`);

new Array(COUNT_FILMS)
  .fill(``)
  .forEach(
      () => render(filmsListContainerElement, createFilmCard(), `beforeend`)
  );

render(filmsListContainerElement, createButtonShowMore(), `beforeend`);

new Array(COUNT_TOP_RATED)
  .fill(``)
  .forEach(
      () => render(filmsListExtraElements[0], createTopRatedFilm(), `beforeend`)
  );

new Array(COUNT_MOST_COMMENTED)
  .fill(``)
  .forEach(
      () => render(filmsListExtraElements[1], createMostCommentedFilm(), `beforeend`)
  );
