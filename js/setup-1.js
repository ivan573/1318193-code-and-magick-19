// setup-1

'use strict';
(function () {
  window.userDialog = document.querySelector('.setup');

  var wizardData = new Array(4);

  for (var i = 0; i < wizardData.length; i++) {
    wizardData[i] = window.wizardGeneration.getWizard();
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

  var similarListElement = window.userDialog.querySelector('.setup-similar-list');

  similarListElement.appendChild(fragment);

  window.userDialog.querySelector('.setup-similar').classList.remove('hidden');
})();
