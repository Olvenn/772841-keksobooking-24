const getRendomNumberFormRange = (minNumber, maxNumber) => (Math.random() * (maxNumber - minNumber + 1)) + minNumber;

const getRendomIntegerNumberFormRange = function(minNumber, maxNumber) {
  if (minNumber < 0 || maxNumber < 0) {
    return 0;
  } else if (minNumber > maxNumber){
    return 0;
  }
  return Math.floor(getRendomNumberFormRange(minNumber, maxNumber));
};

getRendomIntegerNumberFormRange(1, 4);

const getRendomFractionalNumberFormRange = function(minNumber, maxNumber, signsAfterComma) {
  const num = getRendomNumberFormRange(minNumber, maxNumber).toFixed(signsAfterComma);
  if (minNumber < 0 || maxNumber < 0) {
    return 0;
  } else if (minNumber > maxNumber){
    return 0;
  }
  return +num;
};

getRendomFractionalNumberFormRange(1, 4, 7);

const MIN_LONGITUDE = -90;
const MAX_LONGITUDE = 90;
const MIN_LATITUDE = -180;
const MAX_LATITUDE = 180;

const getGeographicalCoordinates = function(minlongitude, maxlongitude, minlatitude, maxlatitude) {

  if (minlongitude < MIN_LONGITUDE || maxlongitude > MAX_LONGITUDE) {
    return 0;
  }
  if (minlatitude < MIN_LATITUDE || maxlatitude > MAX_LATITUDE) {
    return 0;
  }
  const longitude = getRendomNumberFormRange(MIN_LONGITUDE, MAX_LONGITUDE).toFixed(7);
  const latitude = getRendomNumberFormRange(MIN_LATITUDE, MAX_LATITUDE).toFixed(7);
  return [longitude, latitude];
};

getGeographicalCoordinates(-45, 75, -120, 120);

const checkStringLength = (text, maxLength) => (text.length < maxLength);

checkStringLength('textInner', 10);
