import AbstractComponent from './abstract-component.js';

const createFilmsListTemplate = () => {
  return (
    `<section class="films"></section>`
  );
};

export default class FilmsBoard extends AbstractComponent {
  getTemplate() {
    return createFilmsListTemplate();
  }
}
