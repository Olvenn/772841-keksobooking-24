import './form-validation.js';
import {addClass, removeClass} from './util.js';

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

export {makeFormsDisabled, makeFormsActive};


