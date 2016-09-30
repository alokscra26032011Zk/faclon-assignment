var express=require('express');
var app=express();
var server=require('http').createServer(app);
var io=require('socket.io');


server.listen(process.env.PORT || 3000);
console.log('Server running...')
app.get('/',function(req,res){
  res.sendFile(__dirname+'/public/index.html')
})


var listener = io.listen(server);
listener.sockets.on('connection', function(socket){
  setInterval(function(){
      socket.emit('number', {'number': Math.floor(Math.random() * 100) + 1});
  }, 1000);
})
