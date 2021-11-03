import {checkEnding, selectNecessaryElements} from './util.js';
import {ACCOMMODATIONTYPES} from './constant.js';

// const mapCanvasElement = document.querySelector('#map-canvas');
// mapCanvasElement.style.display = 'flex';

const cardTemplateElement = document.querySelector('#card').content.querySelector('.popup');

const renderCard = (advertisement) => {
  const cardElement = cardTemplateElement.cloneNode(true);

  cardElement.querySelector('.popup__title').textContent = advertisement.offer.title;
  cardElement.querySelector('.popup__text--address').textContent = advertisement.offer.address;
  cardElement.querySelector('.popup__description').textContent = advertisement.offer.description;
  cardElement.querySelector('.popup__avatar').src = advertisement.author.avatar;
  cardElement.querySelector('.popup__type').textContent = ACCOMMODATIONTYPES[(advertisement.offer.type).toUpperCase()];
  const roomsQuantity = `${advertisement.offer.rooms} ${checkEnding(advertisement.offer.rooms, ['комната', 'комнаты', 'комнат'])}`;
  const guestsuantity = `${advertisement.offer.guests} ${checkEnding(advertisement.offer.guests, ['гостя', 'гостей', 'гостей'])}`;
  cardElement.querySelector('.popup__text--capacity').textContent = advertisement.offer.rooms !== 100 ? `${roomsQuantity} для ${guestsuantity}` : 'не для гостей';

  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${advertisement.offer.checkin}:00, выезд до ${advertisement.offer.checkout}:00`;

  const featuresListAllElement = cardElement.querySelectorAll('.popup__feature');
  const advertisementFeatures = advertisement.offer.features;
  if (advertisementFeatures) {
    selectNecessaryElements(featuresListAllElement, advertisementFeatures, 'popup__feature--');
  } else {
    featuresListAllElement.textContent = '';
  }

  const onePhotoElement = cardElement.querySelector('.popup__photo');
  const photosList = advertisement.offer.photos;

  if (photosList) {
    const photoBlockElement = document.createDocumentFragment();

    for (const photo of photosList) {
      onePhotoElement.src = photo;
      photoBlockElement.append(onePhotoElement.cloneNode(true));
    }
    cardElement.querySelector('.popup__photos').append(photoBlockElement);
  } else {
    cardElement.querySelector('.popup__photos').textContent = '';
  }

  cardElement.querySelector('.popup__text--price').textContent = '';
  cardElement.querySelector('.popup__text--price').insertAdjacentHTML('beforebegin', `${advertisement.offer.price} <span>₽/ночь</span>`);

  return cardElement;
};

export {renderCard};
