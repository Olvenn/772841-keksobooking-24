const getRandomPositiveInteger =  (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const getRandomPositiveFloat = (a, b, digits = 1) => {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
};

const createRandomIdFromRangeGenerator = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomPositiveInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomPositiveInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const getNonrepeatingArrayFromArrayRandomLength = (incomeArray) => {
  const outcomeArray = [];
  const generatePhotoId = createRandomIdFromRangeGenerator(1, incomeArray.length - 1);
  for (let i = 0; i < getRandomPositiveInteger(1, incomeArray.length - 1); i++) {
    outcomeArray.push(incomeArray[generatePhotoId()]);
  }
  return outcomeArray;
};

const createUniqueIdGenerator  = () => {
  let lastGeneratedId = 0;
  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

const addZeroToBegin = (singleDigits) => {
  const avatar = String(singleDigits).padStart(2,'0');
  return avatar;
};

export {getRandomPositiveInteger, getRandomPositiveFloat, createRandomIdFromRangeGenerator, getNonrepeatingArrayFromArrayRandomLength, createUniqueIdGenerator, addZeroToBegin};
