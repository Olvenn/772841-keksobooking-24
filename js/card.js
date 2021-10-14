import {createOffersArray} from './data.js';

const mapCanvas = document.querySelector('#map-canvas');
mapCanvas.style.display = 'flex';

const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

const allAdvertisements = createOffersArray();

allAdvertisements.forEach(()  => {
  const cardElement = cardTemplate.cloneNode(true);
  document.querySelector
  mapCanvas.appendChild(cardElement);
});

const createCard = () => {

};

export {createCard};
