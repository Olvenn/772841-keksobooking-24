const ACCOMMODATIONTYPES = {
  FLAT: 'Квартира',
  BUNGALOW: 'Бунгало',
  HOUSE: 'Дом',
  PALACE: 'Дворец',
  HOTEL: 'Отель',
};

const COORDINATES = {
  Latitude: 35.6895,
  Longitude: 139.692,
};

const ZOOM = 12;

const TIMEALERT = 3000;

const Url = {
  GET: 'https://24.javascript.pages.academy/keksobooking/data',
  POST: 'https://24.javascript.pages.academy/keksobooking',
};

const OFFERSHOWSLENGTH = 15;

const NAME_LENGTH = {
  Min: 30,
  Max: 100,
};

const PRICE_VALUE = {
  Min: 0,
  Max: 1000000,
};

const PRICE_FILTER = {
  Min: 10000,
  Max: 50000,
};

const ROOM_GUESTS = {
  '1': ['1'],
  '2': ['2', '1'],
  '3': ['1', '2', '3'],
  '100': ['0'],
};

const GUEST_ROOMS = {
  '3': ['3'],
  '2': ['2', '3'],
  '1': ['3', '2', '1'],
  '0': ['100'],
};

const TYPE_PRICE = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const TIMERENDERDELAY = 500;

const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const bodyElement = document.querySelector('body');

const formElement = document.querySelector('.ad-form');

const mapFiltersFormElement = document.querySelector('.map__filters');

const previewElement = document.querySelector('.ad-form__img-view');

export { ACCOMMODATIONTYPES, ZOOM, COORDINATES, NAME_LENGTH, PRICE_VALUE, ROOM_GUESTS, TYPE_PRICE, Url, PRICE_FILTER, OFFERSHOWSLENGTH, TIMEALERT, TIMERENDERDELAY, FILE_TYPES, bodyElement, formElement, mapFiltersFormElement, GUEST_ROOMS, previewElement };
