import AbstractComponent from './abstract-component.js';

const createTopRatedFilmsListTemplate = () => {
  return (
    `<section class="films-list--extra">
        <h2 class="films-list__title">Top rated</h2>
      </section>`
  );
};

export default class TopRatedFilmsList extends AbstractComponent {
  getTemplate() {
    return createTopRatedFilmsListTemplate();
  }
}
