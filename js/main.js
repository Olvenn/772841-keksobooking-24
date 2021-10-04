const getRendomNumberFormRange = (minNumber, maxNumber, includLastNumber = 1) => (Math.random() * (maxNumber - minNumber + includLastNumber)) + minNumber;

const MIN_LONGITUDE = 35.65000;
const MAX_LONGITUDE = 35.70000;
const MIN_LATITUDE = 139.70000;
const MAX_LATITUDE = 139.80000;

const longitude = () => getRendomNumberFormRange(MIN_LONGITUDE, MAX_LONGITUDE, 0.00001).toFixed(5);
const latitude = () => getRendomNumberFormRange(MIN_LATITUDE, MAX_LATITUDE, 0.00001).toFixed(5);

const spotLocation = {
  lat: longitude(),
  lng: latitude(),
};

const TYPE_ACCOMMODATIONS = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

const MIN_PRICE = 0;
const MAX_PRICE = 1000000;

const MIN_ROOM = 1;
const MAX_ROOM = 25;

const MIN_GUEST = 1;
const MAX_GUEST = 100;

const CHECK_TIMES = ['12:00', '13:00', '14:00'];

const FEATURES =  ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const featuresLength = Math.floor(getRendomNumberFormRange(1, FEATURES.length - 1));

const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

const photosLength = Math.floor(getRendomNumberFormRange(1, PHOTOS.length - 1));

const findRendomElementInArray = (sourceArray) => {
  const indexSourceArray = Math.floor(getRendomNumberFormRange(0, sourceArray.length - 1));
  return sourceArray[indexSourceArray];
};

let newArrayElement = '';

function checkElementInArray(checkedArray, sourceArray) {
  newArrayElement = findRendomElementInArray(sourceArray);
  if (checkedArray.includes(newArrayElement)) {
    checkElementInArray(checkedArray, sourceArray);
  }
  return newArrayElement;
}

const getNonrepeatingArrayFromArrayRandomLength = (arrayWidhData, newArryLength) => {
  const newArray = [];
  for (let index = 0; index < newArryLength; index++) {
    const newElement = checkElementInArray(newArray, arrayWidhData);
    newArray.push(newElement);
  }
  return newArray;
};

const OFFERSLENGTH = 10;

let authorNumbersArray = Array.from({ length: OFFERSLENGTH }, (key, index) => index + 1);

authorNumbersArray = authorNumbersArray.map((element) => element < 10 ? (0 + String(+ element)) : String(element));

const createAvatar = () => {
  const avatar = `img/avatars/user${authorNumbersArray[0]}/.png`;
  authorNumbersArray.shift();
  return avatar;
};

const createOffer = () => {
  const offerArray = {
    author: {
      avatar: createAvatar(),
    },
    offer: { title: 'Заголовок предложения',
      address: `${spotLocation.lat}, ${spotLocation.lng}`,
      price: Math.floor(getRendomNumberFormRange(MIN_PRICE, MAX_PRICE)),
      accommodationType: TYPE_ACCOMMODATIONS[Math.round(getRendomNumberFormRange(0, TYPE_ACCOMMODATIONS.length - 1))],
      rooms: Math.floor(getRendomNumberFormRange(MIN_ROOM, MAX_ROOM)),
      guests: Math.floor(getRendomNumberFormRange(MIN_GUEST, MAX_GUEST)),
      checkin: CHECK_TIMES[Math.floor(getRendomNumberFormRange(0, CHECK_TIMES.length - 1))],
      checkout: CHECK_TIMES[Math.floor(getRendomNumberFormRange(0, CHECK_TIMES.length - 1))],
      features: getNonrepeatingArrayFromArrayRandomLength(FEATURES, featuresLength),
      description: 'Апартаменты-студио Inn Nishi Shinjuku с видом на город и бесплатным Wi-Fi расположены в Токио, в 400 м от храма Шогонджи и в 500 м от информационно-технологического центра.',
      photos: getNonrepeatingArrayFromArrayRandomLength(PHOTOS, photosLength),
    },
    spotLocation: {
      lat: longitude(),
      lng: latitude(),
    },
  };
  return offerArray;
};

const createOffersArray = () => Array.from({length: OFFERSLENGTH}, createOffer);
createOffersArray();
