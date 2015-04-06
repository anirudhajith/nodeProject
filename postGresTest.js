var pg = require('pg');
var http = require('http');

var connectionString = process.env.DATABASE_URL || 'postgres://anirudh:Ganymede@localhost:5432/DB1';
var address = '127.0.0.1';
var port = 8000;

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8', 'Access-Control-Allow-Origin':'*'});
    var client = new pg.Client(connectionString);
    client.connect();
    var query = client.query('SELECT * FROM neighbors;');

    query.on("row", function (row, result) {
        result.addRow(row);
    });

    query.on("end", function (result) {
        var dataa = JSON.stringify(result.rows);
        res.write(dataa)
        res.end();
        client.end();
    });
}).listen(port, address);



