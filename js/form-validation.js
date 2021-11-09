import {NAME_LENGTH, PRICE_VALUE, ROOM_GUESTS, TYPE_PRICE} from './constant.js';

const advertisementInputTitleElement = document.querySelector('.ad-form__title');
const advertisementInputPriceElement = document.querySelector('.ad-form__price');
const addressElement = document.querySelector('.ad-form input[name="address"]');
const advertisementSelectRoomElement = document.querySelector('#room_number');
const advertisementOptionGuestsElements = document.querySelector('#capacity').options;
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

const setRoomGuestCorrelation = (selectedElement, relationArray, relationOptionsElement) => {

  const selectedElementValue = selectedElement.value;
  const roomValues = relationArray[selectedElementValue];

  for (const relationOption of relationOptionsElement) {
    if(!roomValues.includes((relationOption.value))) {
      relationOption.setAttribute('disabled', true);
    } else {
      relationOption.removeAttribute('disabled');
    }
  }

  for (const roomOptions of relationOptionsElement) {
    roomOptions.removeAttribute('selected');
  }
  const selectCorrelationItem = ROOM_GUESTS[selectedElementValue][0];

  document.querySelector(`#capacity option[value="${selectCorrelationItem}"]`).setAttribute('selected', 'selected');
};

advertisementSelectRoomElement.addEventListener('change', () => {
  setRoomGuestCorrelation(advertisementSelectRoomElement, ROOM_GUESTS , advertisementOptionGuestsElements);
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
