const express = require("express");
const http = require("http");
const app = express();
const routes = require("./routes");
const sockets = require("./routes/sockets");
const socketIo = require('socket.io');

const PORT = process.env.PORT || 3001;

const server = http.createServer(app);
const io = socketIo(server); // SocketIO server
const ioMessages = io.of('/messages');

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    console.log('serve client')
    app.use(express.static("client/build"));
  }

app.use(routes);

// sockets "routes"
sockets(ioMessages)

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
module.exports = app;