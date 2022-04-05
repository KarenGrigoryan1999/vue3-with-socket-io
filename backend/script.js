const express = require('express');//Подключаем экспресс
const cors = require('cors');//Подключаем библиотеку для корсов
const http = require("http");//Подключаем пакет http

const app = express();//Создаём express приложение
const server = http.createServer(app);//Оборачиваем express приложение в http
app.use(cors);

//Настраиваем корсы
const io = require("socket.io")(server, {
    cors: {
        origin: "http://localhost:8080",//В качестве ориджин указываем адрес фронта
        methods: ["GET", "POST"],//Разрешаем гет и пост запросы
        transports: ['websocket', 'polling'],
        credentials: true
    },
    allowEIO3: true
});

//Ждём подключения
io.on('connection', (socket) => {
  //socket - это текущее подключение пользователя
  socket.on('connectToRoomNumber',(number)=>{
    socket.join(number);//Джойним пользователя в комнату
  })
  //Слушаем событие send
  socket.on('send',(text)=>{
    socket.local.emit('receive',text);//Отправляем сообщение всем кто есть в комнате кроме нас самих
  })
});

server.listen(5000, ()=>{
    console.log("Server was started!")
});