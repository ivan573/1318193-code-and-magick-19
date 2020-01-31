'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var wizardData = new Array(4);

var randomData = {
  firstNames: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  lastNames: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  colorsOfCoat: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  colorsOfEyes: ['black', 'red', 'blue', 'yellow', 'green']
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
