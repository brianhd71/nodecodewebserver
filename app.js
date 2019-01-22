var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(__dirname + '/online-users.html', 'utf8').pipe(res);
    
}).listen(8081, '127.0.0.1');