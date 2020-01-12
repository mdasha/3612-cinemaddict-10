import {getRandomArrayItem} from '../utils/common.js';
import {textComment, emotions, authorComment} from '../const.js';
import {getRandomDate} from '../utils/common.js';

const generateComment = () => {
  const date = getRandomDate();
  return {
    textComment: getRandomArrayItem(textComment),
    emotions: getRandomArrayItem(emotions),
    authorComment: getRandomArrayItem(authorComment),
    dateComment: date
  };
};

const generateComments = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateComment);
};

export {generateComment, generateComments};
