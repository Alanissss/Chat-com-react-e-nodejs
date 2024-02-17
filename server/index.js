const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server, { cors: { origin: 'http://localhost:5173' } });

const PORT = 3001;

io.on('connection', socket => {
    socket.on('join', username => {
        console.log('Usuário conectado:', username, 'com ID do socket:', socket.id);
        // armazenando o nome de usuário no socket
        socket.username = username;
    });
    
    socket.on('disconnect', reason => {
        console.log('Usuário desconectado!', socket.username, socket.id);
        // o nome de usuário associado ao socket usando socket.username
    });

socket.on('message', text => {
    // incluindo o nome de usuário associado ao socket
    io.emit('receive_message', {
        text,
        authorId: socket.id,
        author: socket.username // acessar o nome de usuário associado ao socket
        });
    });
});


server.listen(PORT, () => console.log('Servidor rodando na porta', PORT));

