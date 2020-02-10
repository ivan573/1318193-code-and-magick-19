// user-dialog

'use strict';

var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

var nameField = document.querySelector('.setup-user-name');

var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');

var onPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY && document.activeElement !== nameField) {
    closePopup();
  }
};

var openPopup = function () {
  window.userDialog.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  window.userDialog.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);

  window.userDialog.style.left = '';
  window.userDialog.style.top = '';
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
});
