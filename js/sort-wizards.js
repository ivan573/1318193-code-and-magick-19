'use strict';

(function () {

  var getColor = function (selector) {
    var color = document.querySelector(selector).value;
    return color;
  };

  var getRank = function (wizard) {
    var rank = 0;
    if (wizard.colorCoat === getColor('[name="coat-color"]')) {
      rank += 2;
    }
    if (wizard.colorEyes === getColor('[name="eyes-color"]')) {
      rank += 1;
    }
    return rank;
  };

  window.sortWizards = function (wizards) {
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
