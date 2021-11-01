import {NAME_LENGTH, PRICE_VALUE, ROOM_GUESTS, TYPE_PRICE} from './constant.js';

const advertisementInputTitleElement = document.querySelector('.ad-form__title');

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

const advertisementInputPriceElement = document.querySelector('.ad-form__price');

const advertisementPriceInputHandler = () => {
  const valuePrice = advertisementInputPriceElement.value;

  if (valuePrice === '') {
    advertisementInputPriceElement.setCustomValidity('Можно вводить только целые числа');
  } else if (valuePrice < PRICE_VALUE.Min) {
    advertisementInputPriceElement.setCustomValidity(`Минимальное цена ${PRICE_VALUE.Min} руб.`);
  } else if (valuePrice > PRICE_VALUE.Max) {
    advertisementInputPriceElement.setCustomValidity(`Минимальное цена ${PRICE_VALUE.Max} руб.`);
  } else {
    advertisementInputPriceElement.setCustomValidity('');
  }

  advertisementInputPriceElement.reportValidity();
};

advertisementInputPriceElement.addEventListener('input', () => {
  advertisementPriceInputHandler();
});

const advertisementInputAddressElement = document.querySelector('.ad-form input[name="address"]');

advertisementInputAddressElement.addEventListener('keydown', (evt) => {
  evt.preventDefault();
});

const advertisementAddressFocusHandler = () => {
  const address = advertisementInputAddressElement.value;
  if (address === '') {
    advertisementInputAddressElement.setCustomValidity('Выберите точку на карте, где находится ваше жилье.');
  } else {
    advertisementInputAddressElement.setCustomValidity('');
  }
  advertisementInputAddressElement.reportValidity();
};

advertisementInputAddressElement.addEventListener('focus', () => {
  advertisementAddressFocusHandler();
});

const advertisementSelectRoomElement = document.querySelector('#room_number');
const advertisementSelectGuestsElement = document.querySelector('#capacity');
const advertisementOptionGuestsElements = document.querySelector('#capacity').options;

const setRoomGuestCorrelation = (selectedElement, relationArray, relationOptionsElement, changeElement) => {
  for (const guestsNumber of relationOptionsElement) {
    guestsNumber.setAttribute('disabled', true);
  }
  const selectedElementValue = selectedElement.value;
  const roomValues = relationArray[selectedElementValue];
  const valueSelected = roomValues.includes((changeElement.value));

  for (const relationOption of relationOptionsElement) {
    relationOption.removeAttribute('disabled');
    if(!roomValues.includes((relationOption.value))) {
      relationOption.setAttribute('disabled', true);
    } else {
      if(!valueSelected) {
        relationOption.selected = true;

      }
    }
  }
};

advertisementSelectRoomElement.addEventListener('change', () => {
  setRoomGuestCorrelation(advertisementSelectRoomElement, ROOM_GUESTS , advertisementOptionGuestsElements, advertisementSelectGuestsElement);
});

const typeSelectElement = document.querySelector('#type');

const typeSelectChangeHandler = () => {
  const typeValue = document.querySelector('#type').value;
  const pricePlaceholder = TYPE_PRICE[typeValue];
  const priceElement = document.querySelector('#price');
  priceElement.setAttribute('placeholder', pricePlaceholder);
  priceElement.setAttribute('min', pricePlaceholder);
};

typeSelectElement.addEventListener('change', () => {
  typeSelectChangeHandler();
});

const timeinElement = document.querySelector('#timein');
const timoutElement = document.querySelector('#timeout');

timeinElement.addEventListener('change', () => {
  timoutElement.selectedIndex = timeinElement.selectedIndex;
});

timoutElement.addEventListener('change', () => {
  timeinElement.selectedIndex = timoutElement.selectedIndex;
});
