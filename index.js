// import express from "express";
// import http from "http";
// const { Server } = require('engine.io');
const express = require('express')
const http = require('http')
// const socket = require('socket.io')

const PORT = 3000;
const IP = '127.0.0.1'
const BACKLOG = 100


const app = express();
const server = http.createServer(app);

const data = {
    "name": "vishal",
    "email": "abc@gmail.com"
}
  
app.get("/storage", function (req, res) {
    res.json(data);
});

// const io = new Server(server);
// io.on("connection", () => {
//     console.log("user is connected");
// })

server.listen(PORT, function () { 
    console.log(`Listening to the server on ${PORT}`)
})
