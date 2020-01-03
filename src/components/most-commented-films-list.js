import {createElement} from '../utils.js';

const createMostCommentedFilmsListTemplate = () => {
  return (
    `<section class="films-list--extra">
        <h2 class="films-list__title">Most commented</h2>

        <div class="films-list__container"></div>
      </section>`
  );
};

export default class MostCommentedFilmsList {
  constructor() {
    this._elemnent = null;
  }

  getTemplate() {
    return createMostCommentedFilmsListTemplate();
  }

  getElement() {
    if (!this._elemnent) {
      this._elemnent = createElement(this.getTemplate());
    }
    return this._elemnent;
  }

  removeElement() {
    this._elemnent = null;
  }
}
