var https = require('https');
var buff = ''
var userHost = ''
var userPath = ''
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step2.html',
};

function getAndPrintHTMLChunks (options) {
  
  https.get(options, function (response) {
  
    response.on('data', function(data) {
      buff += data
    });
    
    response.on('end', function() {
      console.log(buff + '\nResponse stream complete.')
    })
  })
}

getAndPrintHTMLChunks(requestOptions)