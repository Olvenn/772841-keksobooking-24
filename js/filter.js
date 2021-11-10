import {PRICE_FILTER} from './constant.js';
const mapFiltersElement = document.querySelectorAll('.map__filter');

const getSelectionParameters = () => {
  const filterParameters = [];
  [...mapFiltersElement].forEach((el) => {
    filterParameters.push(el.value);
  });
  return filterParameters;
};

const getCheckedCheckBoxes = () => {
  const selectedCheckBoxesElement = document.querySelectorAll('.map__filters input[type=checkbox]:checked');
  const checkedValues = Array.from(selectedCheckBoxesElement).map((cb) => cb.value);
  return checkedValues;
};

const compareTwoArrays = (array1 = [], array2) =>{
  const array1Sorted = array1.sort();
  const array2Sorted = array2.sort();

  if (array1Sorted.length === array2Sorted.length) {
    const allArray = array1Sorted.concat(array2Sorted);
    const uniqueArray = Array.from(new Set(allArray));

    return uniqueArray.length === array1Sorted.length;
  }
};

const compareOffers = (offerA, offerB) => {
  const offerLengthA = offerA.offer.features ? offerA.offer.features.length : 0;
  const offerLengthB = offerB.offer.features ? offerB.offer.features.length : 0;
  return offerLengthA - offerLengthB;
};

const createOffersFiltered = (arrayNotFiltered) => {

  const valueParameters = getSelectionParameters();
  const checkedParameters = getCheckedCheckBoxes();

  const filteredData = arrayNotFiltered.filter((element) => {

    let price = 'any';
    if (+element.offer.price < PRICE_FILTER.Min) {
      price = 'low';
    } else if (+element.offer.price >= PRICE_FILTER.Min && +element.offer.price <= PRICE_FILTER.Max) {
      price = 'middle';
    } else if (+element.offer.price > PRICE_FILTER.Max) {
      price = 'high';
    }

    return (element.offer.rooms === +valueParameters[2] || valueParameters[2] === 'any')
    && (element.offer.guests === +valueParameters[3] || valueParameters[3] === 'any')
    && (element.offer.type === valueParameters[0] || valueParameters[0] === 'any')
    && (price === valueParameters[1] || valueParameters[1] === 'any')
    && (compareTwoArrays(element.offer.features, checkedParameters) || checkedParameters.length === 0);
  });

  return filteredData.slice().sort(compareOffers);
};

export {createOffersFiltered};
