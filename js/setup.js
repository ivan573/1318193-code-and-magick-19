'use strict';

var userDialog = document.querySelector('.setup');

var wizardData = new Array(4);

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

var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

var nameField = document.querySelector('.setup-user-name');

var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
var wizardFireball = document.querySelector('.setup-fireball-wrap');
var fireballColor = document.querySelector('.setup-fireball-wrap input');

var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');

var onPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY && document.activeElement !== nameField) {
    closePopup();
  }
};

var openPopup = function () {
  userDialog.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
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

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = getColor(randomData.colorsOfCoat);
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = getColor(randomData.colorsOfEyes);
});

wizardFireball.addEventListener('click', function () {
  var color = getColor(randomData.colorsOfFireball);
  wizardFireball.style.background = color;
  fireballColor.value = color;
});
