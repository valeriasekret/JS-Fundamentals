/* 1. На HTML-сторінці є ненумерований список з id="list", який складається із 5 елементів. 
У модальному вікні необхідно послідовно вивести вміст:
        1) першого елемента списку
        2) останнього елемента списку
        3) другого елемента списку
        4) четвертого елемента списку
        5) третього елемента списку
Результат виводу: 1, 5, 2, 4, 3 */

//вивести одним рядком просто в певній послідовності?
const list = document.getElementById("list");
const firstEl = list.children[0].textContent;
const lastEl = list.children[4].textContent;
const secondEl = list.children[1].textContent;
const fourthEl = list.children[3].textContent;
const thirdEl = list.children[2].textContent;
alert(
  firstEl + ", " + lastEl + ", " + secondEl + ", " + fourthEl + ", " + thirdEl
);

//чи вивести по черзі кожне окремо ?
// const list = document.getElementById("list");
// alert(list.children[0].textContent);
// alert(list.children[4].textContent);
// alert(list.children[1].textContent);
// alert(list.children[3].textContent);
// alert(list.children[2].textContent);

/*2. Напишіть скріпт, який за допомогою засобів DOM простилізує сторінку так як показано на картинці. */

document.querySelector("h1").style.backgroundColor = "#90ee8f";

document.querySelectorAll("p").forEach(function (p, index) {
  if (index === 0) p.style.fontWeight = "bold";
  if (index === 1) p.style.color = "red";
  if (index === 2) p.style.textDecoration = "underline";
  if (index === 3) p.style.fontStyle = "italic";
});

document.querySelector("#myList").textContent;
myList.style.display = "flex";
myList.style.listStyle = "none";

document.querySelector("span").style.display = "none";

/* 3. Напишіть скріпт, який за допомогою засобів DOM створить для порожньої HTML-сторінки таку структуру 
з тегів і їх атрибутів.
<body>
  <main class="mainClass check item">         
     <div id="myDiv">
         <p>First paragraph</p>           
     </div>
 </main> 
</body> */

const body = document.createElement("body");
const main = document.createElement("main");
main.setAttribute("class", "mainClass check item");
const div = document.createElement("div");
div.setAttribute("id", "myDiv");
const p = document.createElement("p");
p.innerHTML = "First paragraph";

div.appendChild(p);
main.appendChild(div);
body.appendChild(main);
document.getElementsByTagName("html")[0].appendChild(body);

/* 4. Реалізувати вивід даних із полів при кліку на кнопку "Надіслати" в поле outBlock */

const submitBtn = document.querySelector(".btn");

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const fio = document.querySelector('input[name="fio"]').value;
  const phone = document.querySelector('input[name="phone"]').value;
  const birthday = document.querySelector('input[name="birthday"]').value;
  const email = document.querySelector('input[name="email"]').value;

  const resultStr = `ПІБ: ${fio}<br>
                      Номер телефону: ${phone}<br>
                      Дата народження: ${birthday}<br>
                      Електронна пошта: ${email}`;

  const outBlock = document.querySelector(".out");
  outBlock.innerHTML = resultStr;
});

/* 5. Задача описана в блоці JS
1) вибрати всі теги із класом circle
2) перебрати кожен елемент, і вибрати його data-anim значення
3) вибране значення додати як клас за допомогою classList до цього елемента.
4) перевірити чи застосувались анімації
- вибірка елемента із DOM дерева
- вибрати клас елемента (https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
- вибрати із data атрибута значення і занести те значення в клас елемента для якого ми вибрали поточний атрибут
*/
const circles = document.querySelectorAll(".circle");

circles.forEach((circle) => {
  const animValue = circle.getAttribute("data-anim");
  circle.classList.add(animValue);
});

circles.forEach((circle) => {
  console.log(circle.classList.contains(circle.getAttribute("data-anim")));
});


// задача 6 з кросівками лежить в окремій підпапці