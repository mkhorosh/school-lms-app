// 1
// const http = require('http');
// // test in browser - localhost:3000  OR 127.0.0.1:3000
// const  server = http.createServer(); 

// server.on('request', (req, res) => {
//     res.end('Основы Node.js');
// });

// server.listen(3000, () => console.log('Сервер работает')); 


// 2
// const http = require('http');
// // test in browser - localhost:3000  OR 127.0.0.1:3000
// const server = http.createServer(); 

// server.on('request', (req, res) => { 
//     res.writeHead(200, { 'Content-Type': 'text/plain' }); 
//     res.end('Основы Node.js');
// }); 

// server.listen(3000, () => console.log('Сервер работает')); 


// 3
// const http = require('http');
// // test in browser - localhost:3000  OR 127.0.0.1:3000
// const  server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' }); 
//     res.end('Основы Node.js'); 
// }); 

// server.listen(3000, () => console.log('Сервер работает')); 

// 4
// const http = require('http');
// // test in browser - localhost:3000  OR 127.0.0.1:3000
// http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' }); 
//     res.end('Основы Node.js'); 
// }).listen(3000, () => console.log('Сервер работает')); 


// 5
// const http = require('http');
// // test in browser - localhost:3000  OR 127.0.0.1:3000
// http.createServer((req, res) => {
//     console.log(req.url);
//     console.log(req.method);
//     console.log(req.headers);

//     res.writeHead(200, { 'Content-Type': 'text/plain' }); 
//     res.end('Основы Node.js'); 
// }).listen(3000, () => console.log('Сервер работает')); 


// 6
// const http = require('http');
// // test in browser - localhost:3000  OR 127.0.0.1:3000
// http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' }); 
//     res.end(`
//         <!doctype>
//         <html>
//             <head>
//                 <meta charset="utf-8">
//                 <title>Основы Node.js</title>
//             </head>
//             <body>
//                 <h1>Основы Node.js</h1>
//             </body>
//         </html>
//     `); 
// }).listen(3000, () => console.log('Сервер работает'));


// 7
// const http = require('http');
// // test in browser - localhost:3000  OR 127.0.0.1:3000
// http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/html' }); 
//     res.end(`
//         <!doctype>
//         <html>
//             <head>
//                 <meta charset="utf-8">
//                 <title>Основы Node.js</title>
//             </head>
//             <body>
//                 <h1>Основы Node.js</h1>
//             </body>
//         </html>
//     `); 
// }).listen(3000, () => console.log('Сервер работает')); 


// 8
// const http = require('http');
// // test in browser - localhost:3000  OR 127.0.0.1:3000
// http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/html' }); 
//     res.end(`
//         <!doctype>
//         <html>
//             <head>
//                 <meta charset="utf-8">
//                 <title>Основы Node.js</title>
//                 <style>
//                     body{
//                         margin: 0;
//                         padding: 0;
//                         text-align: center;
//                     }

//                     h1{
//                         background-color: #43853d;
//                         color: white;
//                         padding: .5em;
//                         font-family: 'Consolas'
//                     }
//                 </style>
//             </head>
//             <body>
//                 <h1>Основы Node.js</h1>
//                 <button onclick="alert('Node.js в действии')">Нажми меня</button>
//             </body>
//         </html>
//     `); 
// }).listen(3000, () => console.log('Сервер работает')); 


// 9
const http = require('http');
// test in browser - localhost:3000  OR 127.0.0.1:3000

const html = `
    <!doctype>
    <html>
        <head>
            <meta charset="utf-8">
            <title>Основы Node.js</title>
            <link rel="stylesheet" href="app.css">
        </head>

        <body>
            <h1>Основы Node.js</h1>
            <button>Нажми меня</button>

            <script src="app.js"></script> 
        </body>
    </html>
`;
const css = `
    body {
        margin: 0;
        padding: 0;
        text-align: center;
    }

    h1 {
        background-color: #43853d;
        color: white;
        padding: .5em;
        font-family: 'Consolas';
    }
`;
const js = `
    const button = document.querySelector('button');
    button.addEventListener('click', event => alert('Node.js в действии'));
`; 
 
http.createServer((req, res) => {
    // console.log(req.url);
    // res.writeHead(200, { 'Content-Type': 'text/html' }); 
    // res.end(html);
    switch (req.url) {
        case '/':
            res.writeHead(200, { 'Content-Type': 'text/html' }); 
            res.end(html);
            break;

        case '/app.css':
            res.writeHead(200, { 'Content-Type': 'text/css' }); 
            res.end(css);
            break;

        case '/app.js':
            res.writeHead(200, { 'Content-Type': 'text/javascript' }); 
            res.end(js);
            break;

        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' }); 
            res.end('404 Не найдено');
            break;

    }
}).listen(3000, () => console.log('Сервер работает')); 
