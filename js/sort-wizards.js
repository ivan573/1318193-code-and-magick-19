'use strict';

(function () {


  var getCoatColor = function () {
    var color = document.querySelector('[name="coat-color"]').value;
    return color;
  };
  var getEyesColor = function () {
    var color = document.querySelector('[name="eyes-color"]').value;
    return color;
  };

  var getRank = function (wizard) {
    var rank = 0;
    if (wizard.colorCoat === getCoatColor()) {
      rank += 2;
    }
    if (wizard.colorEyes === getEyesColor()) {
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
