import AbstractComponent from './abstract-component.js';

const createFilmDetailsTemplate = () => {
  return (
    `<section class="film-details"></section>`
  );
};

export default class FilmDetails extends AbstractComponent {
  getTemplate() {
    return createFilmDetailsTemplate();
  }
}
