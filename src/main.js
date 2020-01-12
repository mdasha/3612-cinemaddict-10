import {COUNT_FILMS} from './const.js';
import FilterController from './controllers/filter.js';
import ProfileNameComponent from './components/profile-name.js';
import FooterStatisticsComponent from './components/footer-statistics.js';
import FilmsBoard from './components/films-board.js';
import PageController from './controllers/page-controller.js';
import MoviesModel from './models/movies.js';
import {compareCommentsQuantity, compareRatings, generateFilms} from './mock/film.js';
import {render, RenderPosition} from './utils/render.js';

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = document.querySelector(`.header`);

render(siteHeaderElement, new ProfileNameComponent(), RenderPosition.BEFOREEND);

const filmsBoard = new FilmsBoard();
render(siteMainElement, filmsBoard, RenderPosition.BEFOREEND);

const films = generateFilms(COUNT_FILMS);
const filmsModel = new MoviesModel();
filmsModel.setFilms(films);

const filterController = new FilterController(siteMainElement, filmsModel);
filterController.render();

const topRatedFilms = films.slice().sort(compareRatings);
const mostCommentedFilms = films.slice().sort(compareCommentsQuantity);

const topRatedModel = new MoviesModel();
topRatedModel.setFilms(topRatedFilms);

const mostCommentedModel = new MoviesModel();
mostCommentedModel.setFilms(mostCommentedFilms);

const pageController = new PageController(filmsBoard.getElement(), filmsModel, topRatedModel, mostCommentedModel);
pageController.render();

const footerStatistics = document.querySelector(`.footer__statistics`);
render(footerStatistics, new FooterStatisticsComponent(), RenderPosition.BEFOREEND);
