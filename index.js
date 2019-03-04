import express from 'express';
import Http from 'http';
import Socket from 'socket.io'

const app = express();
const http = Http.Server(app);
const io = Socket(http);

app.get('/', (req, res)=> {
    res.sendFile('/Users/ponjoh/Repos/SimpleChat/index.html');
});

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('disconnect', function(){
        console.log('user disconnected');
    });

    socket.on('chat message', function(msg){
        console.log('message: ' + msg);
    });

    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
    });

});

http.listen(3000, () => {
    console.log('listening on *:3000');
});

