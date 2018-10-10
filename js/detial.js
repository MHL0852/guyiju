(function () {
//  part1
  ~function () {
    var str = '';
    var data = detailData.part1;
    var part = $('.part1');
    
    part.children('.title')[0].innerHTML = data.title
    part.children('.subtitle')[0].innerHTML = data.subTitle
    
    data.content.forEach(function (item) {
      str += `<li class="productCell">
          <div class="img">
            <div class="imgCon">
              <img src="${item.url}" alt="">
            </div>
          </div>
          <div class="describe">
            <span>${item.text}</span>
          </div>
        </li>`
    })
    part.children('.products')[0].innerHTML = str
    
    
  }()

//  part2
  ~function () {
    var str = '';
    var data = detailData.part2;
    var part = $('.part2');
    
    part.children('.title')[0].innerHTML = data.title
    part.children('.subtitle')[0].innerHTML = data.subTitle
    
    part.children('.content').find('.img')[0].innerHTML = `<img src="${data.content.url}" alt="">`
    data.content.text.forEach(item => {
      str += `<p class="text">${item}</p>`
    })
    str += `  <a href='${data.content.btn_href}'><p class="more">
              ${data.content.btn}
            </p></a>`
    part.children('.content').find('.storyText')[0].innerHTML = str
  }()

//  part3
  ~function () {
    var str = '';
    var data = detailData.part3;
    var part = $('.part3');
    
    part.children('.title')[0].innerHTML = data.title
    part.children('.subtitle')[0].innerHTML = data.subTitle
    part.children('.container')[0].innerHTML = `<img src="${data.url}" alt="">`
    
  }()

//  part4
  ~function () {
    var str = '';
    var data = detailData.part4;
    var part = $('.part4');
    
    part.children('.title')[0].innerHTML = data.title
    part.children('.subtitle')[0].innerHTML = data.subTitle
    
    part.children('.container').find('.describe')[0].innerHTML = `<span>${data.describe}</span>`
    
    data.content.forEach(item => {
      str += ` <li>
            <img src="${item.url}" alt="">
          </li>`
    })
    
    part.children('.container').find('ul')[0].innerHTML = str
    
    
  }()

//  part5
  ~function () {
    var str = '';
    var data = detailData.part5;
    var part = $('.part5');
    
    part.children('.title')[0].innerHTML = data.title
    part.children('.subtitle')[0].innerHTML = data.subTitle
    
    data.content.forEach(item => {
      str += `  <li class="productCell">

            <div class="img">
              <div class="imgCon">
                <img src="${item.url}" alt="">
              </div>
            </div>
            <div class="describe">
              <span>${item.text}</span>
            </div>

          </li>`
    })
    
    part.children('.container').find('ul')[0].innerHTML = str
    
  }()

//  part6
  ~function () {
    var str = '';
    var data = detailData.part6;
    var part = $('.part6');
    
    part.children('.title')[0].innerHTML = data.title
    part.children('.subtitle')[0].innerHTML = data.subTitle
    
    data.content.forEach(item => {
      str += `<li>
          <a href="${item.href}">
            <div class="img">
              <img src="${item.url}" alt="">
            </div>
            <p class="text">${item.text}</p>
                        </a>
          </li>`
    })
    
    part.children('.container').find('ul')[0].innerHTML = str
    
  }()
})()