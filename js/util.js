import {COORDINATES, ZOOM} from './constant.js';
const getRandomPositiveInteger =  (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const getRandomPositiveFloat = (a, b, digits = 1) => {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
};

const createRandomIdFromRangeGenerator = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomPositiveInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomPositiveInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const getNonrepeatingArrayFromArrayRandomLength = (incomeArray) => {
  const outcomeArray = [];
  const generatePhotoId = createRandomIdFromRangeGenerator(0, incomeArray.length - 1);
  for (let i = 0; i <= getRandomPositiveInteger(1, incomeArray.length - 1); i++) {
    outcomeArray.push(incomeArray[generatePhotoId()]);
  }
  return outcomeArray;
};

const createUniqueIdGenerator  = () => {
  let lastGeneratedId = 0;
  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};


const addZeroToBegin = (singleDigits) => {
  const avatar = String(singleDigits).padStart(2,'0');
  return avatar;
};

const checkEnding = (number, words) => {
  number = Math.abs(number) % 100;
  const number1 = number % 10;
  if (number > 10 && number < 20) { return words[2]; }
  if (number1 > 1 && number1 < 5) { return words[1]; }
  if (number1 === 1) { return words[0]; }
  return words[2];
};

const selectNecessaryElements = ((allElements, necessaryElements, partOfClassName) => {
  allElements.forEach((element) => {
    const isNecessary = necessaryElements.some((necessaryElement) => element.classList.contains(`${partOfClassName}${necessaryElement}`));
    if (!isNecessary) {
      element.remove();
    }
  });
});

const addClass = (eltment, nameOfClass) => {
  eltment.classList.add(nameOfClass);
};

const removeClass = (eltment, nameOfClass) => {
  eltment.classList.remove(nameOfClass);
};

const isEscapeKey = (evt) => evt.key === 'Escape';

const onSuccessEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};
const onSuccessClick = () => {
  closeUserModal();
};


const formClear = () => {
  const formElement = document.querySelector('.ad-form');
  formElement.reset();
  document.querySelector('#address').value = `lat: ${COORDINATES.Latitude} lng: ${COORDINATES.Longitude}`;
  document.querySelector('#price').setAttribute('placeholder', '1000');
};

function closeUserModal () {
  const messageOpenElement = document.querySelector('.success');
  messageOpenElement.remove();
  formClear();

  document.removeEventListener('keydown', onSuccessEscKeydown);
  document.removeEventListener('click', onSuccessClick);
}

const openMessage = () => {
  const bodyElement = document.querySelector('body');

  const messageTemplate = document.querySelector('#success').content.querySelector('.success');
  const messageElement = messageTemplate.cloneNode(true);

  bodyElement.insertAdjacentElement('beforeend', messageElement);
  document.addEventListener('keydown', onSuccessEscKeydown);
  document.addEventListener('click', onSuccessClick);
};

const onErrorEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeErrorModal();
  }
};
const onErrorClick = () => {
  closeErrorModal();
};

function closeErrorModal () {
  const messageOpenElement = document.querySelector('.error');
  messageOpenElement.remove();

  document.removeEventListener('keydown', onErrorEscKeydown);
  document.removeEventListener('click', onErrorClick);
}

const showAlert = () => {
  const bodyElement = document.querySelector('body');
  const messageTemplate = document.querySelector('#error').content.querySelector('.error');
  const messageElement = messageTemplate.cloneNode(true);


  bodyElement.insertAdjacentElement('beforeend', messageElement);
  document.addEventListener('keydown', onErrorEscKeydown);
  document.addEventListener('click', onErrorClick);
};

export {getRandomPositiveInteger, getRandomPositiveFloat, createRandomIdFromRangeGenerator, getNonrepeatingArrayFromArrayRandomLength, createUniqueIdGenerator, addZeroToBegin};

export {checkEnding, openMessage, showAlert, selectNecessaryElements, addClass, removeClass};
