var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step2.html',
};

function getHTML (options, callback) {
  var buff = ''
  https.get(options, function (response) {
  
    response.on('data', function(data) {
      buff += data
    });
    
    response.on('end', function() {
      callback(buff)
    })
  })
}

function printHTML(html) {
  console.log(html);
}

module.exports = getHTML
