const socket = io('http://localhost:4000');
        
document.getElementById('message-form').addEventListener('submit', event => {
    event.preventDefault();
    let user_messages = document.getElementById('chatbox').value.trim();
    if (user_messages !== "") {
        socket.emit('message_from_the_client_to_the_server', user_messages);
        document.getElementById('chatbox').value = '';
    }
});

socket.on('server_to_clients', display_message => {
    let messageList = document.getElementById('messages');
    let newMessage = document.createElement('li');
    newMessage.innerHTML = `<h3>${display_message}</h3>`;
    messageList.appendChild(newMessage);
    messageList.scrollTop = messageList.scrollHeight;
});