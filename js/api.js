import {Url} from './constant.js';
const getData = (onSuccess, showAlertNotGet) => {
  fetch(Url.GET)
    .then((response) => {
      if (!response.ok) {
        showAlertNotGet('Не получить данные. Попробуйте перезагрузить страницу');
      }
      return response.json();
    })
    .then((advertisements) => {
      onSuccess(advertisements);
    })
    .catch(() => {
      showAlertNotGet('Не получить данные. Попробуйте перезагрузить страницу');
    });
};

const sendData = (onSuccess, showAlert, body) => {
  fetch(
    Url.POST,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        showAlert();
      }
    })
    .catch(() => {
      showAlert('Не удалось отправить форму. Попробуйте ещё раз');
    });
};

export {getData, sendData};
