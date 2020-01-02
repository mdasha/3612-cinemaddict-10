import {COUNT_FILMS} from '../const.js';
import {createElement} from '../utils.js';

const createFooterStatistics = () => {
  return (
    `<p>${COUNT_FILMS} movies</p>`
  );
};

export default class FooterStatistics {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createFooterStatistics();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
