'use strict';

$(document).ready(function () {
  //  header
  var nav = $('#nav_list').children();
  nav[0].addEventListener('click', function (e) {
    window.location.href = "./home.html";
  });
  nav[1].addEventListener('click', function (e) {
    window.location.href = "./products.html";
  });
  nav[2].addEventListener('click', function (e) {
    window.location.href = "./story.html";
  });
  // nav[3].addEventListener('click', function (e) {
  //   window.location.href = "./team.html";
  // });
  nav[3].addEventListener('click', function (e) {
    window.location.href = "./service.html";
  });
	nav[4].addEventListener('click', function (e) {
	 window.location.href = "./news.html";
	});
  nav[5].addEventListener('click', function (e) {
    window.location.href = "./about.html";
  });
  nav[6].addEventListener('click', function (e) {
    window.location.href = "./relation.html";
  });
});

~function () {
  var computed = function computed() {
    var desW = 1920,
        devW = document.documentElement.clientWidth;
    if (devW >= 1920) {
      document.documentElement.style.fontSize = '100px';
      return;
    }
    if (devW <= 1280) {
      document.documentElement.style.fontSize = '67px';
      return;
    }
    document.documentElement.style.fontSize = devW / desW * 100 + 'px';
  };
  computed();
  window.addEventListener('resize', computed, false);
}();

var animate_title = function animate_title(e) {
  var active = $('#title');
  if (active.length === 0) return;
  var duration = 1500,
      effect = animateEffect.Circ.easeOut;
  var win = utils.winBox('clientHeight') + utils.winBox('scrollTop');

  var A = utils.offset(active[0])['top'];
  if (win > A && !active.hasClass('animated')) {
    animate({
      curEle: active[0],
      target: { top: 0, opacity: 1 },
      duration: duration,
      effect: effect
    });
    active.addClass('animated');
  }
};

$(document).ready(function () {
  animate_title();
  window.addEventListener('scroll', animate_title, false);
});
