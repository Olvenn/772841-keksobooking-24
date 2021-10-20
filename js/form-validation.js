const NAME_LENGTH = {
  Min: 30,
  Max: 100,
};

const advertisementInputTitleElement = document.querySelector('.ad-form__title');

advertisementInputTitleElement.addEventListener('input', () => {
  const valueLength = advertisementInputTitleElement.value.length;

  if (valueLength < NAME_LENGTH.Min) {
    advertisementInputTitleElement.setCustomValidity(`Ещё ${NAME_LENGTH.Min - valueLength} симв.`);
  } else if (valueLength > NAME_LENGTH.Max) {
    advertisementInputTitleElement.setCustomValidity(`Удалите лишние ${valueLength - NAME_LENGTH.Max} симв. Max - ${NAME_LENGTH.Max}`);
  } else {
    advertisementInputTitleElement.setCustomValidity('');
  }

  advertisementInputTitleElement.reportValidity();
});

const advertisementInputPriceElement = document.querySelector('.ad-form__price');

const PRICE_VALUE = {
  Min: 0,
  Max: 1000000,
};

advertisementInputPriceElement.addEventListener('input', () => {

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
});

const advertisementInputAddressElement = document.querySelector('.ad-form input[name="address"]');

advertisementInputAddressElement.addEventListener('keydown', (evt) => {
  evt.preventDefault();
});
advertisementInputAddressElement.addEventListener('focus', () => {
  const address = advertisementInputAddressElement.value;
  if (address === '') {
    advertisementInputAddressElement.setCustomValidity('Выберите точку на карте, где находится ваше жилье.');
  } else {
    advertisementInputAddressElement.setCustomValidity('');
  }
  advertisementInputAddressElement.reportValidity();
});

const ROOM_GUESTS = {
  1: [1],
  100: [0],
  2: [1, 2],
  3: [1, 2, 3],
};

const advertisementSelectRoomElement = document.querySelector('#room_number');
const advertisementSelectGuestsElement = document.querySelector('#capacity');
const advertisementOptionGuestsElements = document.querySelector('#capacity').options;

for (let i = 1; i < advertisementSelectRoomElement.length; i++) {
  advertisementOptionGuestsElements[i].disabled = true;
}

const setRoomGuestCorrelation = (selectedElement, relationArray, relationOptionsElement, changeElement) => {
  const selectedElementValue = selectedElement.value;
  const roomValues = relationArray[selectedElementValue];
  const valueSelected = roomValues.includes(+(changeElement.value));

  for (let i = 0; i < relationOptionsElement.length; i++) {

    relationOptionsElement[i].disabled = false;

    if(!roomValues.includes(+(relationOptionsElement[i].value))) {
      relationOptionsElement[i].disabled = true;
    } else {
      if(!valueSelected) {
        relationOptionsElement[i].selected = true;
      }
    }
  }

  if (roomValues.length !== 1) {
    advertisementSelectGuestsElement.setCustomValidity('Выберите количество гостей.');
  } else {
    advertisementSelectGuestsElement.setCustomValidity('');
  }
  advertisementSelectGuestsElement.reportValidity();
};

advertisementSelectRoomElement.addEventListener('change', () => {
  setRoomGuestCorrelation(advertisementSelectRoomElement, ROOM_GUESTS , advertisementOptionGuestsElements, advertisementSelectGuestsElement);
});

const TYPE_PRICE = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const typeSelectElement = document.querySelector('#type');

typeSelectElement.addEventListener('change', () => {
  const typeValue = document.querySelector('#type').value;
  const pricePlaceholder = TYPE_PRICE[typeValue];
  const priceElement = document.querySelector('#price');
  priceElement.placeholder = pricePlaceholder;
  priceElement.min = pricePlaceholder;
});

const timeinElement = document.querySelector('#timein');
const timoutElement = document.querySelector('#timeout');

timeinElement.addEventListener('change', () => {
  timoutElement.selectedIndex = timeinElement.selectedIndex;
});

timoutElement.addEventListener('change', () => {
  timeinElement.selectedIndex = timoutElement.selectedIndex;
});
