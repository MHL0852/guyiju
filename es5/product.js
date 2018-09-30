'use strict';

(function () {
  var container = $('.productList')[0];
  var focus = $('.focus')[0];
  for (var i = 0; i < productData.length; i++) {
    var str = '';
    var products = productData[i];
    for (var j = 0; j < products.length; j++) {
      var item = products[j];
      str += ' <li class="productCell">\n              <a href="' + item.link + '">\n              <div class="img">\n                <img src="' + item.url + '" alt="\u4EA7\u54C1">\n              </div>\n              <span class="text">' + item.text + '</span>\n</a>\n          </li>';
    }

    container.innerHTML += '<li class="part ' + (i === 0 ? 'active' : null) + '"> <ul>' + str + '</ul></li>';
    focus.innerHTML += '<li class="part ' + (i === 0 ? 'active' : null) + '"><ul>' + (i + 1) + '</ul></li>';
  }
  $('.focus')[0].addEventListener('click', function (e) {
    var i = e.target.innerHTML;
    if (isNaN(i) || !i) return;
    i = Number(i);
    i--;
    [].forEach.call($('.focus').children('li'), function (item, index) {
      if (index == i) {
        item.className = item.className + ' active';
        $('.productList').children('li')[index].className = $('.productList').children('li')[index].className + ' active';
      } else {
        item.className = item.className.replace('active', '');
        $('.productList').children('li')[index].className = $('.productList').children('li')[index].className.replace('active', '');
      }
    });
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