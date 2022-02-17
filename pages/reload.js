const socketUrl = "ws://localhost:8000";

const socket = new WebSocket(socketUrl);

console.log('[live-reload] Connecting');

socket.onopen = () => {
    console.log('[live-reload] Connected')
}

socket.onmessage = () => {
    console.log('[live-reload] Reloading');
    window.location.reload();
}