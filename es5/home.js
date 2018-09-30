'use strict';

(function () {
  var part1 = document.getElementById('star_content');
  var container = utils.children(part1)[0];
  // var container = part1.getElementsByTagName('UL')[0];
  //part1
  ~function () {
    var str = '';
    var data = homeData.part1;
    $('.star').find('p.mainTitleText')[0].innerHTML = data.title;
    $('.star').find('span.default')[0].innerHTML = data.subTitle.normal;
    $('.star').children('div.title').find('p.icon')[0].style.backgroundImage = data.titleUrl;
    $('.star').find('span.bold')[0].innerHTML = data.subTitle.bold;

    var proData = data.content;
    for (var i = 0; i < proData.length; i++) {
      var item = proData[i];
      str += '<li class="productCell">\n            <div class="img">\n              <img src="' + item.url + '" alt="\u4EA7\u54C1">\n            </div>\n            <span class="text">' + item.describe + '</span>\n          </li>';
    }
    $('#star_content').children()[0].innerHTML = str;
  }();

  //  part2
  ~function () {
    var str = '';
    var data = homeData.part2;
    $('.story').children('div.title').find('p.mainTitleText')[0].innerHTML = data.title;
    $('.story').children('div.title').find('p.mainTitleText')[0].innerHTML = data.title;
    $('.story').children('div.title').find('p.icon')[0].style.backgroundImage = data.titleUrl;
    $('.story').find('span.default')[0].innerHTML = data.subTitle.normal;
    $('.story').children('div.title').find('span.bold')[0].innerHTML = data.subTitle.bold;

    $('.story').children('.content')[0].style.backgroundImage = 'url(' + data.content.backgroundUrl + ')';
    $('.story').children('.content').find('div.img')[0].innerHTML = '<img src="' + data.content.url + '" alt="\u54C1\u724C\u6545\u4E8B">';
    $('.story').children('.content').find('p.title1')[0].innerHTML = data.content.title;
    $('.story').children('.content').find('p.text')[0].innerHTML = data.content.text;
  }();

  //  part3
  ~function () {
    var part = $('.support');
    var data = homeData.part3;
    //  title
    part.children('div.title').find('p.mainTitleText')[0].innerHTML = data.title;
    part.children('div.title').find('p.mainTitleText')[0].innerHTML = data.title;
    part.children('div.title').find('p.icon')[0].style.backgroundImage = data.titleUrl;
    part.find('span.default')[0].innerHTML = data.subTitle.normal;
    part.children('div.title').find('span.bold')[0].innerHTML = data.subTitle.bold;

    //  content
    part.children('.content').find('p.title1')[0].innerHTML = data.content.title;
    part.children('.content').find('div.text')[0].innerHTML = data.content.text;
    part.children('.content')[0].style.backgroundImage = 'url(' + data.content.backgroundUrl + ')';
  }();

  //  part4
  ~function () {
    var part = $('.service');
    var data = homeData.part4;
    //  title
    part.children('div.title').find('p.mainTitleText')[0].innerHTML = data.title;
    part.children('div.title').find('p.mainTitleText')[0].innerHTML = data.title;
    part.children('div.title').find('p.icon')[0].style.backgroundImage = data.titleUrl;
    part.find('span.default')[0].innerHTML = data.subTitle.normal;
    part.children('div.title').find('span.bold')[0].innerHTML = data.subTitle.bold;

    //  content
    part.children('.content').find('p.title1')[0].innerHTML = data.content.title;
    part.children('.content').find('div.text')[0].innerHTML = data.content.text;
    part[0].style.backgroundImage = 'url(' + data.backgroundUrl + ')';
  }();

  //  part5
  ~function () {
    var str = '';
    var part = $('.news');
    var data = homeData.part5;
    //  title
    part.children('div.title').find('p.mainTitleText')[0].innerHTML = data.title;
    part.children('div.title').find('p.mainTitleText')[0].innerHTML = data.title;
    part.children('div.title').find('p.icon')[0].style.backgroundImage = data.titleUrl;
    part.find('span.default')[0].innerHTML = data.subTitle.normal;
    part.children('div.title').find('span.bold')[0].innerHTML = data.subTitle.bold;

    //  content
    var proData = data.content;
    for (var i = 0; i < proData.length; i++) {
      var item = proData[i];
      str += ' <li class="productCell">\n            <div class="img">\n              <img src="' + item.url + '" alt="">\n            </div>\n            <p class="title">' + item.title + '</p>\n            <p class="text">' + item.text + '</p>\n            <p class="time">' + item.date + '</p>\n          </li>';
    }

    part.children('.content').find('ul')[0].innerHTML = str;
  }();
})();