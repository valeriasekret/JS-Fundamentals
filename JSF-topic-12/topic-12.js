/*12-1.Створити Node.js http-сервер, який слухатиме запити на порт 5000 на локальній  машині. 
Сервер повинен повертати сторінку, що містить ім’я поточного користувача операційної системи, 
тип операційної системи, час роботи системи в хвилинах (використати модуль OS), поточну робочу
 директорію і назву файлу сервера (використати модуль path). */

const http = require('http');
const os = require('os');
const path = require('path');

function generateResponse() {
    const userInfo = os.userInfo();
    const uptimeInMinutes = Math.floor(os.uptime() / 60);
    const serverFileName = path.basename(__filename);

    return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Server Info</title>
      </head>
      <body>
        <h1>Server Info</h1>
        <p><strong>User:</strong> ${userInfo.username}</p>
        <p><strong>OS Type:</strong> ${os.type()}</p>
        <p><strong>Uptime (minutes):</strong> ${uptimeInMinutes}</p>
        <p><strong>Current Directory:</strong> ${process.cwd()}</p>
        <p><strong>Server File Name:</strong> ${serverFileName}</p>
      </body>
    </html>
  `;
}

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(generateResponse());
});

server.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});

//http://localhost:5000

/*12-2. Необхідно створити власний модуль personalmodule.js, який містить функцію, що приймає 
ім’я системного юзера і працює з поточним часом та на основі пори доби виводить повідомлення 
із привітанням юзера. Щоб експортувати змінні чи функції модуля на зовні можна використати 
об’єкт module.exports. 
        Створіть Node.js сервер, який з використанням функціоналу розробленого модуля
         повертатиме наступну сторінку:
 */

function getGreeting(username) {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    let greeting = '';

    if (currentHour < 12) {
        greeting = `Доброго ранку, ${username}!`;
    } else if (currentHour < 18) {
        greeting = `Доброго дня, ${username}!`;
    } else {
        greeting = `Доброго вечора, ${username}!`;
    }

    return greeting;
}

module.exports = {
    getGreeting
};

const http = require('http');
const os = require('os');
const personalModule = require('./personalmodule'); // Імпортуємо розроблений модуль

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    const username = os.userInfo().username;

    const greeting = personalModule.getGreeting(username);

    res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Привітання</title>
      </head>
      <body>
        <h1>Привітання</h1>
        <p>${greeting}</p>
      </body>
    </html>
  `);
});

server.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});


/*12-3 ⭐⭐⭐
Створіть просту програму на Node.js, яка записує у файл текстову інформацію, яку 
користувач вводить з адресного рядка, а потім зчитує цей файл та виводить вміст на екран.

Кроки:
1. Створити змінну, яка зберігатиме шлях до файлу, у який буде записана інформація. 
2. Використовуючи модуль fs (file system), створити функцію, яка дозволить записувати 
інформацію в файл. 
3. Використовуючи модуль http, створити сервер, який буде прослуховувати запити з адресного 
рядка та передавати отриману інформацію функції writeToTextFile(). 
4. Для зчитування даних з файлу, використовуйте модуль fs та функцію readFile()
5. Для того, щоб вивести зчитану інформацію на екран, додайте відповідну логіку до серверу. 
 */

// Імпортуємо модулі
const http = require('http');
const fs = require('fs');

// Встановлюємо порт, на якому буде працювати сервер
const PORT = 3000;

// Шлях до файлу, у який буде записуватись інформація
const filePath = 'data.txt';

// Створюємо сервер
const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let data = '';

    // Обробка події отримання даних від користувача
    req.on('data', (chunk) => {
      data += chunk;
    });

    // Обробка події завершення передачі даних від користувача
    req.on('end', () => {
      // Записуємо отриману інформацію у файл
      fs.appendFile(filePath, data, (err) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Помилка сервера');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end('Дані успішно записано у файл');
        }
      });
    });
  } else if (req.method === 'GET') {
    // Зчитуємо дані з файлу
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Помилка сервера');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 - Сторінка не знайдена');
  }
});

// Запускаємо сервер на вказаному порті
server.listen(PORT, () => {
  console.log(`Сервер запущено на порту ${PORT}`);
});
