/* 1. 
Написати функцію compact() яка має приймати на вхід масив, а на вихід має 
повертати значення нового масиву без повторень.
*/
const arr = [5, 3, 4, 5, 6, 7, 3];

function compact(arr) {
    const innerArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (!innerArray.includes(arr[i])) {
            innerArray.push(arr[i]);
        }
    }
    return innerArray;
}

const arr2 = compact(arr);
console.log(arr2); // [5, 3, 4, 6, 7]

/* а так можна?
function compact(arr) {
    return [...new Set(arr)];
}
*/


/*2.
Написати функцію createArray(start, end), яка приймає на вхід 2 параметри:
 - початкове значення
 - кінцеве значення
а на виході отримує масив із діапазоном цих значень (реалізувати достатньо лише 
із числовими значеннями)
*/
function createArray(start, end) {
    const innerArray = [];
    for (let i = start; i <= end; i++) {
        innerArray.push(i);
    }
    return innerArray;
}

let myArray = createArray(2, 9);
console.log(myArray); // [2,3,4,5,6,7,8,9]


/*3.
Задані цілі числа a і b (a < b). Виведіть усі цілі числа від a до b включно, 
при цьому a виводится 1 раз, число а+1 - два рази і т.д.
*/
let a = Math.floor(Math.random() * 10);
let b = Math.floor(Math.random() * 10);
while (a >= b) {
  a = Math.floor(Math.random() * 10);
  b = Math.floor(Math.random() * 10);
}

function showNumbersInRange(a, b) {
    let count = 1;
    for (let i = a; i <= b; i++) {
      for (let j = 1; j <= count; j++) {
        console.log(i);
      }
      count++;
    }
}

showNumbersInRange(a, b);

/*4. 
Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими цілими 
числами. Випадкові числа генеруються із діапазону 1-500.
randArray(5);  // [399,310,232,379,40]
*/
function randArray(k) {
    let innerArray = [];
    for (let i = 0; i < k; i++) {
      innerArray.push(Math.floor(Math.random() * 500) + 1);
    }
    return innerArray;
}

const array1 = randArray(7);
console.log(array1);


/*5.
Є масив [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, 
“broun”]
Написати функцію, яка виведе нові масиви, які складаються із даних початкового 
масиву, але одного типу даних (не приводити тип стрінг в число навіть якщо там 
лише число)
*/
let mixedArray = [5,"Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];

function splitArrayByType(mixedArray) {
  const numArr = [];
  const strArr = [];
  mixedArray.forEach((el) => {
    if (Array.isArray(el)) {
      const [numSubArr, strSubArr] = splitArrayByType(el);
      numArr.push(...numSubArr);
      strArr.push(...strSubArr);
    } else if (typeof el === "number") {
      numArr.push(el);
    } else if (typeof el === "string") {
      strArr.push(el);
    }
  });
  return [numArr, strArr];
}

const [numArr, strArr] = splitArrayByType(mixedArray);
console.log(numArr); 
console.log(strArr);


/*6.
Напишіть функцію calc(a, b, op), яка виконує над числами a і b одну із 
арифметичних операцій та повертає її результат. Вид операції визначається 
цілим числом op: 1 – віднімання, 2 – добуток, 3 – ділення, інші значення – 
додавання.
*/
function getRandNum (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let numA = getRandNum(1, 10);
let numB = getRandNum(1, 10);
let op = getRandNum(1, 5);

function calc(numA, numB, op) {
  if (op === 1) return numA - numB;
  if (op === 2) return numA * numB;
  if (op === 3) return numA / numB;
  return numA + numB;
}

const answer = calc(numA, numB, op);
console.log(answer);

/*7. 
Напишіть функцію findUnique(arr), яка приймає масив arr і перевіряє на 
унікальність його елементи. Якщо всі елементи масиву унікальні (не мають дублів),
то функція поверне true, інакше - false.
findUnique([1, 2, 3, 5, 3]);  // => false
findUnique([1, 2, 3, 5, 11]); // => true
*/
function findUnique(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (i !== j && arr[i] === arr[j]) {
          return false;
        }
      }
    }
    return true;
}
  
console.log(findUnique([1, 2, 3, 5, 3]));  // => false
console.log(findUnique([1, 2, 3, 5, 11])); // => true

/* знов ж таки, може так ?
function findUnique(arr) {
  const uniqueSet = new Set(arr);
  return uniqueSet.size === arr.length;
}
*/


/*⭐⭐⭐
(Ускладнене. Задача не оцінюється. Для тих, кому хочеться поробити ще щось)
Створити функцію create() , яка приймає один аргумент у вигляді рядка. Ця функція повертає анонімну функцію, яка перевіряє чи переданий в неї аргумент збігається з аргументом зовнішньої функції.
const tom = create("pass_for_Tom");
tom("pass_for_Tom"); //повертає true 
tom("pass_for_tom"); //повертає false
*/
function create(password) {
    return function(input) {
      return input === password;
    };
}

const tom = create("pass_for_Tom");
console.log(tom("pass_for_Tom")); //  true
console.log(tom("pass_for_tom")); //  false