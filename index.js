var express = require('express');
var app = express();
var path = require('path');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.get('/onboard/step2', function(request, response) {
  response.writeHead(301,
  {Location: '/'}
);
response.end();
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
