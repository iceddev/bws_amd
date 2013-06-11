var BinaryServer = require('binaryjs').BinaryServer;
var fs = require('fs');
var path = require('path');

var server = BinaryServer({port: 9000});

server.on('connection', function(client){
  client.on('stream', function(stream, meta){
    console.log(meta);
    var file = fs.createReadStream(path.normalize(__dirname + '/' + meta.file));
    file.pipe(stream);
  });
});