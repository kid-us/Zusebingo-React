import { io } from "socket.io-client";

const socket = io("ws://4.tcp.eu.ngrok.io:16717");

export default socket;
