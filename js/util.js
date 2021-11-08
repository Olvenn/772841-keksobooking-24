import {COORDINATES, TIMEALERT, bodyElement, formElement} from './constant.js';
const mapElement = document.querySelector('.map__message');

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

const addClass = (element, nameOfClass) => {
  element.classList.add(nameOfClass);
};

const removeClass = (element, nameOfClass) => {
  element.classList.remove(nameOfClass);
};

const isEscapeKey = (evt) => evt.key === 'Escape';

const setDefaultCoordinates = () => document.querySelector('#address').value = `${COORDINATES.Latitude}, ${COORDINATES.Longitude}`;


const formClear = () => {
  formElement.reset();
  setDefaultCoordinates();
  document.querySelector('#price').setAttribute('placeholder', '1000');
  [...formElement.querySelectorAll('.shadow')].forEach((element) => element.classList.remove('shadow'));

};

const escSuccessKeydownHandler = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

const documentSuccessClickHandler = () => {
  closeUserModal();
};

function closeUserModal () {
  const messageSuccessOpenElement = document.querySelector('.success');
  messageSuccessOpenElement.remove();
  formClear();
  document.removeEventListener('keydown', escSuccessKeydownHandler);
  document.removeEventListener('click', documentSuccessClickHandler);
}

const openMessage = (className, keydownHandler, clickHandler) => {
  const messageTemplate = document.querySelector(`#${className}`).content.querySelector(`.${className}`);
  const messageElement = messageTemplate.cloneNode(true);

  bodyElement.insertAdjacentElement('beforeend', messageElement);
  document.addEventListener('keydown', keydownHandler);
  document.addEventListener('click', clickHandler);
};

const openSuccessMessage = () => {
  openMessage('success', escSuccessKeydownHandler, documentSuccessClickHandler);
};

const escErrorKeydownHandler = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeErrorModal();
  }
};

const documentErrorClickHandler = () => {
  closeErrorModal();
};

function closeErrorModal () {
  const messageErrorOpenElement = document.querySelector('.error');
  messageErrorOpenElement.remove();

  document.removeEventListener('keydown', escErrorKeydownHandler);
  document.removeEventListener('click', documentErrorClickHandler);
}

const showAlert = () => {
  openMessage('error', escErrorKeydownHandler, documentErrorClickHandler);
};

const showAlertNotGetData = (message) => {
  mapElement.style.display = 'block';
  mapElement.textContent = message;
  setTimeout(() => {
    mapElement.style.display = 'none';
  }, TIMEALERT);
};

export {checkEnding, openSuccessMessage, showAlert, selectNecessaryElements, addClass, removeClass, showAlertNotGetData, formClear, setDefaultCoordinates};
