// import express from "express";
// import http from "http";
// const { Server } = require('engine.io');
const express = require('express')
const http = require('http')
// const socket = require('socket.io')

const users = require('./data/users.json')
const forms = require('./data/forms.json')
const subjects = require('./data/subjects.json')
const schedules = require('./data/schedules.json')
const marks = require('./data/marks.json')
const assignments = require('./data/assignments.json')


const PORT = 3000;
const IP = '127.0.0.1'
const BACKLOG = 100


const app = express();
const server = http.createServer(app);
  
app.get("/users", function (req, res) {
    res.json(users);
});

app.get("/forms", function (req, res) {
    res.json(forms);
});

app.get("/subjects", function (req, res) {
    res.json(subjects);
});

app.get("/schedules", function (req, res) {
    res.json(schedules);
});

app.get("/marks", function (req, res) {
    res.json(marks);
});

app.get("/assignments", function (req, res) {
    res.json(assignments);
});

// const io = new Server(server);
// io.on("connection", () => {
//     console.log("user is connected");
// })

server.listen(PORT, function () { 
    console.log(`Listening to the server on ${PORT}`)
})
