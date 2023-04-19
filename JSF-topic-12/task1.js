/*12-1.Створити Node.js http-сервер, який слухатиме запити на порт 5000 на локальній  машині. 
Сервер повинен повертати сторінку, що містить ім’я поточного користувача операційної системи, 
тип операційної системи, час роботи системи в хвилинах (використати модуль OS), поточну робочу
 директорію і назву файлу сервера (використати модуль path). */

const http = require('http');
const os = require('os');
const path = require('path');

http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(`<h2>System info</h2>`);
  response.write("Current user name: " + os.userInfo().username);
  response.write("<br>");
  response.write("OS type: " + os.type());
  response.write("<br>");
  response.write("System work time: " + (os.uptime()/60).toFixed(2) + " minutes");
  response.write("<br>");
  response.write("Current work directory: " + path.dirname(__filename));
  response.write("<br>");
  response.write("Server file name: " + path.basename(__filename));
  response.end();
}).listen(5000);

console.log('Server running at http://127.0.0.1:5000/ ...');

 // мій варіант перед перевіркою домашнього завдання :)
 // function generateResponse() {
 //     const userInfo = os.userInfo();
 //     const uptimeInMinutes = Math.floor(os.uptime() / 60);
 //     const serverFileName = path.basename(__filename);
 
 //     return `
 //     <!DOCTYPE html>
 //     <html>
 //       <head>
 //         <title>Server Info</title>
 //       </head>
 //       <body>
 //         <h1>Server Info</h1>
 //         <p><strong>User:</strong> ${userInfo.username}</p>
 //         <p><strong>OS Type:</strong> ${os.type()}</p>
 //         <p><strong>Uptime (minutes):</strong> ${uptimeInMinutes}</p>
 //         <p><strong>Current Directory:</strong> ${process.cwd()}</p>
 //         <p><strong>Server File Name:</strong> ${serverFileName}</p>
 //       </body>
 //     </html>
 //   `;
 // }
 
 // const server = http.createServer((req, res) => {
 //     res.writeHead(200, { 'Content-Type': 'text/html' });
 //     res.end(generateResponse());
 // });
 
 // server.listen(5000, () => {
 //     console.log('Server is running on http://127.0.01:5000');
 // });
 
 