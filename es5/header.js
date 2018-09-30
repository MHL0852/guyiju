'use strict';

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