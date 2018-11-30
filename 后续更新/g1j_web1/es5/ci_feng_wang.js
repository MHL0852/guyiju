'use strict';

(function () {
  //  part1
  ~function () {
    var str = '';
    var data = detailData.part1;
    var part = $('.part1');
    
    part.children('.main_title').find('.number')[0].innerHTML = data.title.num;
    part.children('.main_title').find('.cn')[0].innerHTML = data.title.cn;
    part.children('.main_title').find('.en')[0].innerHTML = data.title.en;
    
    part.children('.describe').find('img')[0].src=data.content.url
    part.children('.describe').find('img')[0].alt=data.content.describe
    part.children('.describe').find('.title')[0].innerText=data.content.title
    part.children('.describe').find('.text')[0].innerText=data.content.text
  }();
  
  //  part2
  ~function () {
    var str = '';
    var data = detailData.part2;
    var part = $('.part2');
  
    part.children('.main_title').find('.number')[0].innerHTML = data.title.num;
    part.children('.main_title').find('.cn')[0].innerHTML = data.title.cn;
    part.children('.main_title').find('.en')[0].innerHTML = data.title.en;
  
    var List = part.children('.describe').find('li')
    for (let i = 0; i < data.content.length; i++) {
      if(List[i]){
        List[i].getElementsByTagName('img')[0].src=data.content[i].url;
        List[i].getElementsByTagName('img')[0].alt=data.content[i].describe
      }
    }
  }();
  
  //  part3
  ~function () {
    var str = '';
    var data = detailData.part3;
    var part = $('.part3');
  
    part.children('.main_title').find('.number')[0].innerHTML = data.title.num;
    part.children('.main_title').find('.cn')[0].innerHTML = data.title.cn;
    part.children('.main_title').find('.en')[0].innerHTML = data.title.en;
    part.children('.describe').find('.image').children('img')[0].src=data.content.image.url;
    part.children('.describe').find('.image').children('img')[0].alt=data.content.image.describe;
    
    var titList = part.children('.describe').find('.title');
    var txtList = part.children('.describe').find('.text');
    for (let i = 0; i < data.content.article.length; i++) {
      (function () {
        var item = data.content.article[i];
        if(titList[i]){
          titList[i].innerText=item.tit;
        }
        if(txtList[i]){
          txtList[i].innerText=item.text;
        }
      })()
    }
  }();
  
  //  part4
  ~function () {
    var str = '';
    var data = detailData.part4;
    var part = $('.part4');
  
    part.children('.main_title').find('.number')[0].innerHTML = data.title.num;
    part.children('.main_title').find('.cn')[0].innerHTML = data.title.cn;
    part.children('.main_title').find('.en')[0].innerHTML = data.title.en;
  
    
    part.children('.describe').find('.ce_feng_wang').children('img')[0].src = data.content.prod.url;
    part.children('.describe').find('.steps').children('img')[0].src = data.content.steps.url;
    
    part.children('.describe').find('.ce_feng_wang').children('img')[0].alt = data.content.prod.describe;
    part.children('.describe').find('.steps').children('img')[0].alt = data.content.steps.describe;
  }();
  
  //  part5
  ~function () {
    var str = '';
    var data = detailData.part5;
    var part = $('.part5');
  
    part.children('.main_title').find('.number')[0].innerHTML = data.title.num;
    part.children('.main_title').find('.cn')[0].innerHTML = data.title.cn;
    part.children('.main_title').find('.en')[0].innerHTML = data.title.en;
    
    var imgList = part.children('.describe').find('img')
  
    for (let i = 0; i < data.content.length; i++) {
      (function () {
        var item = data.content[i];
        if(imgList[i]){
          imgList[i].src=item.url
        }
      })()
      
    }
  }();
  
  //  part6
  ~function () {
    var str = '';
    var data = detailData.part6;
    var part = $('.part6');
  
    part.children('.main_title').find('.number')[0].innerHTML = data.title.num;
    part.children('.main_title').find('.cn')[0].innerHTML = data.title.cn;
    part.children('.main_title').find('.en')[0].innerHTML = data.title.en;
    
    var con = part.find('ul')[0];
  
    for (let i = 0; i < data.content.length; i++) {
      (function () {
        var item = data.content[i]
        str += ' <li class="productCell"><a href="' + item.link + '"><div class="img"><img src="' + item.url + '" alt="\u4EA7\u54C1"></div><span class="text">' + item.text + '</span><a href="'+item.shop+'"><span class="buyBtn">购买</span></a></a></li>';
      })()
    }
    con.innerHTML = str;
  }();
})();