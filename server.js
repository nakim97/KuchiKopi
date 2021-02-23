const io = require('socket.io')(3000, {
    cors:{
        origin: "*",
    },
});


const user = {}

io.on('connection', socket => {
  socket.on('new-user', name => {
    user[socket.id] = name
    socket.broadcast.emit('user-connected', name)
  })
  socket.on('send-chat', message => {
    socket.broadcast.emit('chat-text', { message: message, name: user[socket.id] })
  })
  socket.on('disconnect', () => {
    socket.broadcast.emit('user-left', user[socket.id])
    delete user[socket.id]
  })
})

