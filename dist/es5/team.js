'use strict';

(function () {
  var data = teamData.content;
  var container = $('.teamList')[0];
  var focus = $('.focus')[0];
  for (var i = 0; i < data.length; i++) {
    var str = '';
    var teams = data[i];
    for (var j = 0; j < teams.length; j++) {
      var item = teams[j];
      str += '  <li>\n          <div class="img">\n            <img src="' + item.url + '" alt="">\n          </div>\n          <p class="title">' + item.title + '</p>\n          <p class="text">' + item.text + '</p>\n          <p class="examine clear">\n          <a href="' + item.link + '">\n          <button>\u67E5\u770B</button>\n</a>\n</p>\n        </li>';
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
        $('.teamList').children('li')[index].className = $('.teamList').children('li')[index].className + ' active';
      } else {
        item.className = item.className.replace('active', '');
        $('.teamList').children('li')[index].className = $('.teamList').children('li')[index].className.replace('active', '');
      }
    });
    //返回首页动画
    /*let top = window.pageYOffset,
      x= 20
    let timer = setInterval(function () {
      
      scrollTo(0,x*top/20)
      
      if(x <= 0){
        clearInterval(timer)
        timer = null
      }
      x--
    },5)*/
  });
})();