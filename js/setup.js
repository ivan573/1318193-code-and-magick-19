'use strict';

// setup

var userDialog = document.querySelector('.setup');

var wizardData = new Array(4);

// wizard-generation

var randomData = {
  firstNames: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  lastNames: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  colorsOfCoat: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  colorsOfEyes: ['black', 'red', 'blue', 'yellow', 'green'],
  colorsOfFireball: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']
};

var getFullName = function () {
  var name = randomData.firstNames[Math.floor(Math.random() * randomData.firstNames.length)];
  name += ' ' + randomData.lastNames[Math.floor(Math.random() * randomData.lastNames.length)];
  return name;
};

var getColor = function (array) {
  var color = array[Math.floor(Math.random() * array.length)];
  return color;
};

var getWizard = function () {
  return {
    name: getFullName(),
    coatColor: getColor(randomData.colorsOfCoat),
    eyesColor: getColor(randomData.colorsOfEyes)
  };
};

// setup

for (var i = 0; i < wizardData.length; i++) {
  wizardData[i] = getWizard();
}

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

wizardData.forEach(function (wizard) {
  fragment.appendChild(renderWizard(wizard));
});

var similarListElement = userDialog.querySelector('.setup-similar-list');

similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');

// user-dialog

var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

var nameField = document.querySelector('.setup-user-name');

// player-creation

var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
var coatColor = document.querySelector('[name="coat-color"]');
var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
var eyesColor = document.querySelector('[name="eyes-color"]');
var wizardFireball = document.querySelector('.setup-fireball-wrap');
var fireballColor = document.querySelector('.setup-fireball-wrap input');

// user-dialog

var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');

var dialogLeft;
var dialogTop;

var openCounter = 0;

var onPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY && document.activeElement !== nameField) {
    closePopup();
  }
};

var openPopup = function () {
  userDialog.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);

  if (openCounter < 1) {
    dialogLeft = userDialog.getBoundingClientRect().left;
    dialogTop = userDialog.getBoundingClientRect().top;
    openCounter++;
  }

  userDialog.style.left = dialogLeft + 400 + 'px';
  userDialog.style.top = dialogTop + 36 + 'px';
};

var closePopup = function () {
  userDialog.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
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

// player-creation

wizardCoat.addEventListener('click', function () {
  var color = getColor(randomData.colorsOfCoat);
  wizardCoat.style.fill = color;
  coatColor.value = color;
});

wizardEyes.addEventListener('click', function () {
  var color = getColor(randomData.colorsOfEyes);
  wizardEyes.style.fill = color;
  eyesColor.value = color;
});

wizardFireball.addEventListener('click', function () {
  var color = getColor(randomData.colorsOfFireball);
  wizardFireball.style.background = color;
  fireballColor.value = color;
});

// двигать

var setupDialogElement = document.querySelector('.setup');
var dialogHandler = setupDialogElement.querySelector('.upload');

dialogHandler.addEventListener('mousedown', function (evt) {
  evt.preventDefault();

  var startCoords = {
    x: evt.clientX,
    y: evt.clientY
  };

  var dragged = false;

  var onMouseMove = function (moveEvt) {
    moveEvt.preventDefault();
    dragged = true;

    var shift = {
      x: startCoords.x - moveEvt.clientX,
      y: startCoords.y - moveEvt.clientY
    };

    startCoords = {
      x: moveEvt.clientX,
      y: moveEvt.clientY
    };

    setupDialogElement.style.top = (setupDialogElement.offsetTop - shift.y) + 'px';
    setupDialogElement.style.left = (setupDialogElement.offsetLeft - shift.x) + 'px';

  };

  var onMouseUp = function (upEvt) {
    upEvt.preventDefault();

    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);

    if (dragged) {
      var onClickPreventDefault = function (clickEvt) {
        clickEvt.preventDefault();
        dialogHandler.removeEventListener('click', onClickPreventDefault);
      };
      dialogHandler.addEventListener('click', onClickPreventDefault);
    }

  };

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
});
