import {text} from '../const.js';

const sentences = text.split(`.`);

const getRandomIntegerNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

export {sentences, getRandomIntegerNumber};
