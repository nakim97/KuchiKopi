const socket = io('http://localhost:3000')
const chatContainer = document.getElementById('chat-container')
const chatForm = document.getElementById('chat-form')
const chatInput = document.getElementById('chat-input')


// input user's userid/nickname
const name = prompt('What is your name?')
addChat('You joined')
socket.emit('new-user', name)

// Append Chat Message 
socket.on('chat-text', data => {
  addChat(`${data.name}: ${data.message}`)
})
// Append message that user has entered chat
socket.on('user-connected', name => {
  addChat(`${name} has entered the chat`)
})
// Append message that user has left the chat
socket.on('user-left', name => {
  addChat(`${name} has left the chat`)
})

chatForm.addEventListener('submit', e => {
  e.preventDefault()
  const chat = chatInput.value
  addChat(`You: ${chat}`)
  socket.emit('send-chat', chat)
  chatInput.value = ''
})

function addChat(message) {
  const messageElement = document.createElement('div')
  messageElement.innerText = message
  chatContainer.append(messageElement)
}

