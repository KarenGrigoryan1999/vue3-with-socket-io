<template>
  <input v-model="messageText">
  <button @click="sendMessage">Отправить</button>
</template>

<script setup>
import {useSocketIo} from './hooks/useSocket.js'
import {ref} from 'vue'

const messageText = ref("");

const socket = useSocketIo(5000);//Подключаемся к бэкенду
const roomNumber = 1;//Задаём номер комнаты, чтобы отправитель и получатель получили сообщение у них должен быть одинаковый номер комнаты
socket.emit("connectToRoomNumber", roomNumber);//отправляем номер комнаты на сервер
const sendMessage = () =>{
  socket.emit("send", messageText.value);//Эмитим событие отправки
}

//Слушаем событие получения сообщения
socket.on("receive", value => {
  alert(value);//Выводим алерт с сообщением
});
</script>

<style>
</style>
