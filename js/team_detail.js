(function () {
  let container = $('.container');
  container.children('#title')[0].innerHTML = teamDetail.title;
  
  let describeText = teamDetail.describe.describeText.map(item=>{
    switch(item.type){
      case 'title':
        return `<p class="describeTitle">${item.text}</p>`;
      case 'subtitle':
        return `<p class="describeSubtitle">${item.text}</p>`;
      default:
        return `<p>${item.text}</p>`
    }

  }).join('');
  container.children('.describe').find('.preamble')[0].innerHTML = describeText;
  
  container.children('.describe').find('.img')[0].innerHTML = `<img src="${teamDetail.describe.describeImg}" alt="${teamDetail.describe.imgDescribe}">
        <p>${teamDetail.describe.imgDescribe}</p>`;
  
  let text = '';
  teamDetail.text.forEach(item=>{
    text+=` <li>
        <h4>
         ${item.title}
        </h4>
        <p>
        ${item.text.join('</p><p>')}
        </p>
      </li>`
  })
  
  container.children('.text_part')[0].innerHTML = text;
  
})()