import {createProfileName} from './components/profile-name.js';
import {createMenuTemplate} from './components/menu.js';
import {createFilter} from './components/filter.js';
import {createFilmTemplate} from './components/films.js';
import {createFilmCard} from './components/film-card.js';
import {createButtonShowMore} from './components/button-show-more.js';
import {createTopRatedFilm} from './components/film-top-rated.js';
import {createMostCommentedFilm} from './components/film-most-commented.js';
import {generateMenu} from "./mock/menu.js";

const COUNT_FILMS = 5;
const COUNT_TOP_RATED = 2;
const COUNT_MOST_COMMENTED = 2;

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = document.querySelector(`.header`);

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const menu = generateMenu();
render(siteMainElement, createMenuTemplate(menu), `beforeend`);

render(siteMainElement, createFilter(), `beforeend`);
render(siteHeaderElement, createProfileName(), `beforeend`);
render(siteMainElement, createFilmTemplate(), `beforeend`);

const filmListContainer = document.querySelector(`.films-list__container`);
const filmsListExtra = document.querySelectorAll(`.films-list--extra .films-list__container`);

new Array(COUNT_FILMS)
  .fill(``)
  .forEach(
    () => render(filmListContainer, createFilmCard(), `beforeend`)
  );

render(filmListContainer, createButtonShowMore(), `beforeend`);

new Array(COUNT_TOP_RATED)
  .fill(``)
  .forEach(
    () => render(filmsListExtra[0], createTopRatedFilm(), `beforeend`)
  );

new Array(COUNT_MOST_COMMENTED)
  .fill(``)
  .forEach(
    () => render(filmsListExtra[1], createMostCommentedFilm(), `beforeend`)
  );
