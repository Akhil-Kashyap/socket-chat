const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 5000;

const app = express();
const router = require('./router');

const server = http.createServer(app);
const io = socketio(server);

io.on('connect', (socket) => {
	console.log('We have a new Connection!!!');

	socket.on('disconnect', () => {
		console.log('User Has Left!!!');
	});
});
app.use(router);

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
