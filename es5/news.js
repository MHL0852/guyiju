'use strict';

(function () {
  var data = newsData.content;
  var container = $('.newsList')[0];
  var focus = $('.focus')[0];

  //全部按钮与最新按钮切换
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
      str += '  <li>\n          <div class="img">\n            <img src="' + _item.url + '" alt="">\n          </div>\n          <p class="title">' + _item.title + '</p>\n          <p class="text">' + _item.text + '</p>\n          <p class="time">' + _item.date + '</p>\n        </li>';
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
        $('.newsList').children('li')[index].className = $('.newsList').children('li')[index].className + ' active';
      } else {
        item.className = item.className.replace('active', '');
        $('.newsList').children('li')[index].className = $('.newsList').children('li')[index].className.replace('active', '');
      }
    });
    //返回首页动画
    var top = window.pageYOffset,
        x = 20;
    var timer = setInterval(function () {

      scrollTo(0, x * top / 20);

      if (x <= 0) {
        clearInterval(timer);
        timer = null;
      }
      x--;
    }, 5);
  });
})();