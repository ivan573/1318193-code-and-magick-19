'use strict';

(function () {

  // тут я не уверен нарушение ли это приципа DRY. в player-creation.js есть переменные, которые элементы формы.
  // то есть, их можно было бы вынести в глобальную область видимости и тут сделать window.playerCreation.coatColor.value.
  var coatColor = document.querySelector('[name="coat-color"]').value;
  var eyesColor = document.querySelector('[name="eyes-color"]').value;

  var getRank = function (wizard) {
    var rank = 0;
    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }
    return rank;
  };

  window.sort = function (wizards) {
    var sortedWizards = wizards.slice().
      sort(function (a, b) {
        var rankDiff = getRank(b) - getRank(a);
        if (rankDiff === 0) {
          rankDiff = wizards.indexOf(a) - wizards.indexOf(b);
        }
        return rankDiff;
      });
    return sortedWizards;
  };

})();
