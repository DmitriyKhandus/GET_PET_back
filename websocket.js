const WebSocket = require('ws');
const { Message } = require('./db/models');

const wsServer = new WebSocket.Server({
  noServer: true, clientTracking: false,
});

const clientMap = new Map();

wsServer.on('connection', (ws, request) => {
  const { id, name } = request.session.user;

  ws.id = id;
  clientMap.set(id, ws);

  ws.on('message', async (message) => {
    const parsedMessage = JSON.parse(message);
    parsedMessage.payload = JSON.parse(parsedMessage.payload);
    console.log(parsedMessage);

    switch (parsedMessage.type) {
      case 'USER_CONNECTED':
        clientMap.forEach((client) => {
          if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify({
              type: parsedMessage.type,
              payload: { name },
            }));
          }
        });
        break;

      case 'NEW_MESSAGE':
        await Message.create({
          messageBody: parsedMessage.payload.message,
          senderId: request.session.user.id,
          receiverId: parsedMessage.payload.receiver,
        });
        clientMap.forEach((client) => {
          if (client.readyState === WebSocket.OPEN && client.id === parsedMessage.payload.receiver) {
            client.send(JSON.stringify({
              type: parsedMessage.type,
              payload: {
                name: parsedMessage.payload.name,
                message: parsedMessage.payload.message,
              },
            }));
          }
        });
        break;
      default:
        break;
    }
  });
});

module.exports = wsServer;