import {createElement} from '../utils.js';

const createFilmsListTemplate = () => {
  return (
    `<section class="films">
      <section class="films-list">
        <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
        <div class="films-list__container">

        </div>
      </section>
    </section>`
  );
};

export default class FilmsList {
  constructor() {
    this._elemnent = null;
  }

  getTemplate() {
    return createFilmsListTemplate();
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
