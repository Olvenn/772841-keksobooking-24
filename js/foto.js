import {FILE_TYPES, previewElement} from './constant.js';
import {removeClass} from './util.js';

const fileChooserAvatarElement = document.querySelector('.ad-form__field input[type=file]');
const previewAvatarElement = document.querySelector('.ad-form-header__img');
const fileChooserElement = document.querySelector('.ad-form__input');


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
  removeClass(previewElement, 'hidden');
  setPhoto(fileChooserElement, previewElement);
});
