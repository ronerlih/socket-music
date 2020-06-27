import io from 'socket.io-client';
const ENDPOINT = 
    process.env.NODE_ENV === 'development'
        ? 'http://localhost:3001/'
        : 'https://socket-music.herokuapp.com/';
const socket = io(ENDPOINT);
socket.on('connect', function(){console.log('connected')});
socket.on('event', function(data){console.log(data)});
socket.on('disconnect', function(){console.log('disconnected')});

export default {
    socket: socket,
    send: (position, cb) => 
        socket.emit('canvas', position, cb),
    disconnect: () => {
        socket.disconnect();
    }
}