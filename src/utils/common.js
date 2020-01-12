import {text} from '../const.js';
import moment from 'moment';

const sentences = text.split(`.`);

const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntegerNumber(0, array.length);
  return array[randomIndex];
};

const getRandomIntegerNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const getRandomDate = () => {
  const targetDate = new Date();
  const diffValue = getRandomIntegerNumber(0, 25);
  targetDate.setDate(targetDate.getDate() - diffValue);
  return targetDate;
};

const formatYear = (date) => {
  return moment(date).format(`YYYY`);
};

const formatDating = (date) => {
  return moment(date).format(`DD MMMM YYYY`);
};

const formatDuration = (hours, minutes) => {
  return moment().hours(hours).minutes(minutes).format(`H[h] m[m]`);
};

export {sentences, getRandomIntegerNumber, formatDating, formatYear, formatDuration, getRandomArrayItem, getRandomDate};
