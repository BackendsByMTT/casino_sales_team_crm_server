

const chat_join = async (socket,io) => {

    socket.on('join', async data => {

        const {socketId,chat,userName} = data;
        console.log('user joined', socketId);
        socket.join(socketId);

    })
}


module.exports= {chat_join}