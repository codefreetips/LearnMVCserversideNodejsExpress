﻿# MVCserversideNodejsExpre

1) install node
2) install the NTVS to vs 2015
3) select a blank Nodejs project
4) install Express -- middleware
5) add settings.js  declare globe variable

exports.settings = {
    
    dbConfig : {
        user: "",
        password: "",
        server: "s11.winhost.com",
        database: "",
        port: 1433
    },
    webPort :  9000,
    httpMsgFormat : "HTML"
} 
 

6) Modify the App.js
 
var settings = require('./settings');

var http = require('http');


http.createServer(function (req, res) { 
 
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello foo')

}).listen(settings.webPort, settings.localhost);


console.log('server running at http://'+settings.globle.localhost+':'+settings.globle.webPort);


http://expressjs.com/en/4x/api.html

http://www.tutorialspoint.com/nodejs/nodejs_express_framework.htm

7) Modify the app.js , using Express

var settings = require('./settings');

var express = require('express');

var app = express();

app.get('/', function (req, res) { 
    res.send('Hello foo Exprss'); 
});


app.listen(settings.globle.webPort, function (err) {
    console.log('ready for it');
    console.log('server running at http://' + settings.globle.localhost + ':' + settings.globle.webPort);
})


7) Modify the app.js  add "/book"


app.get('/books', function (req, res) {
    res.send('Hello foo books');
});


8) download free bootstrap template

http://www.bootstrapzero.com/

9) Create folders under the root
public->css
public->js
src->views 

10) Modify the app.js

app.use(express.static('public'));
app.use(express.static('src/views'));

click http://localhost:9000/css/styles.css,  will see the css content
click http://localhost:9000/index.html


11) Modify the app.js
