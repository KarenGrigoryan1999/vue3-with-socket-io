import openSocket from "socket.io-client";

export function useSocketIo(port) {
    return openSocket("http://localhost:"+port);
}