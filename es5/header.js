'use strict';
(function () {
  let computed = function () {
    let desW = 1920,
      devW = document.documentElement.clientWidth;
    console.log(devW);
    if (devW >= 1920) {
      document.documentElement.style.fontSize = '100px';
      return;
    }
    if(devW<=1440){
      document.documentElement.style.fontSize = '75px';
      return;
    }
    document.documentElement.style.fontSize = devW / desW * 100 + 'px';
  };
  computed();
  window.addEventListener('resize', computed, false);
})();

~function () {
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
  nav[3].addEventListener('click', function (e) {
    window.location.href = "./team.html";
  });
  nav[4].addEventListener('click', function (e) {
    window.location.href = "./service.html";
  });
  nav[5].addEventListener('click', function (e) {
    window.location.href = "./news.html";
  });
  nav[6].addEventListener('click', function (e) {
    window.location.href = "./about.html";
  });
  nav[7].addEventListener('click', function (e) {
    window.location.href = "./relation.html";
  });
}();