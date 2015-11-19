var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var device = require('device')

app.get('/', function(req, res){
	var mydevice = device('');
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
  socket.on('right', function(msg){
    io.emit('right', msg);
  });
  socket.on('left', function(msg){
    io.emit('left', msg);
  });
});

http.listen(2323, function(){
  console.log('listening on *:2323');
});