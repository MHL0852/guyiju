'use strict';

var ass = import('./Date/Data1.js');
ass.then(function (res) {
  console.log(res.default);
}).catch(function (err) {
  console.log(err);
});
