var getHTML = require('./getHTML');
var printHTML = require('./getHTML')

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

getHTML(requestOptions, printHTML)