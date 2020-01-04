import AbstractComponent from './abstract-component.js';

const createFilmsListTemplate = () => {
  return (
    `<div class="films-list__container"></div>`
  );
};

export default class FilmsListContainer extends AbstractComponent {
  getTemplate() {
    return createFilmsListTemplate();
  }
}
