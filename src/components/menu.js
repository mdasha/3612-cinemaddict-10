import AbstractComponent from './abstract-component.js';

const FILTER_ID_PREFIX = `filter__`;

const getFilterNameById = (id) => {
  return id.substring(FILTER_ID_PREFIX.length).replace(`_`, ` `);
};

const createMenuMarkup = (menuItem, isActive) => {
  const {name, count} = menuItem;
  const nameWthBlanks = name.replace(` `, `_`);

  return (
    `<a href="#${name}" id="filter__${nameWthBlanks}" class="main-navigation__item   ${isActive ? `main-navigation__item--active` : ``}" >
        ${name}
        <span class="main-navigation__item-count">${count}</span>
    </a>`
  );
};

const createMenuTemplate = (menuItems) => {
  const menuMarkup = menuItems.map((it) => createMenuMarkup(it, it.checked)).join(`\n`);

  return (
    `<nav class="main-navigation">
        ${menuMarkup}
        <a href="#stats" class="main-navigation__item main-navigation__item--additional">Stats</a>
    </nav>`
  );
};

export default class SiteMenu extends AbstractComponent {
  constructor(items) {
    super();

    this._items = items;
  }

  getTemplate() {
    return createMenuTemplate(this._items);
  }

  setFilterChangeHandler(handler) {
    this.getElement().addEventListener(`click`, (evt) => {
      const filterName = getFilterNameById(evt.target.id);
      handler(filterName);
    });
  }
}
