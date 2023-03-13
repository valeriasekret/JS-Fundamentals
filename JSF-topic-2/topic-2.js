/* 1. Дано три цілих числа: a, b, c. Перевірте істинність висловлювання: a < b < c */
const numA = Math.floor(Math.random() * 10) + 1;
const numB = Math.floor(Math.random() * 10) + 1;
const numC = Math.floor(Math.random() * 10) + 1;
const compareNum = numA < numB && numB < numC && numA < numC;
console.log("a < b < c", compareNum);
/* чи краще так? 
if (numA < numB && numB < numC && numA < numC) {
  console.log(true);
} else {
  console.log(false);
}
*/

/* 2. Допишіть код, щоб в консолі браузера з'явилися рядки, які написані в коментарях, 
оперуючи при цьому змінними х і у.*/
let x = 1;
let y = 2;

let res1 = "" + x + y;
console.log(res1); // "12"
console.log(typeof res1); // "string"

let res2 = (x < y) + "" + y;
console.log(res2); // "true2"
console.log(typeof res2); // "string"

let res3 = x < y;
console.log(res3); // true
console.log(typeof res3); // "boolean"

let res4 = (x - x) / (y - y);
console.log(res4); // NaN
console.log(typeof res4); // "number"

/* 3. Використовуючи функцію prompt() задайте користувачу питання про досягнення ним 
повнолітнього віку. Результат запишіть в змінну isAdult. В залежності від отриманого 
значення виведіть відповідне повідомлення про статус особи. Наприклад: при виконанні 
умови вік більше 18 вивести “Ви досягли повнолітнього віку”. Якщо вік менше 18 років 
вивести “Ви ще надто молоді”*/
const isAdult = prompt(
  "Чи досягли Ви повнолітнього віку? Вкажіть, будь ласка, Ваш вік нижче"
);
const userAge = parseInt(isAdult);
function textPerson(userAge) {
  if (userAge >= 18) {
    return "Ви досягли повнолітнього віку";
  } else {
    return "Ви ще надто молоді";
  }
}
alert(textPerson(userAge));

/* 4. Задано масив чисел, знайти число, яке найбільш часто входить в масив, занести 
це число в новий масив і видалити всі входження цього числа із поточного масиву.*/
let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5];
const countNum = arr.reduce((acc, curr) => {
  if (!acc[curr]) {
    acc[curr] = 1;
  } else {
    acc[curr]++;
  }
  return acc;
}, {});

const [number, frequency] = Object.entries(countNum).reduce(
  (acc, curr) => {
    if (curr[1] > acc[1]) {
      return curr;
    }
    return acc;
  },
  [null, 0]
);
const data = [Number(number)];
arr = arr.filter((element) => {
  if (element === Number(number)) {
    return false;
  }
  return true;
});
console.log(arr); // [4, 2, 1, 6, 3, 2]
console.log(data); // [5]

/*5. Користувач вводить три довжини сторін трикутника (використовуйте prompt () 
три рази для введення кожної сторони).
Необхідно 
    a) визначити і вивести в консоль площу трикутника 
    b) перевірити чи цей трикутник є прямокутним і вивести в консоль результат 
    перевірки.
Здійснювати перевірку чи введені користувачем значення коректні, в іншому випадку 
вивести 'Incorrect data‘. Результат обчислення площі трикутника виводити в консоль 
з точністю 3 знаки після коми (наприклад:  8.42355465 =>  8.424).*/
const a = parseInt(prompt("Введіть довжину сторони a"));
const b = parseInt(prompt("Введіть довжину сторони b"));
const c = parseInt(prompt("Введіть довжину сторони c"));
if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
  console.log("Incorrect data");
} else {
  let p = (a + b + c) / 2;
  let area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
  let isRightTriangle =
    Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2) ||
    Math.pow(b, 2) + Math.pow(c, 2) === Math.pow(a, 2) ||
    Math.pow(c, 2) + Math.pow(a, 2) === Math.pow(b, 2) ||
    a + b <= c ||
    a + c <= b ||
    b + c <= a;
  if (isRightTriangle) {
    console.log("Трикутник є прямокутним");
  } else {
    console.log("Трикутник не є прямокутним");
  }
  console.log("Площа трикутника: " + area.toFixed(3));
}

/*6. 
Написати умовну конструкцію, яка в залежності від часу доби виводитиме відповідне привітання. Потрібно отримати реальний час доби із системи. Зробити 2 способами через 2 різних умовних оператора.
В діапазоні годин 23-5 – має виводитися привітання “Доброї ночі”
В діапазоні годин 5-11 – має виводитися привітання “Доброго ранку”
В діапазоні годин 11-17 – має виводитися привітання “Доброго дня”
В діапазоні годин 17-23 – має виводитися привітання “Доброго вечора”. */
const currentTime = new Date();
const currentHour = currentTime.getHours();
if (currentHour >= 23 || currentHour < 5) {
  console.log("Доброї ночі");
} else if (currentHour >= 5 && currentHour < 11) {
  console.log("Доброго ранку");
} else if (currentHour >= 11 && currentHour < 17) {
  console.log("Доброго дня");
} else {
  console.log("Доброго вечора");
}
