import AbstractComponent from './abstract-component.js';

const createFilmDetailsInnerContainerTemplate = () => {
  return (
    `<form class="film-details__inner" action="" method="get"></form>`
  );
};

export default class FilmDetailsInnerContainer extends AbstractComponent {
  getTemplate() {
    return createFilmDetailsInnerContainerTemplate();
  }
}
