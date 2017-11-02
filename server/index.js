const app = require("express")();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const cors = require("cors");
const { json, urlencoded } = require("body-parser");
const curl = require("./lib/curl");

app.set("io", io);

app
  .use(cors())
  .use(urlencoded({ extended: false }))
  .use(json())
  .use("/curl", curl);

io.set('authorization', function (handshake, callback) {
  console.log(handshake.headers);
  callback(null, true);
});

server.listen(3000);
