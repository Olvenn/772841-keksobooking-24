import {createOffersArray} from './data.js';
import {renderCardsList} from './card.js';
import {makeFormsDisabled, makeFormsActive} from './form.js';

const mapLoad = false;

makeFormsDisabled();
if (document.readyState === 'DOMContentLoaded' || !mapLoad) {
  makeFormsActive();
}

const allAdvertisements = createOffersArray();
renderCardsList(allAdvertisements);

