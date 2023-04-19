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


const http = require('http');
const fs = require('fs');
const path = require('path');

// Шлях до файлу, у який буде записана інформація
const filePath = path.join(__dirname, 'input.txt');

// Функція для запису інформації у файл
function writeToTextFile(data) {
  fs.writeFile(filePath, data, { flag: 'a+' }, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Data written to file');
    }
  });
}

// Створення серверу
http.createServer((req, res) => {
  if (req.method === 'POST') {
    let data = '';
    req.on('data', (chunk) => {
      data += chunk;
    });
    req.on('end', () => {
      writeToTextFile(data);
      res.end('Data received and saved to file');
    });
  } else if (req.method === 'GET') {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        console.error(err);
        res.end('Error reading file');
      } else {
        res.setHeader('Content-Type', 'text/plain');
        res.end(data);
      }
    });
  }
}).listen(3000, () => {
  console.log('Server running on port 3000');
});