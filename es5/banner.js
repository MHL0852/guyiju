'use strict';

$(function (options) {
  var container = document.getElementById('container'),
      containerChild = utils.children(container),
      wrapper = containerChild[0],
      focus = containerChild[1];
  var slideList = null,
      imgList = null,
      focusList = null,
      bannerData = homeData.banner,
      containerWidth = container.clientWidth;
  //=>INIT PARAMETERS
  var _default = {
    initIndex: 0,
    autoInterval: 4000
  };
  for (var key in options) {
    if (options.hasOwnProperty(key)) {
      _default[key] = options[key];
    }
  }
  var initIndex = _default.initIndex,
      autoInterval = _default.autoInterval;

  //=>GET DATA & BIND DATA
  ~function () {
    //->BIND DATA
    var str = '',
        strFocus = '';
    for (var i = 0; i < bannerData.length; i++) {
      var item = bannerData[i];
      str += '<li class="slide">\n                <a href="' + item.link + '">\n                    <img src="" data-img="' + item.img + '" alt="' + item.desc + '">\n                </a>\n            </li>';

      strFocus += '<li></li>';
    }
    wrapper.innerHTML = str;
    focus.innerHTML = strFocus;

    //->GET ELEMENT LIST
    slideList = wrapper.getElementsByTagName('li');
    imgList = wrapper.getElementsByTagName('img');
    focusList = focus.getElementsByTagName('li');

    //=>CLONE
    wrapper.appendChild(slideList[0].cloneNode(true));

    //->COMPUTED WRAPPER WIDTH
    utils.css(wrapper, 'width', (bannerData.length + 1) * containerWidth);
  }();

  //=>INIT SHOW & LAZY IMG
  ~function () {
    //->FOCUS DEFAULT SHOW
    for (var i = 0; i < focusList.length; i++) {
      focusList[i].className = i === initIndex ? 'select' : null;
    }

    //->WRAPPER DEFAULT SHOW
    utils.css(wrapper, 'left', -containerWidth * initIndex);

    //->LAZY IMG
    var timer = setTimeout(function () {
      for (var k = 0; k < imgList.length; k++) {
        lazyImg(imgList[k]);
      }
      clearTimeout(timer);
    }, 500);

    function lazyImg(curImg) {
      var tempImg = new Image();
      tempImg.onload = function () {
        curImg.src = this.src;
        curImg.style.display = 'block';
        animate({
          curEle: curImg,
          target: { opacity: 1 },
          duration: 200
        });
        tempImg = null;
      };
      tempImg.src = curImg.getAttribute('data-img');
    }
  }();

  //=>AUTO CHANGE
  var autoTimer = null;
  autoTimer = setInterval(autoMove, autoInterval);
  function autoMove() {
    initIndex++;
    if (initIndex === bannerData.length + 1) {
      utils.css(wrapper, 'left', 0);
      initIndex = 1;
    }
    change();
  }

  //=>BIND FOCUS EVENT
  ~function () {
    for (var i = 0; i < focusList.length; i++) {
      focusList[i].myIndex = i;
      focusList[i].onclick = function () {
        initIndex = this.myIndex;
        change();
      };
    }
  }();

  //=>CHANGE
  function change() {
    animate({
      curEle: wrapper,
      target: { left: -initIndex * containerWidth },
      duration: 300
    });

    //->CHANGE FOCUS
    var tempIndex = initIndex;
    tempIndex === bannerData.length ? tempIndex = 0 : null;
    for (var i = 0; i < focusList.length; i++) {
      focusList[i].className = i === tempIndex ? 'select' : null;
    }
  }
});