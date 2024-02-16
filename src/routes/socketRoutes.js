const { chat_join } = require("../controllers/socketControllers/socket")

const socketControllers=async(socket,io)=>{
    chat_join(socket,io)
    
}

module.exports= {socketControllers}