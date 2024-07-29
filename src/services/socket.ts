import { io } from "socket.io-client";

const socket = io("ws://0.tcp.eu.ngrok.io:15811");

export default socket;
