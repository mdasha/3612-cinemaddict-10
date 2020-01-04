import {COUNT_FILMS} from '../const.js';
import AbstractComponent from './abstract-component.js';

const createFooterStatistics = () => {
  return (
    `<p>${COUNT_FILMS} movies</p>`
  );
};

export default class FooterStatistics extends AbstractComponent {
  getTemplate() {
    return createFooterStatistics();
  }
}
