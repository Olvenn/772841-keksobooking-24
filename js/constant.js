const ACCOMMODATIONTYPES = {
  FLAT: 'Квартира',
  BUNGALOW: 'Бунгало',
  HOUSE: 'Дом',
  PALACE: 'Дворец',
  HOTEL: 'Отель',
};

const ZOOM = 12;

const MIN_LATITUDE = 35.65000;
const MAX_LATITUDE = 35.70000;
const MIN_LONGITUDE = 139.70000;
const MAX_LONGITUDE = 139.80000;

const TYPE_ACCOMMODATIONS = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

const MIN_PRICE = 0;
const MAX_PRICE = 100;

const MIN_ROOM = 94;
const MAX_ROOM = 100;

const MIN_GUEST = 1;
const MAX_GUEST = 100;

const CHECK_TIMES = ['12:00', '13:00', '14:00'];

const FEATURES =  ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

const OFFERSLENGTH = 5;

const NAME_LENGTH = {
  Min: 30,
  Max: 100,
};

const PRICE_VALUE = {
  Min: 0,
  Max: 1000000,
};

const ROOM_GUESTS = {
  '1': ['1'],
  '100': ['0'],
  '2': ['1', '2'],
  '3': ['1', '2', '3'],
};

const TYPE_PRICE = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

export {ACCOMMODATIONTYPES, ZOOM, MIN_LONGITUDE, MAX_LONGITUDE, MIN_LATITUDE, MAX_LATITUDE, TYPE_ACCOMMODATIONS, MIN_PRICE, MAX_PRICE, MIN_ROOM, MAX_ROOM, MIN_GUEST, MAX_GUEST, CHECK_TIMES, FEATURES, PHOTOS, OFFERSLENGTH, NAME_LENGTH, PRICE_VALUE, ROOM_GUESTS, TYPE_PRICE};
