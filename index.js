var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('gamma', function(msg){
    io.emit('gamma', msg);
  });
  socket.on('beta', function(msg){
    io.emit('beta', msg);
  });
  socket.on('alpha', function(msg){
    io.emit('alpha', msg);
  });
});

http.listen(2323, function(){
  console.log('listening on *:2323');
});