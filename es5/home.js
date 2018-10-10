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
      str += ' <li class="productCell">\n <a href="' + item.href + '">\n            <div class="img">\n              <img src="' + item.url + '" alt="">\n            </div>\n            <p class="title">' + item.title + '</p>\n            <p class="text">' + item.text + '</p>\n            <p class="time">' + item.date + '</p>\n            </a>\n          </li>';
    }

    part.children('.content').find('ul')[0].innerHTML = str;
  }();

  //  animate
  ~function () {
    window.addEventListener('scroll', function (e) {

      var duration = 1500,
          effect = animateEffect.Circ.easeOut;

      var starTit = $('#star_title');
      var starCon = $('#star_content');

      var a = utils.offset(starTit[0])['top'] + 100;
      var A = utils.offset(starCon[0])['top'];

      var storyTit = $('.story').children('.title');
      var storyCon = $('.story').find('.content');
      var b = utils.offset(storyTit[0])['top'] + 100;
      var B = utils.offset(storyCon[0])['top'] + 200;

      var supportTit = $('.support').children('.title');
      var supportCon = $('.support').children('.content');
      var c = utils.offset(supportTit[0])['top'] + 100;
      var C = utils.offset(supportCon[0])['top'] + 100;

      var serviceTit = $('.service').children('.title');
      var serviceCon = $('.service').children('.content');
      var d = utils.offset(serviceTit[0])['top'] + 100;
      var D = utils.offset(serviceCon[0])['top'] + 100;

      var newsTit = $('.news').children('.title');
      var newsCon = $('.news').children('.content');
      var e = utils.offset(newsTit[0])['top'] + 100;
      var E = utils.offset(newsCon[0])['top'] + 100;

      var footerCon = $('.footerContainer').children('.contact');
      var footerForm = $('.footerContainer').children('.form');
      var F = utils.offset(footerCon[0])['top'] + 100;

      var win = utils.winBox('clientHeight') + utils.winBox('scrollTop');
      var titleAnimate = function titleAnimate(title) {
        animate({
          curEle: title.find('.mainTitle')[0],
          target: { left: 0, top: 0, opacity: 1 },
          duration: duration,
          effect: effect
        });
        animate({
          curEle: title.find('.subtitle')[0],
          target: { left: 0, top: 0, opacity: 1 },
          duration: duration,
          effect: effect
        });
      };
      var titleList = [{
        top: a,
        Dom: starTit
      }, {
        top: b,
        Dom: storyTit
      }, {
        top: c,
        Dom: supportTit
      }, {
        top: d,
        Dom: serviceTit
      }, {
        top: e,
        Dom: newsTit
      }];

      titleList.forEach(function (item, index) {
        if (!item.Dom.hasClass('animated') && win > item.top) {
          titleAnimate(item.Dom);
          item.Dom.addClass('animated');
        }
      });

      if (win > A) {
        (function () {
          var curList = starCon.find('.productCell');

          var _loop = function _loop(i) {
            ~function () {
              var j = i;
              var item = curList[j];
              if (!$(item).hasClass('animated')) {
                var timer = setTimeout(function () {
                  animate({
                    curEle: item,
                    target: { left: 0, top: 0, opacity: 1 },
                    duration: duration,
                    effect: effect
                  });
                  clearTimeout(timer);
                }, j * 200);

                $(item).addClass('animated');
              }
            }();
          };

          for (var i = 0; i < curList.length; i++) {
            _loop(i);
          }
        })();
      }

      if (win > B) {
        var img = storyCon.find('#story_img')[0];
        var text = storyCon.find('#story_text')[0];
        if (!storyCon.hasClass('animated')) {
          animate({
            curEle: img,
            target: { left: 0, top: 0, opacity: 1 },
            duration: duration,
            effect: effect
          });
          animate({
            curEle: text,
            target: { left: 0, top: 0, opacity: 1 },
            duration: duration,
            effect: effect
          });
          storyCon.addClass('animated');
        };
      }

      if (win > C) {
        var text = supportCon.find('.technology')[0];
        if (!supportCon.hasClass('animated')) {
          animate({
            curEle: text,
            target: { left: 0, top: 0, opacity: 1 },
            duration: duration,
            effect: effect
          });
          supportCon.addClass('animated');
        };
      }

      if (win > D) {
        var title = serviceCon.find('.title1')[0];
        var text = serviceCon.find('.text')[0];
        if (!serviceCon.hasClass('animated')) {
          animate({
            curEle: title,
            target: { left: 0, top: 0, opacity: 1 },
            duration: duration,
            effect: effect
          });
          animate({
            curEle: text,
            target: { left: 0, top: 0, opacity: 1 },
            duration: duration,
            effect: effect
          });
          serviceCon.addClass('animated');
          $('.service').addClass('animated');
        };
      }

      if (win > E) {
        (function () {
          var curList = newsCon.find('.productCell');

          var _loop2 = function _loop2(i) {
            ~function () {
              var j = i;
              var item = curList[j];
              if (!$(item).hasClass('animated')) {
                var timer = setTimeout(function () {
                  animate({
                    curEle: item,
                    target: { left: 0, top: 0, opacity: 1 },
                    duration: duration,
                    effect: effect
                  });
                  clearTimeout(timer);
                }, j * 200);

                $(item).addClass('animated');
              }
            }();
          };

          for (var i = 0; i < curList.length; i++) {
            _loop2(i);
          }
        })();
      }

      if (win > F) {
        animate({
          curEle: footerCon[0],
          target: { left: 0, top: 0, opacity: 1 },
          duration: duration,
          effect: effect
        });
        animate({
          curEle: footerForm[0],
          target: { left: 0, top: 0, opacity: 1 },
          duration: duration,
          effect: effect
        });
      }
    });
  }();
})();