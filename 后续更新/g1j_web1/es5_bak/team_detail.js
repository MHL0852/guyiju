'use strict';

(function () {
  var container = $('.container');
  container.children('#title')[0].innerHTML = teamDetail.title;

  var describeText = teamDetail.describe.describeText.map(function (item) {
    switch (item.type) {
      case 'title':
        return '<p class="describeTitle">' + item.text + '</p>';
      case 'subtitle':
        return '<p class="describeSubtitle">' + item.text + '</p>';
      default:
        return '<p>' + item.text + '</p>';
    }
  }).join('');
  container.children('.describe').find('.preamble')[0].innerHTML = describeText;

  container.children('.describe').find('.img')[0].innerHTML = '<img src="' + teamDetail.describe.describeImg + '" alt="' + teamDetail.describe.imgDescribe + '">\n        <p>' + teamDetail.describe.imgDescribe + '</p>';

  var text = '';
  teamDetail.text.forEach(function (item) {
    text += ' <li>\n        <h4>\n         ' + item.title + '\n        </h4>\n        <p>\n        ' + item.text.join('</p><p>') + '\n        </p>\n      </li>';
  });

  container.children('.text_part')[0].innerHTML = text;
})();