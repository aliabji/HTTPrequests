var getHTML = require('../getHTML')

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function lower(html) {
  var x = html.toString();
  var y = x.toLowerCase();
  console.log(y)
}
  
getHTML(requestOptions, lower)