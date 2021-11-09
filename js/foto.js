import {FILE_TYPES} from './constant.js';

const fileChooserAvatarElement = document.querySelector('.ad-form__field input[type=file]');
const previewAvatarElement = document.querySelector('.ad-form-header__img');
const fileChooserElement = document.querySelector('.ad-form__input');
const previewElement = document.querySelector('.ad-form__img-view');


const setPhoto = (selectedElement, previewTag) => {
  const file = selectedElement.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    previewTag.src = URL.createObjectURL(file);
  }
};

fileChooserAvatarElement.addEventListener('change', () => {
  setPhoto(fileChooserAvatarElement, previewAvatarElement);
});

fileChooserElement.addEventListener('change', () => {
  setPhoto(fileChooserElement, previewElement);
});
