(function () {
//  part0
  ~function () {
    let str = '';
    let data = storyData.part0
    let part0 = $('.part0');
    part0.children('H2')[0].innerHTML = data.title
    
    part0.children('.img').find('p')[0].style.backgroundImage = `url("${data.url}")`;
    part0.children('.img').find('p')[1].innerHtml = data.imgDescribe;
    data.text.forEach(item => {
      str += `     <p class="text">
       ${item}
     </p>`
    })
    part0[0].innerHTML += str
  }();
  
  //part1
  ~function () {
    let str = '';
    let data = storyData.part1
    let part = $('.part1');
    data.content.forEach(item=>{
      let innerTXT = '<h3>'+item.title+'</h3>';
        item.text.forEach(i=>{
          innerTXT+=`     <p class="text">
          ${i}
        </p>`
        })
      str+=innerTXT
    })
  
    part[0].innerHTML += str
  }();
})()