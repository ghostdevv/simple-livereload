import { WebSocketServer } from 'ws';
import CheapWatch from 'cheap-watch';

const dir = 'pages' // Dir to watch
const socketPort = 8000;

const server = new WebSocketServer({ port: socketPort })
const watch = new CheapWatch({ dir });

await watch.init();

const sockets = new Set();

server.on('connection', (socket) => {
    const id = Date.now();

    console.log(`Socket ${id} Connected`);
    sockets.add(socket);

    socket.on('close', () => {
        console.log(`Socket ${id} disconnected`);
        sockets.delete(socket);
    })
})

watch.on('+', reloadSite);
watch.on('-', reloadSite);

function reloadSite () {
    console.log('Reloading Site...');

    for (const socket of sockets) 
        socket.send('message');
}

console.log('Live Reload Server Started')