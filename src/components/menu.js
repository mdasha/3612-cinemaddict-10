import {createElement} from '../utils.js';

const createMenuMarkup = (menuItem, isActive) => {
  const {name, count} = menuItem;

  return (
    `<a href="#${name}" class="main-navigation__item   ${isActive ? `main-navigation__item--active` : ``}" >
        ${name}
        <span class="main-navigation__item-count">${count}</span>
    </a>`
  );
};

const createMenuTemplate = (menuItems) => {
  const menuMarkup = menuItems.map((it, i) => createMenuMarkup(it, i === 0)).join(`\n`);

  return (
    `<nav class="main-navigation">
        ${menuMarkup}
        <a href="#stats" class="main-navigation__item main-navigation__item--additional">Stats</a>
    </nav>`
  );
};

export default class SiteMenu {
  constructor(items) {
    this._element = null;
    this._items = items;
  }

  getTemplate() {
    return createMenuTemplate(this._items);
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
