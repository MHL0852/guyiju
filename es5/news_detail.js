'use strict';

(function () {
  var container = $('.container');
  container.children('#title')[0].innerHTML = newsDetail.title;

  var describeText = newsDetail.describe.describeText.map(function (item) {
    return '<p>' + item + '</p>';
  }).join('');
  container.children('.describe').find('.preamble')[0].innerHTML = describeText;

  container.children('.describe').find('.img')[0].innerHTML = '<img src="' + newsDetail.describe.describeImg + '" alt="' + newsDetail.describe.imgDescribe + '">\n        <p>' + newsDetail.describe.imgDescribe + '</p>';

  var text = '';
  newsDetail.text.forEach(function (item) {
    text += ' <li>\n        <h4>\n         ' + item.title + '\n        </h4>\n        <p>\n        ' + item.text.join('</p><p>') + '\n        </p>\n      </li>';
  });

  container.children('.text_part')[0].innerHTML = text;
})();