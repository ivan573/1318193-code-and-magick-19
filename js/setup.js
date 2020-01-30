'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

// eslint-disable-next-line no-unused-vars
var wizardData = new Array(4);

var dataToBeAssigned = ['name', 'coatColor', 'eyesColor'];

var randomData = {
  firstNames: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  // lastNames: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  colorsOfCoat: ['rgb (101, 137, 164)', 'rgb (241, 43, 107)', 'rgb (146, 100, 161)', 'rgb (56, 159, 117)', 'rgb (215, 210, 55)', 'rgb (0, 0, 0)'],
  colorsOfEyes: ['black', 'red', 'blue', 'yellow', 'green']
};

// var getKey = function (toBeAssigned) { // берется из массива строка, которая будет ключем
//  for (var i = 0; i < toBeAssigned; i++) // чтобы не пихать цикл в цикл решил написать отдельно
//    { return toBeAssigned[i] };
// };

/*
var getObjectField = function (toBeAssigned, random) {
  var keys = Object.keys(random);
  var counter = 0;
  if (counter < toBeAssigned.length) {
    for (var key in random) {
      counter++;
    }
  }
  return getKey(dataToBeAssigned) + ': ' + keys[Math.round(Math.random() * keys.length)] + ', ';
};
*/

// eslint-disable-next-line consistent-return
var getObjectField = function (toBeAssigned, random) { // функция по идее должна создавать данные, которые будут впихиваться в массив как объект
  var keys = Object.keys(random);
  for (var i = 0; i < toBeAssigned.length; i++) {
    return toBeAssigned[i] + ': ' + random[keys[i]][Math.round(Math.random() * keys[i].length)] + ', ';
  }
};

// eslint-disable-next-line no-unused-vars
var getWizard = function (data) { // функция берет данные и пишут их в массив
  for (var i = 0; i < data.length; i++) {
    data[i] = '{ ' + getObjectField(dataToBeAssigned, randomData) + ' }, ';
  }
};

getWizard(wizardData);
