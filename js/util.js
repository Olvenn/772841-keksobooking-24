import {COORDINATES} from './constant.js';

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

const formClear = () => {
  const formElement = document.querySelector('.ad-form');
  formElement.reset();
  document.querySelector('#address').value = `lat: ${COORDINATES.Latitude} lng: ${COORDINATES.Longitude}`;
  document.querySelector('#price').setAttribute('placeholder', '1000');
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
  const messageOpenElement = document.querySelector('.success');
  messageOpenElement.remove();

  formClear();

  const formElement = document.querySelector('.ad-form');
  [...formElement.querySelectorAll('.shadow')].forEach((element) => element.classList.remove('shadow'));

  document.removeEventListener('keydown', escSuccessKeydownHandler);
  document.removeEventListener('click', documentSuccessClickHandler);
}

const openSuccessMessage = () => {
  const bodyElement = document.querySelector('body');

  const messageTemplate = document.querySelector('#success').content.querySelector('.success');
  const messageElement = messageTemplate.cloneNode(true);

  bodyElement.insertAdjacentElement('beforeend', messageElement);
  document.addEventListener('keydown', escSuccessKeydownHandler);
  document.addEventListener('click', documentSuccessClickHandler);
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
  const messageOpenElement = document.querySelector('.error');
  messageOpenElement.remove();

  document.removeEventListener('keydown', escErrorKeydownHandler);
  document.removeEventListener('click', documentErrorClickHandler);
}

const showAlert = () => {
  const bodyElement = document.querySelector('body');
  const messageTemplate = document.querySelector('#error').content.querySelector('.error');
  const messageElement = messageTemplate.cloneNode(true);


  bodyElement.insertAdjacentElement('beforeend', messageElement);
  document.addEventListener('keydown', escErrorKeydownHandler);
  document.addEventListener('click', documentErrorClickHandler);
};

const showAlertNotGetData = (message) => {
  const mapElement = document.querySelector('.map__message');
  mapElement.style.display = 'block';
  mapElement.textContent = message;
  setTimeout(() => {
    mapElement.style.display = 'none';
  }, 3000);
};

export {checkEnding, openSuccessMessage, showAlert, selectNecessaryElements, addClass, removeClass, showAlertNotGetData, formClear};
