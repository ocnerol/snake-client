const net = require("net");

// establishes a connection with the game server
const connect = function () {
  // conn object returned by net.createConnection represents the connection with the server
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();