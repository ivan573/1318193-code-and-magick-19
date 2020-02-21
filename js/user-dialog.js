'use strict';

(function () {

  var ESC_KEY = 'Escape';
  var ENTER_KEY = 'Enter';

  var nameField = document.querySelector('.setup-user-name');

  var setupOpen = document.querySelector('.setup-open');
  var setupClose = document.querySelector('.setup-close');

  var setupForm = document.querySelector('.setup-wizard-form');

  var onSuccess = function () {
    window.userDialog.classList.add('hidden');
  };

  var onError = function (data) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = data;
    document.body.insertAdjacentElement('afterbegin', node);
  };

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

  setupForm.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(setupForm), onSuccess, onError);
    evt.preventDefault();
  });

})();


