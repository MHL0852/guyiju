'use strict';

(function () {
  //  part0
  ~function () {
    var str = '';
    var data = storyData.part0;
    var part0 = $('.part0');
    part0.children('H2')[0].innerHTML = data.title;

    part0.children('.img').find('p')[0].style.backgroundImage = 'url("' + data.url + '")';
    part0.children('.img').find('p')[1].innerHtml = data.imgDescribe;
    data.text.forEach(function (item) {
      str += '     <p class="text">\n       ' + item + '\n     </p>';
    });
    part0[0].innerHTML += str;
  }();

  //part1
  ~function () {
    var str = '';
    var data = storyData.part1;
    var part = $('.part1');
    data.content.forEach(function (item) {
      var innerTXT = '<h3>' + item.title + '</h3>';
      item.text.forEach(function (i) {
        innerTXT += '     <p class="text">\n          ' + i + '\n        </p>';
      });
      str += innerTXT;
    });

    part[0].innerHTML += str;
  }();
})();