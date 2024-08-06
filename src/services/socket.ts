import { io } from "socket.io-client";

// const socket = io("https://socket.zusebingo.com");
const socket = io("ws://7.tcp.eu.ngrok.io:12783");

export default socket;
