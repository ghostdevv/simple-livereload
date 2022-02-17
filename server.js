import { WebSocketServer } from 'ws';
import CheapWatch from 'cheap-watch';

const dir = 'pages' // Dir to watch
const socketPort = 8000;

const server = new WebSocketServer({ port: socketPort })
const watch = new CheapWatch({ dir });

await watch.init();

const sockets = [];

server.on('connection', (socket) => {
    console.log('New Socket connected')
    sockets.push(socket);
})

watch.on('+', reloadSite);
watch.on('-', reloadSite);

function reloadSite () {
    console.log('Reloading Site...');
}
