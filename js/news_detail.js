(function () {
  let container = $('.container');
  container.children('#title')[0].innerHTML = newsDetail.title;
  
  let describeText = newsDetail.describe.describeText.map(item=>{
    return `<p>${item}</p>`
  }).join('');
  container.children('.describe').find('.preamble')[0].innerHTML = describeText;
  
  container.children('.describe').find('.img')[0].innerHTML = `<img src="${newsDetail.describe.describeImg}" alt="${newsDetail.describe.imgDescribe}">
        <p>${newsDetail.describe.imgDescribe}</p>`;
  
  let text = '';
  newsDetail.text.forEach(item=>{
    text+=` `
  })
  
  container.children('.text_part')[0].innerHTML = text;
  
})()