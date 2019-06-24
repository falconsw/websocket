var Websocket = require('ws').Server;

var wss = new Websocket({port:8081});

wss.on('connection', function (socket) {

    console.log("New Client Connected");

    socket.on('message', function(){
        wss.clients.forEach(function each(client){
            client.send('data')
        })
    });

    socket.on('close', function () {
        console.log('Client Closed');
    });

});


const brodcast = function () {
    wss.clients.forEach(function each(client){
        client.send('new data');
    })
}

setInterval(brodcast, 1000);
