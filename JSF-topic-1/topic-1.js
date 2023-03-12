/* 2. Напишіть скрипт в зовнішньому файлі, який виводить в консоль 
ваше прізвище. Підключіть створений файл до HTML-документу */
let lastName = 'Sekret';
console.log(lastName);

/* 3. a) оголосіть дві змінні;
  b) запишіть у змінні будь-які значення;
  c) виведіть на екран значення змінних;
  d) скопіюйте значення однієї змінної в іншу;
  e) виведіть на екран значення змінних. */

let bestAnimal = 'cat';
let bestPet = 'dog';
console.log('bestAnimal', bestAnimal);
console.log('bestPet', bestPet);
bestAnimal = bestPet;
console.log('bestAnimal', bestAnimal);
console.log('bestPet', bestPet);

/* 4. Створіть об’єкт з 5-ма наступними властивостями: “String”, “Number”, 
“Boolean”, “Undefined”, “Null”. Значення кожної властивості повинно 
відповідати відповідному примітивному типу даних.*/

const myCat = {
  name: 'Arwen',
  age: 7,
  isCute: true,
  timeAsleep: undefined, //When and what for do we need to assign 'undefined' explicitly?
  timeAwake: null,
}

/* 5. Використовуючи функцію confirm() задайте користувачу питання про досягнення 
ним повнолітнього віку. Результат запишіть в змінну isAdult і виведіть в консоль. */

const isAdult = confirm('Are you 18 years old or older?');
console.log(isAdult);


/*6. В зовнішньому файлі напишіть скрипт, в якому оголосіть змінні, для збереження таких даних:
        - ваше ім’я
        - ваше прізвище
        - навчальна група
        - ваш рік народження.
Присвойте змінним відповідні значення. 
Створіть та проініціалізуйте логічну змінну для збереження вашого сімейного стану. 
Визначте тип кожної змінної.
Виведіть значення змінних в консоль, відповідно до їх типу, в такому порядку: Number, Boolean, String.
Створіть 2 довільних змінних типу Null і Undefined відповідно. Виведіть їх тип в консоль.*/

let myName = 'Valeria';
let mySurname = 'Sekret';
let myGroup = 'JavaScript Fundamentals';
let yearOfBirth = 1989;
let isMarried = true;
console.log(typeof yearOfBirth);
console.log(typeof isMarried);
console.log(typeof myName);
console.log(typeof mySurname);
console.log(typeof myGroup);
let myOccupation = null;
let myFreeTime;
console.log(typeof myOccupation);
console.log(typeof myFreeTime);

/* 7. 
За допомогою функції prompt() напишіть скрипт , який послідовно запитує в 
користувача логін, імейл та пароль, і виводить на екран повідомлення із введеними
 даними. Наприклад “Dear User, your email is usermale@gmail.com, your password is 
 qwerty”.*/

const userLogin = prompt('Enter your login', 'Login');
const userMail = prompt('Enter your e-mail', 'example@gmail.com');
const userPassword = prompt('Enter your password', 'Password');
const messageForUser = `Dear ${userLogin}, your email is ${userMail}, your password is ${userPassword}`;
alert(messageForUser);

/* 8. Напишіть скрипт, який вираховує кількість секунд в годині, в добі, в місяці, 
записує результати в відповідні змінні, і виводить їх значення на екран.*/

const secInMin = 60;
const minInHour = 60;
const hoursInDay = 24;
const daysInMonth = 30.42;// (365 days/12 months)
const secInHour = secInMin * minInHour;
const secInDay = secInHour * hoursInDay;
const secInMonth = secInDay * daysInMonth;
console.log('seconds in hour =', secInHour);
console.log('seconds in day =', secInDay);
console.log('seconds in month =', secInMonth);

/* ⭐⭐⭐ Ускладнене. Задача не оцінюється
Створіть веб-додаток для визначення купе в плацкартному вагоні за номером квитка. 
Користувач вводить номер місця, вивести йому номер купе(??), тип місця - бічне чи ні, 
верхнє чи нижнє.
*/

/* Я не зрозуміла, як це номер купе у плацкарті, тому у мене функція визначає 
номер вагону (їх у мене два), нижнє/верхнє та основне(main, там де 4) чи бічне */

const ticketNum = prompt("Enter the number of your ticket here", "example: 42");

function findCar(ticketNum) {
  let trainCar;
  if (ticketNum >= 1 && ticketNum <= 54) {
    trainCar = "first";
  } else if (ticketNum >= 55 && ticketNum <= 108) {
    trainCar = "second";
  }
  return trainCar;
}

function findPlace(ticketNum) {
  let placeHight;
  if (ticketNum % 2 === 0) {
    placeHight = "upper";
  } else {
    placeHight = "lower";
  }
  return placeHight;
}

function findSide(ticketNum) {
  let placePosition;
  if (
    (ticketNum >= 37 && ticketNum <= 54) ||
    (ticketNum >= 91 && ticketNum <= 108)
  ) {
    placePosition = "side";
  } else {
    placePosition = "main";
  }
  return placePosition;
}

const trainCar = findCar(ticketNum);
const placeHight = findPlace(ticketNum);
const placePosition = findSide(ticketNum);

const messageForPassenger = `Dear passenger, you have ${trainCar} car, ${placeHight} ${placePosition} place. Have a nice safe trip!`;
alert(messageForPassenger);