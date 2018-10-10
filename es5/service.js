'use strict';

(function () {
  var data = serviceData.content;
  var container = $('.qaList')[0];
  var focus = $('.focus')[0];

  var btns = $('.btn').children('button');

  btns[0].addEventListener('click', function () {
    btns[0].className += ' active';
    btns[1].className = btns[1].className.replace(' active', '');

    getFlull();
  }, false);

  btns[1].addEventListener('click', function () {
    btns[1].className += ' active';
    btns[0].className = btns[0].className.replace(' active', '');
    getNew();
  }, false);

  var getNew = function getNew() {
    var qaList = data[data.length - 1];
    var item = qaList[qaList.length - 1];

    container.innerHTML = '<li class="describe active"> <ul><li class="qaCell">\n              <div class="question clear">\n                <span>' + item.question + '</span>\n                <p class="time">\n                 ' + item.time + '\n                </p>\n                <p class="data">\n                  ' + item.date + '\n                </p>\n\n              </div>\n              <p class="answer">\n                ' + item.answer + '\n              </p>\n            </li></ul></li>';
    focus.innerHTML = '<li class="part active"><ul>1</ul></li>';
  };

  var getFlull = function getFlull() {
    container.innerHTML = '';
    focus.innerHTML = '';
    for (var i = 0; i < data.length; i++) {
      var str = '';
      var teams = data[i];
      for (var j = 0; j < teams.length; j++) {
        var item = teams[j];
        str += '  <li class="qaCell">\n              <div class="question clear">\n                <span>' + item.question + '</span>\n                <p class="time">\n                 ' + item.time + '\n                </p>\n                <p class="data">\n                  ' + item.date + '\n                </p>\n\n              </div>\n              <p class="answer">\n                ' + item.answer + '\n              </p>\n            </li>';
      }

      container.innerHTML += '<li class="describe ' + (i === 0 ? 'active' : null) + '"> <ul>' + str + '</ul></li>';
      focus.innerHTML += '<li class="part ' + (i === 0 ? 'active' : null) + '"><ul>' + (i + 1) + '</ul></li>';
    }
  };
  getFlull();
  $('.focus')[0].addEventListener('click', function (e) {
    var i = e.target.innerHTML;
    i--;
    if (isNaN(i)) return;
    i = Number(i);
    [].forEach.call($('.focus').children('li'), function (item, index) {
      if (index == i) {

        item.className = item.className + ' active';
        $('.qaList').children('li')[index].className = $('.qaList').children('li')[index].className + ' active';
      } else {
        item.className = item.className.replace('active', '');
        $('.qaList').children('li')[index].className = $('.qaList').children('li')[index].className.replace('active', '');
      }
    });
  });
})();