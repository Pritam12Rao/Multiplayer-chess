import { WebSocketServer } from "ws";

console.log("TS SERVER START");

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (ws) => {
  console.log("TS CLIENT CONNECTED");
  ws.send("hello from ts");
});
