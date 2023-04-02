/* 7-1. За допомогою методів об’єкта window створити:
        1) нове вікно розміром 300х300 пікселів.
        2) із затримкою 2 сек змініть розміри вікна на 500х500 пікселів
        3) із затримкою 2 сек перемістіть вікно в точку з координатами (200, 200)
        4) із затримкою 2 сек закрийте вікно. */

const myWindow = window.open("", "", "width=300,height=300");

setTimeout(() => {
    myWindow.resizeTo(500, 500);
}, 2000);

setTimeout(() => {
    myWindow.moveTo(200, 200);
}, 4000);

setTimeout(() => {
    myWindow.close();
}, 6000);

/* 7-2. Для заданої HTML-сторінки напишіть функцію changeCSS(), яка спрацьовуватиме по кліку 
на кнопку і змінюватиме стиль вмісту тега <p>: колір шрифту – оранжевий, розмір шрифту 20px, 
шрифт сімейства "Comic Sans MS" */

function changeCSS() {
    const textElement = document.getElementById("text");
    textElement.style.color = "orange";
    textElement.style.fontSize = "20px";
    textElement.style.fontFamily = "Comic Sans MS";
}

const button = document.querySelector("button");
button.addEventListener("click", changeCSS);

/*7-3. Задано сторінку з 3 кнопками і 1 лінкою. Напишіть Javascript код і реалізуйте HTML-сторінку
 з відповідними подіями на кожному елементові:
        1) 1-ша кнопка – при кліку на неї колір фону сторінки міняється на синій
        2) 2-га кнопка – при подвійному кліку на неї колір фону сторінки міняється на рожевий
        3) 3-я кнопка – при натисненні і утримуванні кнопки колір фону сторінки стає коричневий. 
        При відпусканні – білий.
        4) При наведенні на лінку – колір фону стає жовтим, при відведенні – білим.
        Приклад – курсор наведений на лінку.
https://user-images.githubusercontent.com/9075641/228461056-455d4dbf-527b-43de-a3dd-7c079dfbffed.png
 */
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const link = document.getElementById("link");
const body = document.querySelector("body");

button1.addEventListener("click", function () {
    body.style.backgroundColor = "rgb(49, 133, 197)";
});

button2.addEventListener("dblclick", function () {
    body.style.backgroundColor = "rgb(238, 147, 179)";
});

button3.addEventListener("mousedown", function () {
    body.style.backgroundColor = "rgba(111, 60, 27, 0.754)";
});

button3.addEventListener("mouseup", function () {
    body.style.backgroundColor = "white";
});

link.addEventListener("mouseenter", function () {
    body.style.backgroundColor = "rgb(255, 239, 149)";
});

link.addEventListener("mouseleave", function () {
    body.style.backgroundColor = "white";
});

/*7-4. Реалізуйте програму, яка по натисканню на кнопку видалятиме обраний елемент 
випадаючого списку. Можуть видалятися всі елементи в будь-якому порядку.
https://user-images.githubusercontent.com/9075641/228462160-e0584c12-eb4a-4973-b598-46e1cde9b941.png */

document.getElementById("deleteButton").addEventListener("click", function () {
    const dropdownList = document.getElementById("dropdownList");
    const selectedOption = dropdownList.value;
    const myOptions = dropdownList.options;

    for (let i = 0; i < myOptions.length; i++) {
        if (myOptions[i].value === selectedOption) {
            dropdownList.removeChild(myOptions[i]);
            break;
        }
    }
});

/* 7-5. Реалізуйте програму, яка по натисканню на кнопку виводитиме повідомлення 
"I was pressed!", при наведенні на кнопку виводитиме повідомлення "Mouse on me!", 
а при відведенні курсора миші виводитиме повідомлення "Mouse is not on me!".
Приклад роботи:
https://user-images.githubusercontent.com/9075641/228462490-a2ec423a-44e3-40f5-9c0a-7e9d207f2822.png 
 */

const myButton = document.getElementById("myButton");
const message = document.getElementById("message");

let messages = [];
myButton.addEventListener("click", () => {
    messages.push("I was pressed!");
    message.innerHTML = messages.join("<br>");
});

myButton.addEventListener("mouseover", () => {
    messages.push("Mouse on me!");
    message.innerHTML = messages.join("<br>");
});

myButton.addEventListener("mouseout", () => {
    messages.push("Mouse is not on me!");
    message.innerHTML = messages.join("<br>");
});

/* 7-6. Реалізуйте програму, яка відслідковуватиме зміну розміру (ширини і висоти) 
вікна браузера і виводитиме на поточну сторінку при її розтязі/стисканні відповідні значення.
https://user-images.githubusercontent.com/9075641/228463011-5302f615-86e6-41dc-b09a-62bed3564596.png */

const windowSize = document.getElementById("window-size");

function updateWindowSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    windowSize.innerText = `Width:${width}, height:${height}`;
}

updateWindowSize();
window.addEventListener("resize", updateWindowSize);

/* 7-7. На сторінці потрібно реалізувати 2 випадаючих списки. 
У першому містяться назви країн, у другому – назви міст. 
Реалізувати роботу таким чином, щоб коли вибирається з лівого випадаючого списку певна країна - 
в правому випадаючому списку з"являлися міста цієї країни. Список міст формується динамічно, 
через JavaScript. Також потрібно нижче вивести назву обраної країни і місто.
https://user-images.githubusercontent.com/9075641/228463508-6225f4ee-7ad2-4130-b7fc-d97a2d236693.png*/

const citiesByCountry = {
    "ger": ["Berlin", "Hamburg", "Munich"],
    "usa": ["New York", "Los Angeles", "Chicago"],
    "ukr": ["Kyiv", "Lviv", "Odesa"]
};

const countrySelect = document.getElementById("country");
const citiesSelect = document.getElementById("cities");
const output = document.getElementById("chosenLocation");

const defaultCountry = "ger";
const defaultCity = "Berlin";
countrySelect.value = defaultCountry;
const cities = citiesByCountry[defaultCountry];
citiesSelect.innerHTML = "";
cities.forEach(city => {
    const option = document.createElement("option");
    option.value = city;
    option.textContent = city;
    citiesSelect.appendChild(option);
});
citiesSelect.value = defaultCity;

const selectedCountryName = countrySelect.options[countrySelect.selectedIndex].text;
const selectedCityName = citiesSelect.value;
output.textContent = `${selectedCountryName}, ${selectedCityName}`;

countrySelect.addEventListener("change", () => {
    const selectedCountry = countrySelect.value;
    const cities = citiesByCountry[selectedCountry];
    citiesSelect.innerHTML = "";
    cities.forEach(city => {
        const option = document.createElement("option");
        option.value = city;
        option.textContent = city;
        citiesSelect.appendChild(option);
    });
    const selectedCountryName = countrySelect.options[countrySelect.selectedIndex].text;
    const selectedCityName = citiesSelect.value;
    output.textContent = `${selectedCountryName}, ${selectedCityName}`;
});

citiesSelect.addEventListener("change", () => {
    const selectedCountryName = countrySelect.options[countrySelect.selectedIndex].text;
    const selectedCityName = citiesSelect.value;
    output.textContent = `${selectedCountryName}, ${selectedCityName}`;
});