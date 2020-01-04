import AbstractComponent from './abstract-component.js';

const createMostCommentedFilmsListTemplate = () => {
  return (
    `<section class="films-list--extra">
        <h2 class="films-list__title">Most commented</h2>
      </section>`
  );
};

export default class MostCommentedFilmsList extends AbstractComponent {
  getTemplate() {
    return createMostCommentedFilmsListTemplate();
  }
}
