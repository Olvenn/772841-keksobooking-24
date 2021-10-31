import './form-validation.js';
import {addClass, removeClass, openMessage, showAlert} from './util.js';
import {sendData} from './api.js';

const formAdvertisementElement = document.querySelector('.ad-form');
const filterAdvertisementElement = document.querySelector('.map__filters');
const formAdvertisemenFieldsetsElement = document.querySelectorAll('.ad-form fieldset');

const makeFormsDisabled = () => {
  addClass(formAdvertisementElement, 'ad-form--disabled');
  addClass(filterAdvertisementElement, 'ad-form--disabled');

  formAdvertisemenFieldsetsElement.forEach((oneFieldset) => {
    oneFieldset.disabled = true;
  });
};

const makeFormsActive = () => {
  removeClass(formAdvertisementElement, 'ad-form--disabled');
  removeClass(filterAdvertisementElement, 'ad-form--disabled');

  formAdvertisemenFieldsetsElement.forEach((oneFieldset) => {
    oneFieldset.disabled = false;
  });
};

const resetBtn = document.querySelector('.ad-form__reset');

const clearAdvertisementForm = () => {
  document.querySelector('.ad-form').reset();
  document.querySelector('#price').setAttribute('placeholder', '1000');
};

resetBtn.addEventListener('click', clearAdvertisementForm);

const setUserFormSubmit = (onSuccess, onErrors) => {
  formAdvertisementElement.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      () => onSuccess(),
      () => onErrors(),
      new FormData(evt.target),
    );
  });
};

setUserFormSubmit(openMessage, showAlert);

export {makeFormsDisabled, makeFormsActive, setUserFormSubmit};

