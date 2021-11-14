import {NAME_LENGTH, PRICE_VALUE, ROOM_GUESTS, TYPE_PRICE, GUEST_ROOMS} from './constant.js';

const advertisementInputTitleElement = document.querySelector('.ad-form__title');
const advertisementInputPriceElement = document.querySelector('.ad-form__price');
const addressElement = document.querySelector('.ad-form input[name="address"]');
const advertisementGuestsElements = document.querySelector('#capacity');
const advertisementOptionGuestsElements = advertisementGuestsElements.options;
const advertisementRoomsElements = document.querySelector('#room_number');
const advertisementOptionRoomsElements = advertisementRoomsElements.options;
const timeinElement = document.querySelector('#timein');
const timoutElement = document.querySelector('#timeout');
const advertisementTitleInputHandler = () => {
  const valueLength = advertisementInputTitleElement.value.length;

  if (valueLength < NAME_LENGTH.Min) {
    advertisementInputTitleElement.setCustomValidity(`Ещё ${NAME_LENGTH.Min - valueLength} симв.`);
  } else if (valueLength > NAME_LENGTH.Max) {
    advertisementInputTitleElement.setCustomValidity(`Удалите лишние ${valueLength - NAME_LENGTH.Max} симв. Max - ${NAME_LENGTH.Max}`);
  } else {
    advertisementInputTitleElement.setCustomValidity('');
  }

  advertisementInputTitleElement.reportValidity();
};

advertisementInputTitleElement.addEventListener('input', () => {
  advertisementTitleInputHandler();
});

const advertisementPriceInputHandler = () => {
  const valuePrice = advertisementInputPriceElement.value;
  const placeholderPrice = advertisementInputPriceElement.placeholder;

  if (valuePrice === '') {
    advertisementInputPriceElement.setCustomValidity('Введите цену за жилье. Только числа.');
  } else if (+valuePrice < +placeholderPrice) {
    advertisementInputPriceElement.setCustomValidity(`Минимальное цена ${placeholderPrice} руб.`);
  } else if (+valuePrice > PRICE_VALUE.Max) {
    advertisementInputPriceElement.setCustomValidity(`Максимальная цена ${PRICE_VALUE.Max} руб.`);
  } else {
    advertisementInputPriceElement.setCustomValidity('');
  }

  advertisementInputPriceElement.reportValidity();
};

advertisementInputPriceElement.addEventListener('input', () => {
  advertisementPriceInputHandler();
});

addressElement.addEventListener('keydown', (evt) => {
  evt.preventDefault();
});

const advertisementAddressFocusHandler = () => {
  const address = addressElement.value;
  if (address === '') {
    addressElement.setCustomValidity('Выберите точку на карте, где находится ваше жилье.');
  } else {
    addressElement.setCustomValidity('');
  }
  addressElement.reportValidity();
};

addressElement.addEventListener('focus', () => {
  advertisementAddressFocusHandler();
});

const setGuestRoomCorrelation = (selectedElement, relationArray, relationElement, relationOptionsElement) => {

  const selectedElementValue = selectedElement.value;

  const roomValues = relationArray[selectedElementValue];

  for (const relationOption of relationOptionsElement) {
    if(!roomValues.includes((relationOption.value))) {
      relationOption.setAttribute('disabled', true);
    } else {
      relationOption.removeAttribute('disabled');
    }
  }
  const valueSelected = roomValues.includes((relationElement.value));

  const selectCorrelationItem = relationArray[selectedElementValue][0];

  if(!valueSelected) {
    document.querySelector(`#${relationElement.id}`).value = selectCorrelationItem;
  }

};

advertisementGuestsElements.addEventListener('change', () => {

  setGuestRoomCorrelation(advertisementGuestsElements, GUEST_ROOMS, advertisementRoomsElements, advertisementOptionRoomsElements);
  for (const roomOptions of advertisementGuestsElements.options) {
    roomOptions.removeAttribute('disabled');
  }

});

advertisementRoomsElements.addEventListener('change', () => {

  setGuestRoomCorrelation(advertisementRoomsElements, ROOM_GUESTS, advertisementGuestsElements, advertisementOptionGuestsElements);
  for (const roomOptions of advertisementRoomsElements.options) {
    roomOptions.removeAttribute('disabled');
  }
});

const typeSelectElement = document.querySelector('#type');

const typeSelectChangeHandler = () => {
  const typeValue = document.querySelector('#type').value;
  const pricePlaceholder = TYPE_PRICE[typeValue];
  advertisementInputPriceElement.setAttribute('placeholder', pricePlaceholder);
  advertisementInputPriceElement.setAttribute('min', pricePlaceholder);
};

typeSelectElement.addEventListener('change', () => {
  typeSelectChangeHandler();
});

timeinElement.addEventListener('change', () => {
  timoutElement.selectedIndex = timeinElement.selectedIndex;
});

timoutElement.addEventListener('change', () => {
  timeinElement.selectedIndex = timoutElement.selectedIndex;
});

export {advertisementOptionGuestsElements, advertisementOptionRoomsElements};
