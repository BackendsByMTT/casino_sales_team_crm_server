const { createServer } = require("http");
const { Server } = require("socket.io");
const express = require("express");
const cookieParser = require('cookie-parser');
const cors = require('cors');
const connectDB = require("./src/config/db");
const router = require("./src/routes/routes");
const { socketControllers } = require("./src/socket/socketRoutes");

const app = express();

const corsOrigin ={
  origin:'*', 
  credentials:true,            
  optionSuccessStatus:200
}

app.use(cors(corsOrigin))
app.use(cookieParser());
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/",router)

const httpServer = createServer(app);

const io = new Server(httpServer,{
  cors:{
    origin:'*'
  }
});

connectDB()

io.on("connection", (socket) => {
  socketControllers(socket,io)
});


const PORT = process.env.PORT || 5000;

httpServer.listen(PORT, ()=> console.log("server started at ",PORT))