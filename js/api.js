const getData = (onSuccess, showAlertNotGet) => {
  fetch('https://24.javascript.pages.academy/keksobooking/data')
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
    'https://24.javascript.pages.academy/keksobooking',
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
