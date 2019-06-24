var Websocket = require('ws');

const ws = new Websocket('ws://localhost:8081/');

ws.onmessage = function (event) {
    console.log(event.data);
}

ws.onclose = function () {
    console.log('server close');

}
