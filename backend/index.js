const { WebSocketServer } = require("ws");

//initialize websocket
const wss = new WebSocketServer({ port: 2048 });

//websocket response on connection
wss.on("connection", (ws) => {
  console.log("New client connected!");

  ws.send("connection established");
  ws.on("close", () => {
    console.log("Client connection closd");
  });

  ws.on("message", (data) => {
    ws.send("Pong");
  });
});
