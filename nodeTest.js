var address = '127.0.0.1';
var port = 8000;
var filename = '/home/anirudh/nodeProject/Homepage2/index.html';

var http = require('http');
var fs = require('fs');



http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    fs.readFile(filename, 'utf8', function(err, data) {
        if (err) throw err;
        //console.log(data);
        var cont = data;
        res.write(cont);
        res.end();
    });
}).listen(port, address);
console.log('Server running at http://' + address + ':' + port + '/');

//git Test!!
//git Test 2!!
