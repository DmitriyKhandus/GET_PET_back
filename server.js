const { createServer } = require('http');
const { app, sessionParser } = require('./app');
const wsServer = require('./websocket');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

const server = createServer(app);

server.on('upgrade', (request, socket, head) => {
  console.log('handshake...');
  sessionParser(request, {}, () => {
    if (!request.session.user.id) {
      socket.write('Status 401');
      socket.destroy();

      return;
    }
    console.log('====>', head.toString());
    console.log('Session is parsed..');

    wsServer.handleUpgrade(request, socket, head, (ws) => {
      wsServer.emit('connection', ws, request);
    });
  });
});

server.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});
