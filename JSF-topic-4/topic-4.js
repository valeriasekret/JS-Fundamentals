/* 1.
Напишіть функцію sumSliceArray(arr, first, second), яка приймає масив arr і 
два числа (first и second) – порядкові номери елементів масиву, які необхідно 
скласти. Наприклад, якщо ввели 3 та 5 – сумуються 3-й та 5-й елементи.Функція 
повинна генерувати винятки, якщо були введені не числа, і коли одне з чисел або 
обидва більшого розміруза довжину масиву. Напишіть код, який використовує цю 
функцію, передбачте обробку можливих винятків.
*/
function sumSliceArray(arr, first, second) {
  if (typeof first !== 'number' || typeof second !== 'number') {
    throw new TypeError('Другий та третій аргументи мають бути числами');
  }
  if (first >= arr.length || second >= arr.length) {
    throw new RangeError('Другий та третій аргументи мають бути меншими за довжину масиву');
  }
  return arr[first] + arr[second];
}

const firstArray = [1, 2, 3, 4, 5];

try {
  const sum = sumSliceArray(firstArray, 3, 'n');
  console.log('Сума елементів:', sum);
} catch (err) {
  if (err.name === 'TypeError') {
    console.log(err.name, ' ', err.message);
  }
  if (err.name === 'RangeError') {
    console.log(err.name, ' ', err.message);
  }
}


/* 2.
Створіть функцію checkAge(), яка запитує у користувача його ім'я, вік та статус 
(адмін, модератор, користувач) та генерує модальне вікно з помилкою, якщо:
вік користувача менше 18 або більше 70 років (генерується помилка типу RangeError).
користувач не ввів жодних даних в будь-якому полі (виводиться повідомлення 
The field is empty! Please enter your age з типом помилки Error). У полі 
статус введено неправильне слово (тип помилки EvalError).в полі вік введено 
нечислове значення. У всіх інших випадках користувач отримає доступ до 
перегляду фільму. У блоці catch передбачена можливість виведення назви та 
опису помилки.
*/
function checkAge() {
  const userName = prompt('Please enter your name');
  const userAge = +prompt('Please enter your age');
  const userStatus = prompt('Please enter your status (admin, moderator, user)');

  try {
    if (!userAge || !userName || !userStatus) {
      throw new Error('The field is empty! Please enter your age.');
    }

    if (typeof userAge !== 'number' || isNaN(userAge)) {
      throw new TypeError('The age field should be a number.');
    }

    if (userAge < 18 || userAge > 70) {
      throw new RangeError('Your age is not appropriate for viewing the content.');
    }

    if (userStatus !== 'admin' && userStatus !== 'moderator' && userStatus !== 'user') {
      throw new EvalError('Invalid status entered.');
    }

  } catch (error) {
    alert(`${error.name}: ${error.message}`);
    return
  }
  alert('You have access to watch the movie!');
}

checkAge()


/* 3.
Реалізуйте функцію calcRectangleArea(width, height), яка приймає 2 параметри 
ширина прямокутника width і висота прямокутника height і обраховує його площу. 
Передбачити припинення виконання програми і генерацію винятку у випадку, якщо
функції передано не числові параметри.
Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації.
*/
function calcRectangleArea(width, height) {
  if (typeof width !== 'number' || typeof height !== 'number') {
    throw new TypeError('Invalid input. Both arguments must be numbers.');
  }
  return width * height;
}

const width = 10;
const height = '20';

try {
  const area = calcRectangleArea(width, height);
  console.log(`Rectangle area: ${area}`);
} catch (e) {
  console.log(`TypeError: ${e.message}`);
}

/* 4.
Створіть клас MonthException, конструктор якого приймає параметр message і 
ініціалізує поле name значенням MonthException.
Реалізуйте функцію showMonthName(month), в якій параметр month – це порядковий 
номер місяця в році. Функція повертає назву місяця відповідно до введеного номера
місяця. У випадку некоректного вводу кидається ексепшн у вигляді об’єкта класу 
MonthException з повідомленням Incorrect month number.
Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.
Приклад роботи програми:
console.log(showMonthName(5));
May
console.log(showMonthName(14));
MonthException Incorrect month number
*/
class MonthException extends Error {
  constructor(message) {
    super(message);
    this.name = 'MonthException';
  }
}

function showMonthName(month) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  if (typeof month !== 'number' || month < 1 || month > 12) {
    throw new MonthException('Incorrect month number');
  }
  return months[month - 1];
}

try {
  console.log(showMonthName(5));
  console.log(showMonthName(14));
} catch (er) {
  console.log(`${er.name} ${er.message}`);
}

/* 5. 
Реалізуйте функцію showUser(id), яка приймає параметром користувацьке id і 
повертає об’єкт, який містить значення переданої id. Також функція викидає 
помилку у разі якщо введено від’ємне id.
Реалізуйте функцію showUsers(ids), яка приймає параметром масив користувацьких 
айді ids, перевіряє з використанням функції showUser() кожен елемент масиву ids 
на коректність, в разі виключної ситуації виводить повідомлення про помилку. 
Функція showUsers(ids) повертає масив об’єктів, де значеннями ключів є коректні 
елементи ids.
Приклад роботи програми:
showUsers([7, -12, 44, 22]);
Error: ID must not be negative: -12
[ {id: 7}, {id: 44}, {id: 22} ]
*/
function showUser(id) {
  if (id < 0) {
    throw new Error('ID must not be negative: ' + id);
  }
  return { id };
}

function showUsers(ids) {
  const result = [];
  for (const id of ids) {
    try {
      const user = showUser(id);
      result.push(user);
    } catch (exception) {
      console.log(exception.name, ':', exception.message);
    }
  }
  return result;
}

console.log(showUsers([7, -12, 44, 22]));