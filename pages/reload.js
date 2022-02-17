const socketUrl = "ws://8000-ghostdevv-simpleliverelo-6zrumrwud23.ws-eu32.gitpod.io/";

const socket = new WebSocket(socketUrl);

socket.onmessage('reload', () => {
    window.location.reload()
})