var https = require('https');
var buff = ''
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step2.html',
};

function getAndPrintHTMLChunks (options, callback) {
  
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

getAndPrintHTMLChunks(requestOptions, printHTML)