(function () {
  let container = $('.productList')[0];
  let focus = $('.focus')[0]
  for (let i = 0; i < productData.length; i++) {
    let str = '';
    let products = productData[i];
    for (let j = 0; j < products.length; j++) {
      let item = products[j]
      str+=` <li class="productCell">
              <a href="${item.link}">
              <div class="img">
                <img src="${item.url}" alt="产品">
              </div>
              <span class="text">${item.text}</span>
</a>
          </li>`
    }
    
    container.innerHTML+=`<li class="part ${i===0?'active':null}"> <ul>${str}</ul></li>`
    focus.innerHTML+=`<li class="part ${i===0?'active':null}"><ul>${i+1}</ul></li>`
  }
  $('.focus')[0].addEventListener('click',function (e) {
    let i = e.target.innerHTML
    if(isNaN(i)||!i)return
    i=Number(i);
    i--
    [].forEach.call($('.focus').children('li'),function (item,index) {
      if(index == i){
        item.className = item.className+' active'
        $('.productList').children('li')[index].className = $('.productList').children('li')[index].className+' active'
      }else{
        item.className = item.className.replace('active', '')
        $('.productList').children('li')[index].className = $('.productList').children('li')[index].className.replace('active', '')
      }
    })
    let top = window.pageYOffset,
    x= 20
    let timer = setInterval(function () {
      
      scrollTo(0,x*top/20)
    
      if(x <= 0){
        clearInterval(timer)
        timer = null
      }
      x--
    },5)
  })
})()