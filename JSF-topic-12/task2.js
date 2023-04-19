/*12-2. Необхідно створити власний модуль personalmodule.js, який містить функцію, що приймає 
ім’я системного юзера і працює з поточним часом та на основі пори доби виводить повідомлення 
із привітанням юзера. Щоб експортувати змінні чи функції модуля на зовні можна використати 
об’єкт module.exports. 
        Створіть Node.js сервер, який з використанням функціоналу розробленого модуля
         повертатиме наступну сторінку:
 */

const http = require('http');
const greeting = require('./personalmodule');
const os = require("os");

http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    let username = os.userInfo().username;
    response.write(`Date of request : ${greeting.date}<br>`);
    response.write(greeting.showMessage(userName));
    response.end();
}).listen(6000);

console.log('Server running at http://127.0.0.1:6000/');
