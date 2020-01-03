import {createElement} from '../utils.js';

const createTopRatedFilmsListTemplate = () => {
  return (
    `<section class="films-list--extra">
        <h2 class="films-list__title">Top rated</h2>

        <div class="films-list__container"></div>
      </section>`
  );
};

export default class TopRatedFilmsList {
  constructor() {
    this._elemnent = null;
  }

  getTemplate() {
    return createTopRatedFilmsListTemplate();
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
