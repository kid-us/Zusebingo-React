import { io } from "socket.io-client";

const socket = io("ws://2.tcp.eu.ngrok.io:13802");
export default socket;
