import {customerRanks} from "../const.js";
import {getRandomIntegerNumber} from "../utils/common.js";
import AbstractComponent from './abstract-component.js';

const getCustomerRank = (customerRating) => {
  if (customerRating >= customerRanks[3].rating) {
    return customerRanks[3].rank;
  } else if (customerRating >= customerRanks[2].rating) {
    return customerRanks[2].rank;
  } else if (customerRating >= customerRanks[1].rating) {
    return customerRanks[1].rank;
  } else {
    return customerRanks[0].rank;
  }
};

const createProfileName = () => {
  const customerRating = getRandomIntegerNumber(1, 100);
  const customerRank = getCustomerRank(customerRating);
  return (
    `<section class="header__profile profile">
      <p class="profile__rating">${customerRank}</p>
      <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
    </section>`
  );
};

export default class ProfileName extends AbstractComponent {
  getTemplate() {
    return createProfileName();
  }
}
