/* eslint-disable no-console */
'use strict';

(function () {

  window.backend = {
    load: function () {
      var xhr = new XMLHttpRequest();
      var URL = 'https://js.dump.academy/code-and-magick/data';

      console.log('Hello!');

      xhr.addEventListener('load', function () {
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

        console.log(URL);

        xhr.open('GET', URL);
        xhr.send();

        console.log(data);
        console.log('Hello again!');

        return data;
      });
    },
    save: function () {

    }
  };

  window.backend.load();


})();
