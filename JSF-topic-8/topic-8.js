/* Напишіть функцію, яка перевірятиме чи перший символ в рядку написаний 
в верхньому регістрі, чи ні.*/

function upperCase(str) {
  if (str.length === 0) {
    return "Empty string";
  }
  const upperCheck = /^[A-Z]/;
  if (upperCheck.test(str)) {
    return "String's starts with uppercase character";
  } else {
    return "String's not starts with uppercase character";
  }
}

console.log(upperCase('regexp'));
console.log(upperCase('RegExp'));

/* 8-2. Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу. 
Валідними вважаються всі символи на різних позиціях.*/

function checkEmail(email) {
  const isMailValid = /^\w+@\w+\.[a-z]+/;
  return isMailValid.test(email);
}

console.log(checkEmail("Qmail2@gmail.com"));

/*8-3.  Напишіть регулярний вираз, який в рядковому тексті 2 підстрічки буде міняти місцями.
Приклад роботи:
Вхідний рядок    "Java Script"
Вихід    “Script, Java”*/

const initialStr = "Java Script";
const changePlaces = /(\w+)\s+(\w+)/;

console.log(initialStr.replace(changePlaces, '$2, $1'));


/*8-4. Напишіть функцію, яка виконуватиме валідацію номера банківської карти 
(9999-9999-9999-9999)*/

function checkBankCard(num) {
  const checkNum = /^\d{4}[ -]?\d{4}[ -]?\d{4}[ -]?\d{4}$/;
  return checkNum.test(num);
}

console.log(checkBankCard("9999-9999-9999-9999"));

/*8-5. Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу.
Вимоги:
•  Цифри (0-9).
•  Тільки латинські літери в великому (A-Z) і малому (a-z) регістрах.
•  В тілі емейла допустимі лишеі символи “_” і “-”. Але вони не можуть бути 1-им символом емейлу.
 •  Символ “-” не може повторюватися.*/

function emailValidation(mail) {
  const checkMail = /^[A-Za-z0-9]+([_-]?[A-Za-z0-9]+)*@[A-Za-z0-9]+([_-]?[A-Za-z0-9]+)*(\.[A-Za-z]{2,})+$/;
  if (checkMail.test(mail)) {
    return "Email is correct!";
  } else {
    return "Email is not correct!";
  }
}
console.log(emailValidation('my_mail@gmail.com'));
console.log(emailValidation('#my_mail@gmail.com'));
console.log(emailValidation('my_ma--il@gmail.com'));
console.log(emailValidation('_my_mail@gmail.com'));
console.log(emailValidation('my_mail@gmail.com.ua'));


/*8-6. Напишіть функцію, яка перевіряє правильність логіна. Правильний логін - рядок 
від 2 до 10 символів, що містить лише букви та числа, номер не може бути першим. Функція має 
приймати рядок і знаходити усі числа в цьому рядку, включаючи числа з плаваючою комою (наприклад, 3.4).
Приклад роботи:*/

function checkLogin(login) {
  const loginCheck = /^[a-zA-Z][a-zA-Z0-9\.]{1,9}$/;

  if (!loginCheck.test(login)) {
    return false;
  }

  const numbers = login.match(/\d+(\.\d+)?/g);
  return numbers !== null;
}

console.log(checkLogin('ee1.1ret3'));
console.log(checkLogin('ee1*1ret3'));