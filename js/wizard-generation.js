// wizard-generation

'use strict';

(function () {

  window.wizardGeneration = {
    randomData: {
      firstNames: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
      lastNames: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
      colorsOfCoat: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
      colorsOfEyes: ['black', 'red', 'blue', 'yellow', 'green'],
      colorsOfFireball: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']
    },
    getFullName: function () {
      var name = this.randomData.firstNames[Math.floor(Math.random() * this.randomData.firstNames.length)];
      name += ' ' + this.randomData.lastNames[Math.floor(Math.random() * this.randomData.lastNames.length)];
      return name;
    },
    getColor: function (array) {
      var color = array[Math.floor(Math.random() * array.length)];
      return color;
    },
    getWizard: function () {
      return {
        name: this.getFullName(),
        coatColor: this.getColor(this.randomData.colorsOfCoat),
        eyesColor: this.getColor(this.randomData.colorsOfEyes)
      };
    }
  };


})();
