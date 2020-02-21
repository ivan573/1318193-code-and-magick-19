'use strict';

(function () {

  var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
  var coatColor = document.querySelector('[name="coat-color"]');
  var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var eyesColor = document.querySelector('[name="eyes-color"]');
  var wizardFireball = document.querySelector('.setup-fireball-wrap');
  var fireballColor = document.querySelector('.setup-fireball-wrap input');

  var similarWizardsElement = document.querySelector('.setup-similar-list');

  wizardCoat.addEventListener('click', function () {
    setColor(window.wizardGeneration.randomData.colorsOfCoat, wizardCoat, coatColor, 'coat');
    displayNewSimilarWizards();
  });

  wizardEyes.addEventListener('click', function () {
    setColor(window.wizardGeneration.randomData.colorsOfEyes, wizardEyes, eyesColor, 'eyes');
    displayNewSimilarWizards();
  });

  wizardFireball.addEventListener('click', function () {
    setColor(window.wizardGeneration.randomData.colorsOfFireball, wizardFireball, fireballColor, 'fireball');
  });

  var displayNewSimilarWizards = function () {
    similarWizardsElement.innerHTML = '';
    window.sortAndDisplay();
  };

  var setColor = function (colorsOfElement, wizardElement, elementColor, type) {
    var color = window.wizardGeneration.getColor(colorsOfElement);
    if (type === 'coat' || type === 'eyes') {
      wizardElement.style.fill = color;
    } else if (type === 'fireball') {
      wizardElement.style.background = color;
    }
    wizardElement = color;
    elementColor.value = color;
  };

})();
