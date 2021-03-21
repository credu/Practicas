var express = require('express');
var app = express();

var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(express.static('./'));

var qr = 'asd';

server.listen(3000, function(){
    console.log('success conected node server');

    io.on('connection', function(socket){
        console.log('auth value : ' + socket.id);
        console.log("El nodo con ip :" + socket.handshake.address + " se ha conectado");

        socket.emit('sendQRcode', qr)

        // socket.on("sendQRcode", function (details) {
        //     socket.broadcast.emit("sendQRcode", details);
        // });
    });
})