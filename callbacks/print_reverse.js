var getHTML = require('../getHTML')

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function reverse(html) {
  var x = html.toString();
  var y = x.split(" ").reverse().join(" ");
  console.log(y)
}
  
getHTML(requestOptions, reverse)