'use strict';
(function () {
  var DEBOUNCE_INTERVAL = 1000; // ms

  window.debounce = function (cb) {
    var lastTimeout = null;

    return function () {

      var parameters = arguments;
      console.log(lastTimeout);
      if (lastTimeout) {
        window.clearTimeout(lastTimeout);
      }
      console.log(lastTimeout);
      lastTimeout = window.setTimeout(function () {
        cb.apply(null, parameters);
      }, DEBOUNCE_INTERVAL);
    };
  };
})();

