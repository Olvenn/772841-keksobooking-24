import {getRandomPositiveInteger, getRandomPositiveFloat, getNonrepeatingArrayFromArrayRandomLength, createUniqueIdGenerator, addZeroToBegin} from './util.js';

const MIN_LONGITUDE = 35.65000;
const MAX_LONGITUDE = 35.70000;
const MIN_LATITUDE = 139.70000;
const MAX_LATITUDE = 139.80000;


const TYPE_ACCOMMODATIONS = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

const MIN_PRICE = 0;
const MAX_PRICE = 1000000;

const MIN_ROOM = 94;
const MAX_ROOM = 100;

const MIN_GUEST = 1;
const MAX_GUEST = 100;

const CHECK_TIMES = ['12:00', '13:00', '14:00'];

const FEATURES =  ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

const OFFERSLENGTH = 5;

const generatePhotoAvatarId = createUniqueIdGenerator();

const createOffer = () => {
  const longitude = () => getRandomPositiveFloat(MIN_LONGITUDE, MAX_LONGITUDE, 5);
  const latitude = () => getRandomPositiveFloat(MIN_LATITUDE, MAX_LATITUDE, 5);

  const spotLocation = {
    lat: longitude(),
    lng: latitude(),
  };

  const offerArray = {
    author: {
      avatar: `img/avatars/user${addZeroToBegin(generatePhotoAvatarId())}.png`,
    },
    offer: {
      title: 'Заголовок предложения',
      address: `${spotLocation.lat}, ${spotLocation.lng}`,
      price: Math.floor(getRandomPositiveInteger(MIN_PRICE, MAX_PRICE)),
      accommodationType: TYPE_ACCOMMODATIONS[Math.round(getRandomPositiveInteger(0, TYPE_ACCOMMODATIONS.length - 1))],
      rooms: Math.floor(getRandomPositiveInteger(MIN_ROOM, MAX_ROOM)),
      guests: Math.floor(getRandomPositiveInteger(MIN_GUEST, MAX_GUEST)),
      checkin: CHECK_TIMES[Math.floor(getRandomPositiveInteger(0, CHECK_TIMES.length - 1))],
      checkout: CHECK_TIMES[Math.floor(getRandomPositiveInteger(0, CHECK_TIMES.length - 1))],
      features: getNonrepeatingArrayFromArrayRandomLength(FEATURES),
      description: 'Апартаменты-студио Inn Nishi Shinjuku с видом на город и бесплатным Wi-Fi расположены в Токио, в 400 м от храма Шогонджи и в 500 м от информационно-технологического центра.',
      photos: getNonrepeatingArrayFromArrayRandomLength(PHOTOS),
    },
    spotLocation: {
      lat: spotLocation.lat,
      lng: spotLocation.lng,
    },
  };
  return offerArray;
};

const createOffersArray = () => Array.from({length: OFFERSLENGTH}, createOffer);

export {createOffersArray};
