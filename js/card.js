import {createOffersArray} from './data.js';

const mapCanvasElement = document.querySelector('#map-canvas');

const cardTemplateElement = document.querySelector('#card').content.querySelector('.popup');

const allAdvertisements = createOffersArray();

allAdvertisements.forEach(()  => {
  const cardElementElement = cardTemplateElement.cloneNode(true);

  mapCanvasElement.appendChild(cardElementElement);
});

const createCard = () => {

};

export {createCard};
