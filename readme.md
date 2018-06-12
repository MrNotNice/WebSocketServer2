# Websocket Server

A server that can recive String type messages and transver them to every device that is conected to it. In order to recive server message device needs to be connected to server and lisening to messages. 

This is modified example that originaly was taken from: https://devcenter.heroku.com/articles/node-websockets

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project.

### Prerequisites

You will need to have Git instaled on your system. 
To install git you can follow this totorial: https://www.atlassian.com/git/tutorials/install-git


### Installing

In order to get this example you need to downlond it or copy the git link in your terminal/cmd.

git clone https://github.com/MrNotNice/WebSocketServer2.git

To launch the server localy:
  1. In Terminal/cmd, enter:
  
      cd path/to/servers/folder
    
  2. In Terminal, enter:
  
      npm start
    
  3. In webbrowser enter:
  
      http://localhost:3000
      
      In this webpages console you can see all the information that is being transmited using server.
     
To atatch the server to web application:

  In order to connect to server you need to create a script with variable.
  this variable needs to have value of io() if you are runing the server localy.
  if the server is being hosted value is io("full host adress").
  
      var socket = io("https://websocket-server-2018.herokuapp.com");

   The following is a example of sending message with array to the server:
   
      var beaconData = [300, 400, 350];
      socket.emit('message', JSON.stringify(beaconData));
      

   The following method recives messages that are named beaconData.
   Then the message is converted to object and printed out to console.
   
      socket.on('beaconData', function(beaconData) {
        console.log(JSON.parse(beaconData));


## Deployment

In order to lauch this server you need to put in a git repository. And then lauch it using a hosting service that can run Node.js.
You can use https://devcenter.heroku.com/start.


## Authors

* **Vilius Jankauskas** - *Curent modyfied version*
* **hunterloftis** - *Full original example* - (https://github.com/heroku-examples/node-socket.io.git)




