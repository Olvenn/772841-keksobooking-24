import {renderCardsList} from './card.js';
import './map.js';
import './filter.js';
import {getData, sendData} from './api.js';
import './form.js';


getData((offers) => {
  renderCardsList(offers.slice(0, 10));
});
