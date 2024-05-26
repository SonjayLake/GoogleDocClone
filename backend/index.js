const { WebSocketServer } = require("ws");

//initialize websocket
const wss = new WebSocketServer({ port: 2048 });

//websocket response on connection
wss.on("connection", (ws) => {
  ws.on("message", (data) => {
    console.log(`Received ${data} from frontend websocket`);
  });
});
