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
    socket.emit('numberTime', [{'number':23,'time':1},{'number':34,'time':5},{'number':88,'time':3},{'number':90,'time':2}]);
})
