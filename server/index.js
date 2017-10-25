const app = require("express")();
const server = require("http").Server(app);
const io = require("socket.io")(server);

server.listen(3000);

io.on("connection", function (socket) {
  socket.emit("from js", { hello: "world" });
  socket.on("from python", function (data) {
    console.log("from python", data);
  });
});
