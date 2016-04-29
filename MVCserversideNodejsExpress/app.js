
var settings = require('./settings');

var express = require('express');

var app = express();

app.use(express.static('public'));
app.use(express.static('src/views'));


app.get('/', function (req, res) { 
    res.send('Hello foo Exprss'); 
});


app.get('/books', function (req, res) {
    res.send('Hello foo books');
});


app.listen(settings.globle.webPort, function (err) {
    console.log('ready for it');
    console.log('server running at http://' + settings.globle.localhost + ':' + settings.globle.webPort);
})

//var http = require('http');


//http.createServer(function (req, res) { 
 
//    res.writeHead(200, { 'Content-Type': 'text/plain' });
//    res.end('Hello foo')

//}).listen(settings.globle.webPort, settings.globle.localhost);


//console.log('server running at http://'+settings.globle.localhost+':'+settings.globle.webPort);