import {getRandomPositiveInteger, getRandomPositiveFloat, getNonrepeatingArrayFromArrayRandomLength, createUniqueIdGenerator, addZeroToBegin} from './util.js';
import {MIN_LONGITUDE, MAX_LONGITUDE, MIN_LATITUDE, MAX_LATITUDE, TYPE_ACCOMMODATIONS, MIN_PRICE, MAX_PRICE, MIN_ROOM, MAX_ROOM, MIN_GUEST, MAX_GUEST, CHECK_TIMES, FEATURES, PHOTOS, OFFERSLENGTH} from './constant.js';


const generatePhotoAvatarId = createUniqueIdGenerator();

const createOffer = () => {
  const longitude = () => getRandomPositiveFloat(MIN_LONGITUDE, MAX_LONGITUDE, 5);
  const latitude = () => getRandomPositiveFloat(MIN_LATITUDE, MAX_LATITUDE, 5);

  const spotLocation = {
    lng: longitude(),
    lat: latitude(),
  };

  return {
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
      lat: +spotLocation.lat,
      lng: +spotLocation.lng,
    },
  };
};


const createOffersArray = () => Array.from({length: OFFERSLENGTH}, createOffer);

export {createOffersArray};
