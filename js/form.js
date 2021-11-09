import './form-validation.js';
import {addClass, removeClass, openSuccessMessage, showAlert} from './util.js';
import {sendData} from './api.js';
import {formElement, mapFiltersFormElement} from './constant.js';

const formAdvertisementFieldsetsElement = document.querySelectorAll('.ad-form fieldset');
const dataFilter = document.querySelectorAll('[data-filter]');

const makeFormsDisabled = () => {
  addClass(formElement, 'ad-form--disabled');
  addClass(mapFiltersFormElement, 'ad-form--disabled');

  formAdvertisementFieldsetsElement.forEach((oneFieldset) => {
    oneFieldset.setAttribute('disabled', true);
  });
  dataFilter.forEach((oneElement) => {
    oneElement.setAttribute('disabled', true);
  });
};

const makeFormsActive = () => {
  removeClass(formElement, 'ad-form--disabled');
  removeClass(mapFiltersFormElement, 'ad-form--disabled');

  formAdvertisementFieldsetsElement.forEach((oneFieldset) => {
    oneFieldset.removeAttribute('disabled');
  });
  dataFilter.forEach((oneElement) => {
    oneElement.removeAttribute('disabled');
  });
};

const setFormInvalidShadow = () => {
  formElement.addEventListener('invalid', (evt) => {
    evt.target.classList.add ('shadow');
  }, true);
};

const setUserFormSubmit = (onSuccess, onErrors) => {
  setFormInvalidShadow();
  formElement.addEventListener('submit', (evt) => {
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
