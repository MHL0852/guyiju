'use strict';

(function () {
  var container = $('.productList')[0];
  var focus = $('.focus')[0];
  for (var i = 0; i < productData.length; i++) {
    var str = '';
    var products = productData[i];
    for (var j = 0; j < products.length; j++) {
      var item = products[j];
      str += ' <li class="productCell"><a href="' + item.link + '"><div class="img"><img src="' + item.url + '" alt="\u4EA7\u54C1"></div><span class="text">' + item.text + '</span><a href="'+item.shop+'"><span class="buyBtn">购买</span></a></a></li>';
    }
    console.log(str,'---------------------str');
  
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
  });
})();