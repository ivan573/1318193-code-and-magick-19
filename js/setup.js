'use strict';

(function () {
  window.userDialog = document.querySelector('.setup');

  var wizardData = new Array(4);

  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var onSuccess = function (data) {
    for (var i = 0; i < wizardData.length; i++) {
      wizardData[i] = data[Math.floor(Math.random() * data.length)];
    }

    var fragment = document.createDocumentFragment();

    wizardData.forEach(function (wizard) {
      fragment.appendChild(renderWizard(wizard));
    });

    var similarListElement = window.userDialog.querySelector('.setup-similar-list');

    similarListElement.appendChild(fragment);

    window.userDialog.querySelector('.setup-similar').classList.remove('hidden');

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

  window.backend.load(onSuccess, onError);

})();
