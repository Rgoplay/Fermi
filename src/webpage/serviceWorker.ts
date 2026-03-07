self.addEventListener('install', () => {
  console.log('Service worker installed');
});

self.addEventListener('message', (event) => {
    if (event.data === 'connect') {
        const socket = new WebSocket('wss://gateway.rory.server.spacebar.chat/?encoding=json&v=9');

        socket.addEventListener('message', (message) => {
            console.log("message received:" + message);
        });
    }
});