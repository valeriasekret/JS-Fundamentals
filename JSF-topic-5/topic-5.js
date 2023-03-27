/*1. 
Напишіть клас Круг та реалізуйте функціонал:
- Визначте конструктор, який запитує координати центру кола, його радіус та 
ініціалізує об'єкт;
- Визначте метод отримання довжини кола для поточного об'єкта (L = 2 * π * R);
- Визначте статичний метод, який приймає радіус та повертає довжину кола для 
заданого радіусу;
- Визначте метод отримання об'єкта-кола, який повертає копію поточного 
об'єкта;
- Визначте статичний метод, який приймає координати центра кола, його радіус
 та повертає об'єкт кола із заданими параметрами;
- Визначте метод перевірки попадання крапки до кола;
- Визначте метод перетворення поточного стану об'єкта на символьний рядок 
(toString()).
*/
class Circle {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  getCircumference() {
    return 2 * Math.PI * this.radius;
  }

  static getCircumferenceByRadius(radius) {
    return 2 * Math.PI * radius;
  }

  clone() {
    return new Circle(this.x, this.y, this.radius);
  }

  static getCircle(x, y, radius) {
    return new Circle(x, y, radius);
  }

  isPointInside(x, y) {
    const distance = Math.sqrt((this.x - x) ** 2 + (this.y - y) ** 2);
    return distance <= this.radius;
  }

  toString() {
    return `Circle with center at (${this.x}, ${this.y}) and radius ${this.radius}`;
  }
}

/*2. 
Напишіть функцію propsCount(currentObject), яка приймає об’єкт і визначає кількість 
властивостей цього об’єкта.
Наприклад:
 let mentor = { 
            course: "JS fundamental", 
            duration: 3,
            direction: "web-development" 
        };
propsCount(mentor);  // 3
*/
function propsCount(currentObject) {
  let count = 0;
  for (let prop in currentObject) {
    if (currentObject.hasOwnProperty(prop)) {
      count++;
    }
  }
  return count;
}

/* може так краще?
function propsCount(currentObject) {
  let keys = Object.keys(currentObject);
  return keys.length;
}
}*/

/*3. 
-  Створіть клас Person, у якого конструктор приймає параметри name і surname, а 
також міститься метод showFullName(), який виводить у консоль ім’я і прізвище особи. 
- Від класу Person наслідується клас Student, конструктор якого крім name і surname, 
приймає параметр year (рік вступу до університету). 
- В класі Student необхідно перевизначити метод showFullName(midleName), щоб виводилося 
не лише ім’я, прізвище, але і по-батькові (midleName) студента. 
- Також в класі Student необхідно реалізувати метод showCourse(), який виводитиме поточний 
курс студента (від 1 до 6). Значення курсу визначатиметься як різниця поточного року 
(визначити самостійно) і року вступу до ВНЗ.
Приклад результату:
const stud1 = new Student("Petro", "Petrenko", 2019);
console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
console.log("Current course: " + stud1.showCourse()); //Current course: 4
*/
class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  showFullName() {
    console.log(`${this.surname} ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }

  showFullName(middleName) {
    return `${this.surname} ${this.name} ${middleName}`;
  }

  showCourse() {
    const currentYear = new Date().getFullYear();
    const course = currentYear - this.year;
    return course >= 1 && course <= 6
      ? course
      : "Error: Invalid year of admission";
  }
}

const stud1 = new Student("Petro", "Petrenko", 2019);
console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
console.log("Current course: " + stud1.showCourse()); //Current course: 4

/*4. 
А. Реалізувати клас, який описує простий маркер. У класі мають бути такі компоненти:
- поле, яке зберігає колір маркера;
- поле, яке зберігає кількість чорнила в маркері (у відсотках);
- метод друку (метод приймає рядок і виводить текст відповідним кольором;
текст виводиться до тих пір, поки в маркері є чорнило; один не пробіловий символ – це 
0,5% чорнила в маркері).
В. Реалізувати клас, що описує маркер, що заправляється, успадкувавши його від простого 
маркера і додавши метод для заправки маркера. Продемонструвати роботу написаних методів
*/
class Marker {
  constructor(color, ink) {
    this.color = color;
    this.ink = ink;
  }

  print(text) {
    let printedText = "";
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (this.ink <= 0) {
        break;
      }
      printedText += char;
      if (char !== " ") {
        this.ink -= 0.5;
      }
    }
    console.log("%c" + printedText, `color: ${this.color}`);
  }
}

class RefillableMarker extends Marker {
  constructor(color, ink, capacity) {
    super(color, ink);
    this.capacity = capacity;
  }

  refill(amount) {
    if (amount > 0) {
      this.ink = Math.min(this.capacity, this.ink + amount);
    }
  }
}

/*5.
Створіть клас Worker який буде мати конструктор, який приймає наступні властивості: fullName 
(ім’я і прізвище), dayRate (ставка за день роботи), workingDays (кількість відпрацьованих днів). 
       1) клас повинен мати метод showSalary(), який буде виводити зарплату працівника. 
       Зарплата - це добуток ставки dayRate на кількість відпрацьованих днів workingDays. 
       2) додати приватне поле experience і присвоїти йому значення 1.2 і використовувати 
       його як додатковий множник при визначенні зарплати – створити метод showSalaryWithExperience(). 
       Вивести значення зарплати з цим коефіцієнтом.
       3) додати гетери і сетери для поля experience. Встановити значення experience = 1.5 і 
       вивести його на екран.
        4) Вивести значення зарплати з новим experience.
        5) Створити кілька екземплярів класу (працівників) з різними зарплатами, як показано в 
        прикладі нижче. Посортувати зарплату працівників із найбільшим experience по зростанню і 
        вивести результат в форматі:   worker_fullName: salary_value 
        6) Реалізувати динамічне сортування для будь-кої кількості працівників-екземплярів класу
         Worker.
Example usage:
let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);                 
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();

let worker2 = new Worker("Tom Tomson", 48, 22);
. . . . . .

let worker3 = new Worker("Andy Ander", 29, 23);
. . . . . .

Output example:
John Johnson
John Johnson salary: 460
New experience: 1.2
John Johnson salary: 552
New experience: 1.5
John Johnson salary: 690

Tom Tomson
Tom Tomson salary: 1056
. . . . . .
New experience: 1.5
Tom Tomson  salary: 1584

Andy Ander
Andy Ander salary: 667
. . . . . .
New experience: 1.5
Andy Ander  salary: 1000.5

Sorted salary:
John Johnson: 690
Andy Ander: 1000.5
Tom Tomson: 1584
*/

class Worker {
  constructor(fullName, dayRate, workingDays) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
    this._experience = 1.2;
  }

  showSalary() {
    let salary = this.dayRate * this.workingDays;
    console.log(`${this.fullName} salary is ${salary}`);
    return salary;
  }

  showSalaryWithExperience() {
    let salary = this.dayRate * this.workingDays * this._experience;
    console.log(
      `${this.fullName} salary with experience ${this._experience} is ${salary}`
    );
    return salary;
  }

  get showExp() {
    return this._experience;
  }

  set setExp(value) {
    this._experience = value;
  }
}

let workers = [
  new Worker("John Johnson", 20, 23),
  new Worker("Tom Tomson", 48, 22),
  new Worker("Andy Ander", 29, 23),
];

workers.sort((a, b) => {
  if (a.showExp === b.showExp) {
    return a.showSalary() - b.showSalary();
  }
  return a.showExp - b.showExp;
});

for (let i = 0; i < workers.length; i++) {
  console.log(
    `${workers[i].fullName}: ${workers[i].showSalaryWithExperience()}`
  );
}