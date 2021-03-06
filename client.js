const net = require("net");
const { IP , PORT } = require('./constants');

// establishes a connection with the game server

const connect = function () {
  // conn object returned by net.createConnection represents the connection with the server
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.on('connect', (data) => {

    console.log('Successfully connected to the server!');
    conn.write('Name: LRN');
    // let delay = 1000;
    // setInterval(() => {
    //   conn.write('Move: down');
    //   delay += 500;
    // }, delay);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  

  conn.on('data', (data) => {

    console.log(data);

  });

  return conn;
};

module.exports = {
  connect
};