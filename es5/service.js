'use strict';

(function () {
  var data = serviceData.content;
  var container = $('.qaList')[0];
  var focus = $('.focus')[0];

  var btns = $('.btn').children('button');
  var btnShow = 0;

  var _loop = function _loop(i) {
    var item = btns[i];
    ~function () {
      var x = i;
      item.addEventListener('click', function () {
        if (x === btnShow) return;
        item.className += ' active';
        btns[btnShow].className = btns[btnShow].className.replace(' active', '');
        btnShow = x;
      }, false);
    }();
  };

  for (var i = 0; i < btns.length; i++) {
    _loop(i);
  }

  for (var i = 0; i < data.length; i++) {
    var str = '';
    var teams = data[i];
    for (var j = 0; j < teams.length; j++) {
      var _item = teams[j];
      str += '  <li class="qaCell">\n              <div class="question clear">\n                <span>' + _item.question + '</span>\n                <p class="time">\n                 ' + _item.time + '\n                </p>\n                <p class="data">\n                  ' + _item.date + '\n                </p>\n\n              </div>\n              <p class="answer">\n                ' + _item.answer + '\n              </p>\n            </li>';
    }

    container.innerHTML += '<li class="describe ' + (i === 0 ? 'active' : null) + '"> <ul>' + str + '</ul></li>';
    focus.innerHTML += '<li class="part ' + (i === 0 ? 'active' : null) + '"><ul>' + (i + 1) + '</ul></li>';
  }
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
    //返回头部动画
/*    var top = window.pageYOffset,
        x = 20;
    var timer = setInterval(function () {

      scrollTo(0, x * top / 20);

      if (x <= 0) {
        clearInterval(timer);
        timer = null;
      }
      x--;
    }, 5);*/
  });
})();