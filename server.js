'use strict';

const express = require('express');
const socketIO = require('socket.io');
const path = require('path');
var beaconData = null;

//Creating constants for port and index page that is launched when the server starts
const PORT = process.env.PORT || 3000;
const INDEX = path.join(__dirname, 'index.html');

//The following code creates a server that is lisening for connections on port 3000
const server = express()
  .use((req, res) => res.sendFile(INDEX) )
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

const io = socketIO(server);

//Method that reacts to connctions to server
io.on('connection', (socket) => {
  console.log('Client connected');

  //when a message is recived it's data is to beaconData variable
  socket.on('message', function(data){
    beaconData = data ;
  });
  socket.on('disconnect', () => console.log('Client disconnected'));
});

// in set time interval every client that is connected to server recieves message with beaconData value
setInterval(() => io.emit('beaconData', beaconData), 500);
