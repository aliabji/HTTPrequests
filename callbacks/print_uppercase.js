var getHTML = require('../getHTML')

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function upper(html) {
  var x = html.toString();
  var y = x.toUpperCase();
  console.log(y)
}
  
getHTML(requestOptions, upper)