const MIN_LONGITUDE = 35.65000;
const MAX_LONGITUDE = 35.70000;
const MIN_LATITUDE = 139.70000;
const MAX_LATITUDE = 139.80000;

const TYPE_ACCOMMODATIONS = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

const MIN_PRICE = 0;
const MAX_PRICE = 1000000;

const MIN_ROOM = 1;
const MAX_ROOM = 25;

const MIN_GUEST = 1;
const MAX_GUEST = 100;

const CHECK_TIMES = ['12:00', '13:00', '14:00'];

const FEATURES =  ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

const OFFERSLENGTH = 10;

function getRandomPositiveInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function getRandomPositiveFloat (a, b, digits = 1) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
}


const getRendomNumberFormRange = (minNumber, maxNumber, includLastNumber = 1) => (Math.random() * (maxNumber - minNumber + includLastNumber)) + minNumber;

const longitude = () => getRandomPositiveFloat(MIN_LONGITUDE, MAX_LONGITUDE, 5);
const latitude = () => getRandomPositiveFloat(MIN_LATITUDE, MAX_LATITUDE, 5);

const spotLocation = {
  lat: longitude(),
  lng: latitude(),
};



// function getRandomElementFromArr (arrayIncome) {
//   const previousValues = [];
//   console.log(previousValues);


//   return function () {
//     let currentValue = getRandomPositiveInteger(0, arrayIncome.length - 1);
//     console.log(currentValue);
//     if (previousValues.length >= (arrayIncome.length - 1)) {
//       console.error('Перебраны все числа из диапазона');
//       return null;
//     }
//     while (previousValues.includes(arrayIncome[currentValue])) {
//       currentValue = arrayIncome[getRandomPositiveInteger(0, arrayIncome.length - 1)];
//     }

//     console.log(arrayIncome[currentValue]);

//     previousValues.push(arrayIncome[currentValue]);
//     return previousValues;
//   };
// }

// const createRandomArrFromArrOne = getRandomElementFromArr(FEATURES);


// console.log(createRandomArrFromArrOne());
// console.log(createRandomArrFromArrOne());
// console.log(createRandomArrFromArrOne());


const createRandomIdFromRangeGenerator = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomPositiveInteger(min, max);
    // if (previousValues.length >= (max - min + 1)) {
    if (previousValues.length >= (max - min + 1)) {
      return previousValues;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomPositiveInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

// const generatePhotoId = createRandomIdFromRangeGenerator(1, 3);

const getNonrepeatingArrayFromArrayRandomLength = (incomeArray) => {
  const
  const generatePhotoId = createRandomIdFromRangeGenerator(1, incomeArray.length - 1);
  incomeArray.

}

console.log(generatePhotoId());
console.log(generatePhotoId());
console.log(generatePhotoId());
console.log(generatePhotoId());


// const findRendomElementInArray = (sourceArray) => {
//   const indexSourceArray = Math.floor(getRendomNumberFormRange(0, sourceArray.length - 1));
//   return sourceArray[indexSourceArray];
// };

// let newArrayElement = '';

// function checkElementInArray(checkedArray, sourceArray) {
//   newArrayElement = findRendomElementInArray(sourceArray);
//   if (checkedArray.includes(newArrayElement)) {
//     checkElementInArray(checkedArray, sourceArray);
//   }
//   return newArrayElement;
// }

// const getNonrepeatingArrayFromArrayRandomLength = (arrayWidhData, newArryLength) => {
//   const newArray = [];
//   for (let index = 0; index < newArryLength; index++) {
//     const newElement = checkElementInArray(newArray, arrayWidhData);
//     newArray.push(newElement);
//   }
//   return newArray;
// };

const createUniqueIdGenerator  = () => {
  let lastGeneratedId = 0;
  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};
const generatePhotoAvatarId = createUniqueIdGenerator();

const addZeroToBegin = (singleDigits) => {
  const avatar = String(singleDigits).padStart(2,'0');
  return avatar;
};

const createOffer = () => {
  const offerArray = {
    author: {
      avatar: `img/avatars/user${addZeroToBegin(generatePhotoAvatarId())}/.png`,
    },
    offer: { title: 'Заголовок предложения',
      address: `${spotLocation.lat}, ${spotLocation.lng}`,
      price: Math.floor(getRendomNumberFormRange(MIN_PRICE, MAX_PRICE)),
      accommodationType: TYPE_ACCOMMODATIONS[Math.round(getRendomNumberFormRange(0, TYPE_ACCOMMODATIONS.length - 1))],
      rooms: Math.floor(getRendomNumberFormRange(MIN_ROOM, MAX_ROOM)),
      guests: Math.floor(getRendomNumberFormRange(MIN_GUEST, MAX_GUEST)),
      checkin: CHECK_TIMES[Math.floor(getRendomNumberFormRange(0, CHECK_TIMES.length - 1))],
      checkout: CHECK_TIMES[Math.floor(getRendomNumberFormRange(0, CHECK_TIMES.length - 1))],
      features: getNonrepeatingArrayFromArrayRandomLength(FEATURES, getRandomPositiveInteger(1, FEATURES.length - 1)),
      description: 'Апартаменты-студио Inn Nishi Shinjuku с видом на город и бесплатным Wi-Fi расположены в Токио, в 400 м от храма Шогонджи и в 500 м от информационно-технологического центра.',
      photos: getNonrepeatingArrayFromArrayRandomLength(PHOTOS, getRandomPositiveInteger(1, PHOTOS.length - 1)),
    },
    spotLocation: {
      lat: longitude(),
      lng: latitude(),
    },
  };
  return offerArray;
};

const createOffersArray = () => Array.from({length: 10}, createOffer);

console.log(createOffersArray());
