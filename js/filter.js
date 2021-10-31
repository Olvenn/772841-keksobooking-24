import {createOffersArray} from './data.js';


const mapFilters = document.querySelectorAll('.map__filter');

const getSelectionParameters = () => {
  const filterParameters = [];
  [...mapFilters].forEach((el) => {
    filterParameters.push(el.value);
  });
  return filterParameters;
};

function getCheckedCheckBoxes() {

  const selectedCheckBoxes = document.querySelectorAll('.map__filters input[type=checkbox]:checked');
  const checkedValues = Array.from(selectedCheckBoxes).map((cb) => cb.value);
  return checkedValues;
}

const compareTwoArrays = (array1 = [], array2) =>{
  const array1Sorted = array1.sort();
  const array2Sorted = array2.sort();

  if (array1Sorted.length === array2Sorted.length) {
    const allArray = array1Sorted.concat(array2Sorted);
    const uniqueArray = Array.from(new Set(allArray));

    if (uniqueArray.length === array1Sorted.length) {
      return true;
    }
  }
};

const createOffersFiltered = (arrayNotFiltered) => {

  const valueParameters = getSelectionParameters();
  const checkedParameters = getCheckedCheckBoxes();

  const filteredData = arrayNotFiltered.filter((element) => {

    let price = 'any';
    if (+element.offer.price < 10000) {
      price = 'low';
    } else if (+element.offer.price >= 10000 && +element.offer.price <= 50000) {
      price = 'middle';
    } else if (+element.offer.price > 50000) {
      price = 'high';
    }

    return (element.offer.rooms === +valueParameters[2] || valueParameters[2] === 'any')
    && (element.offer.guests === +valueParameters[3] || valueParameters[3] === 'any')
    && (element.offer.type === valueParameters[0] || valueParameters[0] === 'any')
    && (price === valueParameters[1] || valueParameters[1] === 'any')
    && (compareTwoArrays(element.offer.features, checkedParameters) || checkedParameters.length === 0);
  });

  return filteredData;
};

export {createOffersFiltered};

