
#Websocket Server

A server that can receive String type messages and transfer them to every device that is connected to it. In order to receive server message device needs to be connected to the server and listening to messages. 

This is modified example that originally was taken from totorial: https://devcenter.heroku.com/articles/node-websockets

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project.

### Prerequisites

You will need to have Git installed on your system. 
To install git you can follow this tutorial: https://www.atlassian.com/git/tutorials/install-git


### Installing

In order to get this example, you need to download it or copy the git link in your terminal/cmd.

git clone https://github.com/MrNotNice/WebSocketServer2.git

#### To launch the server localy:
  1. In Terminal/cmd, enter:
  
      cd path/to/servers/folder
    
  2. In Terminal, enter:
  
      npm start
    
  3. In webbrowser enter:
  
      http://localhost:3000
      
      In this webpages console, you can see all the information that is being transmitted using the server.
     
#### To attach the server to the web application:

  In order to connect to the server, you need to create a script with a variable.
  this variable needs to have a value of io() if you are running the server locally.
  if the server is being hosted value is io("full host address").
  
      var socket = io("https://websocket-server-2018.herokuapp.com");

   The following is a example of sending message with array to the server:
   
      var beaconData = [300, 400, 350];
      socket.emit('message', JSON.stringify(beaconData));
      

   The following method receives messages that are named beaconData.
   Then the message is converted to object and printed out to console.
   
      socket.on('beaconData', function(beaconData) {
        console.log(JSON.parse(beaconData));


## Deployment

In order to launch this server, you need to put in a git repository. And then launch it using a hosting service that can run Node.js.
You can use https://devcenter.heroku.com/start.


## Authors

* **Vilius Jankauskas** - *Curent modyfied version*
* **hunterloftis** - *original example* - (https://github.com/heroku-examples/node-socket.io.git)


