import {COUNT_FILMS} from './const.js';
import SiteMenuComponent from './components/menu.js';
import ProfileNameComponent from './components/profile-name.js';
import FooterStatisticsComponent from './components/footer-statistics.js';
import SortComponent from './components/sort.js';
import FilmsBoard from './components/films-board.js';
import PageController from './controllers/page-controller.js';
import {generateMenu} from './mock/menu.js';
import {compareCommentsQuantity, compareRatings, generateFilms} from './mock/film.js';
import {render, RenderPosition} from './utils/render.js';

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = document.querySelector(`.header`);

const menu = generateMenu();

render(siteMainElement, new SiteMenuComponent(menu), RenderPosition.BEFOREEND);
render(siteMainElement, new SortComponent(), RenderPosition.BEFOREEND);
render(siteHeaderElement, new ProfileNameComponent(), RenderPosition.BEFOREEND);

const filmsBoard = new FilmsBoard();
render(siteMainElement, filmsBoard, RenderPosition.BEFOREEND);

const films = generateFilms(COUNT_FILMS);
const topRated = films.slice().sort(compareRatings);
const mostCommented = films.slice().sort(compareCommentsQuantity);

const pageController = new PageController(filmsBoard);
pageController.render(films, topRated, mostCommented);

const footerStatistics = document.querySelector(`.footer__statistics`);
render(footerStatistics, new FooterStatisticsComponent(), RenderPosition.BEFOREEND);
