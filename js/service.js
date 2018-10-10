(function () {
  let data = serviceData.content
  let container = $('.qaList')[0];
  let focus = $('.focus')[0]
  
  let btns = $('.btn').children('button');
  
  btns[0].addEventListener('click', function () {
    btns[0].className += ' active';
    btns[1].className = btns[1].className.replace(' active', '')
    
    getFlull();
  }, false)
  
  btns[1].addEventListener('click', function () {
    btns[1].className += ' active';
    btns[0].className = btns[0].className.replace(' active', '')
    getNew();
  }, false);
  
  let getNew = function () {
    let qaList = data[data.length-1];
    let item = qaList[qaList.length-1];
  
  
    container.innerHTML = `<li class="describe active"> <ul><li class="qaCell">
              <div class="question clear">
                <span>${item.question}</span>
                <p class="time">
                 ${item.time}
                </p>
                <p class="data">
                  ${item.date}
                </p>

              </div>
              <p class="answer">
                ${item.answer}
              </p>
            </li></ul></li>`
    focus.innerHTML = `<li class="part active"><ul>1</ul></li>`
  };
  
  let getFlull = function () {
    container.innerHTML = '';
    focus.innerHTML = '';
    for (let i = 0; i < data.length; i++) {
      let str = '';
      let teams = data[i];
      for (let j = 0; j < teams.length; j++) {
        let item = teams[j]
        str += `  <li class="qaCell">
              <div class="question clear">
                <span>${item.question}</span>
                <p class="time">
                 ${item.time}
                </p>
                <p class="data">
                  ${item.date}
                </p>

              </div>
              <p class="answer">
                ${item.answer}
              </p>
            </li>`
      }
      
      container.innerHTML += `<li class="describe ${i === 0 ? 'active' : null}"> <ul>${str}</ul></li>`
      focus.innerHTML += `<li class="part ${i === 0 ? 'active' : null}"><ul>${i + 1}</ul></li>`
    }
  };
  getFlull();
  $('.focus')[0].addEventListener('click', function (e) {
    let i = e.target.innerHTML
    i--
    if (isNaN(i)) return
    i = Number(i);
    [].forEach.call($('.focus').children('li'), function (item, index) {
      if (index == i) {
        
        item.className = item.className + ' active'
        $('.qaList').children('li')[index].className = $('.qaList').children('li')[index].className + ' active'
      } else {
        item.className = item.className.replace('active', '')
        $('.qaList').children('li')[index].className = $('.qaList').children('li')[index].className.replace('active', '')
      }
    })
  })
})();