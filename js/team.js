(function () {
  let data = teamData.content
  let container = $('.teamList')[0];
  let focus = $('.focus')[0]
  for (let i = 0; i < data.length; i++) {
    let str = '';
    let teams = data[i];
    for (let j = 0; j < teams.length; j++) {
      let item = teams[j]
      str+=`  <li>
          <div class="img">
            <img src="${item.url}" alt="">
          </div>
          <p class="title">${item.title}</p>
          <p class="text">${item.text}</p>
          <p class="examine clear">
          <a href="${item.link}">
          <button>查看</button>
</a>
</p>
        </li>`
    }
    
    container.innerHTML+=`<li class="describe ${i===0?'active':null}"> <ul>${str}</ul></li>`
    focus.innerHTML+=`<li class="part ${i===0?'active':null}"><ul>${i+1}</ul></li>`
  }
  $('.focus')[0].addEventListener('click',function (e) {
    let i = e.target.innerHTML
    i--
    if(isNaN(i))return
    i=Number(i);
    [].forEach.call($('.focus').children('li'),function (item,index) {
      if(index == i){
       
        item.className = item.className+' active'
        $('.teamList').children('li')[index].className = $('.teamList').children('li')[index].className+' active'
      }else{
        item.className = item.className.replace('active', '')
        $('.teamList').children('li')[index].className = $('.teamList').children('li')[index].className.replace('active', '')
      }
    })
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
  })
})()