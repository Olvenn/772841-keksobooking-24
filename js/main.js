const getRendomNumberFormRange = (minNumber, maxNumber) => (Math.random() * (maxNumber - minNumber + 1)) + minNumber;

const getRendomIntegerNumberFormRange = function(minNumber, maxNumber) {
  if (minNumber < 0 || maxNumber < 0) {
    return 'Числа должны быть больше 0';
  } else if (minNumber > maxNumber){
    return 'Первое число должно быть больше или равно второму';
  }
  return Math.floor(getRendomNumberFormRange(minNumber, maxNumber));
};

getRendomIntegerNumberFormRange(1, 4);

const getRendomFractionalNumberFormRange = function(minNumber, maxNumber, signsAfterComma) {
  const num = getRendomNumberFormRange(minNumber, maxNumber).toFixed(signsAfterComma);
  if (minNumber < 0 || maxNumber < 0) {
    return 'Числа должны быть больше 0';
  } else if (minNumber > maxNumber){
    return 'Первое число должно быть больше или равно второму';
  }
  return +num;
};

getRendomFractionalNumberFormRange(1, 4, 7);

const getGeographicalCoordinates = function(minlongitude, maxlongitude, minlatitude, maxlatitude) {

  if (minlongitude < -90 || maxlongitude > 90) {
    return 'Значения широты должным располагаться с диапазоне от -90 до 90';
  }
  if (minlatitude < -180 || maxlatitude > 180) {
    return 'Значения долготы должным располагаться с диапазоне от -180 до 180';
  }
  const longitude = getRendomNumberFormRange(minlongitude, maxlongitude).toFixed(7);
  const latitude = getRendomNumberFormRange(minlatitude, maxlatitude).toFixed(7);
  return [longitude, latitude];
};

getGeographicalCoordinates(-45, 75, -120, 120);

const textInner = 'Функция для проверки максимальной длины строки. Будет использоваться для проверки длины введённого комментария, но должна быть универсальна';
const lengthNumber = 40;

const checkStringLength = (text, maxLength) => (text.length < maxLength);

checkStringLength(textInner, lengthNumber);

const validateTextLength1 = function(text, maxLength) {
  if(checkStringLength(text, maxLength)) {
    return text;
  } return 'Текст слишком длинный';
};

validateTextLength1(textInner, lengthNumber);

const shortenTextToFixedLength2 = function (text, maxLength) {
  if (text.length < maxLength) {
    return text;
  } return `${text.substring(0, maxLength - 3)} ...`;
};

shortenTextToFixedLength2(textInner, lengthNumber);
