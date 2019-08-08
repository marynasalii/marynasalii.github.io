var express = require('express');
var app = express();

const port = 3000;

app.use(express.static(__dirname + '/'));

app.get('/', function (request, response) {
    response.sendFile(__dirname + '/index.html');
});

app.get('/download', function (req, res) {
    var file = __dirname + '/public/download.pdf';
    res.download(file);
});

app.listen(port);