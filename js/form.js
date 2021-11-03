import './form-validation.js';
import {addClass, removeClass, openSuccessMessage, showAlert} from './util.js';
import {sendData} from './api.js';
import {COORDINATES} from './constant.js';

const formAdvertisementElement = document.querySelector('.ad-form');
const filterAdvertisementElement = document.querySelector('.map__filters');
const formAdvertisemenFieldsetsElement = document.querySelectorAll('.ad-form fieldset');
const dataFilter = document.querySelectorAll('[data-filter]');


const makeFormsDisabled = () => {
  addClass(formAdvertisementElement, 'ad-form--disabled');
  addClass(filterAdvertisementElement, 'ad-form--disabled');

  formAdvertisemenFieldsetsElement.forEach((oneFieldset) => {
    oneFieldset.setAttribute('disabled', true);
  });
  dataFilter.forEach((oneElement) => {
    oneElement.setAttribute('disabled', true);
  });
};

const makeFormsActive = () => {
  removeClass(formAdvertisementElement, 'ad-form--disabled');
  removeClass(filterAdvertisementElement, 'ad-form--disabled');

  formAdvertisemenFieldsetsElement.forEach((oneFieldset) => {
    oneFieldset.removeAttribute('disabled');
  });
  dataFilter.forEach((oneElement) => {
    oneElement.removeAttribute('disabled');
  });
};

const resetBtnElement = document.querySelector('.ad-form__reset');

const clearAdvertisementForm = () => {
  document.querySelector('.ad-form').reset();
  document.querySelector('.map__filters').reset();
  document.querySelector('#address').value = `lat: ${COORDINATES.Latitude} lng: ${COORDINATES.Longitude}`;
  document.querySelector('#price').setAttribute('placeholder', '1000');
};

resetBtnElement.addEventListener('click', clearAdvertisementForm);

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

setUserFormSubmit(openSuccessMessage, showAlert);

export {makeFormsDisabled, makeFormsActive, setUserFormSubmit};
