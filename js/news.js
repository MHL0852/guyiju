(function () {
  let data = newsData.content
  let container = $('.newsList')[0];
  let focus = $('.focus')[0]
  
  //全部按钮与最新按钮切换
  let btns = $('.btn').children('button');
  
  btns[0].addEventListener('click', function () {
    btns[0].className += ' active';
    btns[1].className = btns[1].className.replace(' active', '')
    getFull();
    animate_news()
  }, false)
  
  btns[1].addEventListener('click', function () {
    btns[1].className += ' active';
    btns[0].className = btns[0].className.replace(' active', '')
    getNew();
    animate_news()
  }, false);
  
  let getNew = function () {
    let news = data[data.length-1];
    let item = news[news.length-1];
  
    container.innerHTML = `<li class="describe active"> <ul> <li>
  <a href="${item.href}">
          <div class="img">
            <img src="${item.url}" alt="">
          </div>
          <p class="title">${item.title}</p>
          <p class="text">${item.text}</p>
          <p class="time">${item.date}</p>
          </a>
        </li></ul></li>`
    focus.innerHTML = `<li class="part active"><ul>1</ul></li>`
  };

  let getFull = function(){
    container.innerHTML = '';
    focus.innerHTML = '';
    for (let i = 0; i < data.length; i++) {
      let str = '';
      let teams = data[i];
      for (let j = 0; j < teams.length; j++) {
        let item = teams[j]
        str += `  <li>
  <a href="${item.href}">
          <div class="img">
            <img src="${item.url}" alt="">
          </div>
          <p class="title">${item.title}</p>
          <p class="text">${item.text}</p>
          <p class="time">${item.date}</p>
          </a>
        </li>`
      }
    
      container.innerHTML += `<li class="describe ${i === 0 ? 'active' : null}"> <ul>${str}</ul></li>`
      focus.innerHTML += `<li class="part ${i === 0 ? 'active' : null}"><ul>${i + 1}</ul></li>`
    }
  };
  
  getFull();
  $('.focus')[0].addEventListener('click', function (e) {
    let i = e.target.innerHTML
    i--
    if (isNaN(i)) return
    i = Number(i);
    [].forEach.call($('.focus').children('li'), function (item, index) {
      if (index == i) {
        
        item.className = item.className + ' active'
        $('.newsList').children('li')[index].className = $('.newsList').children('li')[index].className + ' active'
      } else {
        item.className = item.className.replace('active', '')
        $('.newsList').children('li')[index].className = $('.newsList').children('li')[index].className.replace('active', '')
        $(item).find('li').removeClass('animated')
      }
    })
    animate_news()
  })
})();

//动画
let animate_news = function () {
  var duration = 1500,
    effect = animateEffect.Circ.easeOut;
  var win = utils.winBox('clientHeight') + utils.winBox('scrollTop');
  
  var active = $('.newsList').children('.active');
  var newsList = active.find('li');
  [].forEach.call(newsList, item => {
    var A = utils.offset(item)['top'];
    if (win + 200 > A && !$(item).hasClass('animated')) {
      animate({
        curEle: item,
        target: {top: 0, opacity: 1},
        duration,
        effect
      });
      $(item).addClass('animated')
    }
  })
}
animate_news();
window.addEventListener('scroll', animate_news, false);