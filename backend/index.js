const express = require("express");
const { WebSocketServer } = require("ws");

app = express();
const port = 4000;

//initialize websocket
const websocket = new WebSocketServer({ port: 2048 });

//websocket response on connection
websocket.on("connection", (ws) => {
  console.log("New client connected!");

    ws.send("connection established");
});

    //websocket response when message received
    ws.on("message", (data) => {
        websocket.clients.forEach((client) => {
    console.log(`distributing message: ${data}`);
    client.send(`${data}`);
        });
    });

    //websocket response on error
    ws.onerror = function () {
  console.log("websocket error");
    };
    
    //websocket response on close
ws.on("close", () => console.log("Client has disconnected!"));

//run server and use websocket
app
  .use((req, res) => res.sendFile("/ws-client.html", { root: __dirname }))
  .listen(port, () => {
    console.log(`Server started, listening on port ${port}`);
  });
