'use strict';

(function () {

  window.backend = {
    load: function () {
      var xhr = new XMLHttpRequest();

      xhr.addEventListener('load', function (url) {
        var data;

        if (xhr.status === 200) {
          try {
            data = JSON.parse(xhr.responseText);
          } catch (err) {
            throw new Error(err.message);
          }
        } else {
          throw new Error('Ошибка ' + xhr.status + ': ' + getError(window.statusCodeList, xhr.status));
        }

        var getError = function (object, key) {
          return object[key];
        };

        xhr.addEventListener('error', function () {
          throw new Error('Произошла ошибка соединения');
        });

        xhr.addEventListener('timeout', function () {
          throw new Error('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
        });

        xhr.timeout = 10000;

        xhr.open('GET', url);
        xhr.send();

        return data;
      });
    },
    save: function () {

    }
  };

  // eslint-disable-next-line no-console
  console.log(window.backend.load('https://js.dump.academy/code-and-magick/data'));

})();
