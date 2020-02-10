// player-creation

'use strict';

var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
var coatColor = document.querySelector('[name="coat-color"]');
var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
var eyesColor = document.querySelector('[name="eyes-color"]');
var wizardFireball = document.querySelector('.setup-fireball-wrap');
var fireballColor = document.querySelector('.setup-fireball-wrap input');

wizardCoat.addEventListener('click', function () {
  var color = window.wizardGeneration.getColor(window.wizardGeneration.randomData.colorsOfCoat);
  wizardCoat.style.fill = color;
  coatColor.value = color;
});

wizardEyes.addEventListener('click', function () {
  var color = window.wizardGeneration.getColor(window.wizardGeneration.randomData.colorsOfEyes);
  wizardEyes.style.fill = color;
  eyesColor.value = color;
});

wizardFireball.addEventListener('click', function () {
  var color = window.wizardGeneration.getColor(window.wizardGeneration.randomData.colorsOfFireball);
  wizardFireball.style.background = color;
  fireballColor.value = color;
});
